Add-Type -AssemblyName System.Speech

$port = 8428
$baseUrl = "http://127.0.0.1:$port"
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)

function Get-StatusText {
  param([int]$StatusCode)

  switch ($StatusCode) {
    200 { return "OK" }
    204 { return "No Content" }
    400 { return "Bad Request" }
    404 { return "Not Found" }
    500 { return "Internal Server Error" }
    default { return "OK" }
  }
}

function Get-BytePatternIndex {
  param(
    [byte[]]$Bytes,
    [byte[]]$Pattern
  )

  if (-not $Bytes -or -not $Pattern -or $Pattern.Length -gt $Bytes.Length) {
    return -1
  }

  for ($index = 0; $index -le ($Bytes.Length - $Pattern.Length); $index += 1) {
    $matched = $true
    for ($patternIndex = 0; $patternIndex -lt $Pattern.Length; $patternIndex += 1) {
      if ($Bytes[$index + $patternIndex] -ne $Pattern[$patternIndex]) {
        $matched = $false
        break
      }
    }

    if ($matched) {
      return $index
    }
  }

  return -1
}

function Read-HttpRequest {
  param([System.IO.Stream]$Stream)

  $buffer = New-Object byte[] 8192
  $memory = New-Object System.IO.MemoryStream
  $headerDelimiter = [byte[]](13, 10, 13, 10)
  $headerEndIndex = -1
  $contentLength = 0

  while ($true) {
    $read = $Stream.Read($buffer, 0, $buffer.Length)
    if ($read -le 0) {
      break
    }

    $memory.Write($buffer, 0, $read)
    $current = $memory.ToArray()

    if ($headerEndIndex -lt 0) {
      $headerEndIndex = Get-BytePatternIndex -Bytes $current -Pattern $headerDelimiter
      if ($headerEndIndex -ge 0) {
        $headerText = [System.Text.Encoding]::ASCII.GetString($current, 0, $headerEndIndex)
        $headerLines = $headerText -split "`r`n"
        foreach ($line in $headerLines[1..($headerLines.Length - 1)]) {
          if (-not $line) {
            continue
          }

          $separatorIndex = $line.IndexOf(":")
          if ($separatorIndex -lt 0) {
            continue
          }

          $name = $line.Substring(0, $separatorIndex).Trim()
          $value = $line.Substring($separatorIndex + 1).Trim()
          if ($name -ieq "Content-Length") {
            $contentLength = [int]$value
          }
        }
      }
    }

    if ($headerEndIndex -ge 0) {
      $bodyBytesAvailable = $current.Length - ($headerEndIndex + 4)
      if ($bodyBytesAvailable -ge $contentLength) {
        break
      }
    }
  }

  $allBytes = $memory.ToArray()
  $memory.Dispose()

  if ($headerEndIndex -lt 0) {
    throw "Could not parse the HTTP request."
  }

  $headerText = [System.Text.Encoding]::ASCII.GetString($allBytes, 0, $headerEndIndex)
  $lines = $headerText -split "`r`n"
  $requestLine = $lines[0].Split(" ")
  $bodyStartIndex = $headerEndIndex + 4
  $bodyBytes = if ($contentLength -gt 0) {
    [byte[]]$allBytes[$bodyStartIndex..($bodyStartIndex + $contentLength - 1)]
  } else {
    [byte[]]@()
  }

  return @{
    Method = $requestLine[0]
    RawUrl = $requestLine[1]
    BodyBytes = $bodyBytes
  }
}

function Write-HttpResponse {
  param(
    [System.IO.Stream]$Stream,
    [int]$StatusCode,
    [byte[]]$BodyBytes,
    [string]$ContentType = "application/json; charset=utf-8"
  )

  if (-not $BodyBytes) {
    $BodyBytes = [byte[]]@()
  }

  $headers = @(
    "HTTP/1.1 $StatusCode $(Get-StatusText -StatusCode $StatusCode)",
    "Access-Control-Allow-Origin: *",
    "Access-Control-Allow-Methods: GET, POST, OPTIONS",
    "Access-Control-Allow-Headers: Content-Type",
    "Content-Length: $($BodyBytes.Length)",
    "Connection: close"
  )

  if ($ContentType) {
    $headers += "Content-Type: $ContentType"
  }

  $headerText = ($headers -join "`r`n") + "`r`n`r`n"
  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headerText)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  if ($BodyBytes.Length -gt 0) {
    $Stream.Write($BodyBytes, 0, $BodyBytes.Length)
  }
}

function Write-JsonResponse {
  param(
    [System.IO.Stream]$Stream,
    [int]$StatusCode,
    [object]$Payload
  )

  $json = $Payload | ConvertTo-Json -Depth 6 -Compress
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($json)
  Write-HttpResponse -Stream $Stream -StatusCode $StatusCode -BodyBytes $bytes
}

function Read-JsonBody {
  param([byte[]]$Bytes)

  if (-not $Bytes -or $Bytes.Length -eq 0) {
    return $null
  }

  $json = [System.Text.Encoding]::UTF8.GetString($Bytes)
  if ([string]::IsNullOrWhiteSpace($json)) {
    return $null
  }

  return $json | ConvertFrom-Json
}

function Invoke-Transcription {
  param([string]$WavePath)

  $safePath = $WavePath.Replace("'", "''")
  $command = @'
Add-Type -AssemblyName System.Speech
$culture = New-Object System.Globalization.CultureInfo('en-US')
$engine = New-Object System.Speech.Recognition.SpeechRecognitionEngine($culture)
$grammar = New-Object System.Speech.Recognition.DictationGrammar
$engine.LoadGrammar($grammar)
$engine.SetInputToWaveFile('__WAVE_PATH__')
$engine.InitialSilenceTimeout = [TimeSpan]::FromSeconds(8)
$engine.EndSilenceTimeout = [TimeSpan]::FromSeconds(0.8)
$engine.EndSilenceTimeoutAmbiguous = [TimeSpan]::FromSeconds(1.2)
$result = $engine.Recognize()
$engine.Dispose()
$text = ''
if ($result) {
  $text = $result.Text.Trim()
}
[Console]::Out.Write($text)
'@.Replace('__WAVE_PATH__', $safePath)

  $resultText = & powershell -NoProfile -ExecutionPolicy Bypass -Command $command
  return ($resultText -join "").Trim()
}

function Handle-Request {
  param(
    [hashtable]$Request,
    [System.IO.Stream]$Stream
  )

  if ($Request.Method -eq "OPTIONS") {
    Write-HttpResponse -Stream $Stream -StatusCode 204 -BodyBytes ([byte[]]@()) -ContentType ""
    return
  }

  $uri = [System.Uri]::new("$baseUrl$($Request.RawUrl)")
  $path = $uri.AbsolutePath.TrimEnd("/")

  if ($Request.Method -eq "GET" -and ($path -eq "" -or $path -eq "/health")) {
    Write-JsonResponse -Stream $Stream -StatusCode 200 -Payload @{ ok = $true }
    return
  }

  if ($Request.Method -eq "POST" -and $path -eq "/api/transcribe") {
    $payload = Read-JsonBody -Bytes $Request.BodyBytes
    $audioBase64 = if ($payload) { [string]$payload.audioBase64 } else { "" }

    if ([string]::IsNullOrWhiteSpace($audioBase64)) {
      Write-JsonResponse -Stream $Stream -StatusCode 400 -Payload @{ error = "No audio data received." }
      return
    }

    $tempWave = Join-Path $env:TEMP ("transcribe-" + [System.Guid]::NewGuid().ToString() + ".wav")
    [System.IO.File]::WriteAllBytes($tempWave, [System.Convert]::FromBase64String($audioBase64))

    try {
      $text = Invoke-Transcription -WavePath $tempWave
      Write-JsonResponse -Stream $Stream -StatusCode 200 -Payload @{ text = $text }
    } finally {
      if (Test-Path $tempWave) {
        Remove-Item $tempWave -Force
      }
    }

    return
  }

  Write-JsonResponse -Stream $Stream -StatusCode 404 -Payload @{ error = "Route not found." }
}

try {
  $listener.Start()
  Write-Host "Transcription server listening on $baseUrl"

  while ($true) {
    $client = $listener.AcceptTcpClient()

    try {
      $stream = $client.GetStream()
      $request = Read-HttpRequest -Stream $stream
      Handle-Request -Request $request -Stream $stream
    } catch {
      try {
        Write-JsonResponse -Stream $stream -StatusCode 500 -Payload @{ error = $_.Exception.Message }
      } catch {
      }
    } finally {
      if ($stream) {
        $stream.Dispose()
      }

      $client.Close()
    }
  }
} finally {
  $listener.Stop()
}
