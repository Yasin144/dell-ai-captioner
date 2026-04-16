Add-Type -AssemblyName System.Speech

$port = 8424
$baseUrl = "http://127.0.0.1:$port"
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)

function Get-StatusText {
  param([int]$StatusCode)

  switch ($StatusCode) {
    200 { return "OK" }
    204 { return "No Content" }
    400 { return "Bad Request" }
    404 { return "Not Found" }
    405 { return "Method Not Allowed" }
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
  $headers = @{}

  foreach ($line in $lines[1..($lines.Length - 1)]) {
    if (-not $line) {
      continue
    }

    $separatorIndex = $line.IndexOf(":")
    if ($separatorIndex -lt 0) {
      continue
    }

    $headers[$line.Substring(0, $separatorIndex).Trim()] = $line.Substring($separatorIndex + 1).Trim()
  }

  $bodyStartIndex = $headerEndIndex + 4
  $bodyBytes = if ($contentLength -gt 0) {
    [byte[]]$allBytes[$bodyStartIndex..($bodyStartIndex + $contentLength - 1)]
  } else {
    [byte[]]@()
  }

  return @{
    Method = $requestLine[0]
    RawUrl = $requestLine[1]
    Headers = $headers
    BodyBytes = $bodyBytes
  }
}

function Write-HttpResponse {
  param(
    [System.IO.Stream]$Stream,
    [int]$StatusCode,
    [byte[]]$BodyBytes,
    [string]$ContentType = "application/json; charset=utf-8",
    [hashtable]$ExtraHeaders = @{}
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

  foreach ($key in $ExtraHeaders.Keys) {
    $headers += "${key}: $($ExtraHeaders[$key])"
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
  Write-HttpResponse -Stream $Stream -StatusCode $StatusCode -BodyBytes $bytes -ContentType "application/json; charset=utf-8"
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

function Get-VoiceProfile {
  param([string]$VoiceKey)

  $safeVoiceKey = if ([string]::IsNullOrWhiteSpace($VoiceKey)) { "" } else { $VoiceKey.ToLowerInvariant() }

  switch ($safeVoiceKey) {
    "male" {
      return @{
        Key = "male"
        Gender = "Male"
        PreferredPattern = "David|Mark|Guy|Daniel|Alex|James|Matthew|George|Ryan|Aaron"
        ProsodyRate = "-9%"
        ProsodyPitch = "default"
        BreakTime = "420ms"
        FileName = "male-narration.wav"
      }
    }
    "fresh" {
      return @{
        Key = "fresh"
        Gender = "Female"
        PreferredPattern = "Hazel|Jenny|Aria|Samantha|Eva|Zira|Sonia|Heera"
        ProsodyRate = "-12%"
        ProsodyPitch = "+8%"
        BreakTime = "380ms"
        FileName = "fresh-narration.wav"
      }
    }
    "indian-female" {
      return @{
        Key = "indian-female"
        Gender = "Female"
        PreferredPattern = "Heera|Sonia|Swara|Veena|Ananya|Priya|India|Indian|en-IN|hi-IN|Hazel|Jenny|Zira"
        ProsodyRate = "-22%"
        ProsodyPitch = "+3%"
        BreakTime = "620ms"
        FileName = "indian-female-narration.wav"
      }
    }
    "anjali" {
      return @{
        Key = "anjali"
        Gender = "Female"
        PreferredPattern = "Heera|Sonia|Swara|Veena|Ananya|Priya|India|Indian|en-IN|hi-IN|Hazel|Jenny|Zira"
        ProsodyRate = "-20%"
        ProsodyPitch = "+4%"
        BreakTime = "540ms"
        FileName = "anjali-narration.wav"
      }
    }
    default {
      return @{
        Key = "female"
        Gender = "Female"
        PreferredPattern = "Hazel|Jenny|Aria|Samantha|Eva|Zira|Sonia|Heera"
        ProsodyRate = "-18%"
        ProsodyPitch = "+5%"
        BreakTime = "560ms"
        FileName = "female-narration.wav"
      }
    }
  }
}

function Get-VoiceName {
  param(
    [string]$Gender,
    [string]$PreferredPattern = ""
  )

  $speaker = New-Object System.Speech.Synthesis.SpeechSynthesizer
  try {
    $voices = $speaker.GetInstalledVoices() |
      ForEach-Object { $_.VoiceInfo } |
      Where-Object { $_.Gender.ToString().Equals($Gender, [System.StringComparison]::OrdinalIgnoreCase) }

    $preferred = if (-not [string]::IsNullOrWhiteSpace($PreferredPattern)) {
      $voices | Where-Object { $_.Name -match $PreferredPattern } | Select-Object -First 1
    } else {
      $null
    }
    if ($preferred) {
      return $preferred.Name
    }

    return ($voices | Select-Object -First 1).Name
  } finally {
    $speaker.Dispose()
  }
}

function Split-NarrationText {
  param(
    [string]$Text,
    [int]$MaxChunkLength = 1100
  )

  $normalized = (($Text -replace "\r", " ") -replace "\n", " " -replace "\s+", " ").Trim()
  if ([string]::IsNullOrWhiteSpace($normalized)) {
    return @()
  }

  $sentenceParts = [regex]::Split($normalized, "(?<=[\.\!\?\:\;])\s+")
  $chunks = New-Object System.Collections.Generic.List[string]
  $current = ""

  foreach ($part in $sentenceParts) {
    $sentence = $part.Trim()
    if ([string]::IsNullOrWhiteSpace($sentence)) {
      continue
    }

    if ($sentence.Length -gt $MaxChunkLength) {
      if (-not [string]::IsNullOrWhiteSpace($current)) {
        [void]$chunks.Add($current.Trim())
        $current = ""
      }

      $segment = ""
      $words = $sentence -split "\s+"
      foreach ($word in $words) {
        if ([string]::IsNullOrWhiteSpace($word)) {
          continue
        }

        $candidate = if ($segment) { "$segment $word" } else { $word }
        if ($candidate.Length -gt $MaxChunkLength -and -not [string]::IsNullOrWhiteSpace($segment)) {
          [void]$chunks.Add($segment.Trim())
          $segment = $word
        } else {
          $segment = $candidate
        }
      }

      if (-not [string]::IsNullOrWhiteSpace($segment)) {
        [void]$chunks.Add($segment.Trim())
      }

      continue
    }

    $candidate = if ($current) { "$current $sentence" } else { $sentence }
    if ($candidate.Length -gt $MaxChunkLength -and -not [string]::IsNullOrWhiteSpace($current)) {
      [void]$chunks.Add($current.Trim())
      $current = $sentence
    } else {
      $current = $candidate
    }
  }

  if (-not [string]::IsNullOrWhiteSpace($current)) {
    [void]$chunks.Add($current.Trim())
  }

  return $chunks.ToArray()
}

function Invoke-Narration {
  param(
    [string]$Text,
    [string]$VoiceKey
  )

  $voiceProfile = Get-VoiceProfile -VoiceKey $VoiceKey
  $voiceName = Get-VoiceName -Gender $voiceProfile.Gender -PreferredPattern $voiceProfile.PreferredPattern
  if (-not $voiceName) {
    throw "No $($voiceProfile.Gender) voice is installed on this machine."
  }

  $tempPath = Join-Path $env:TEMP ("narration-" + [System.Guid]::NewGuid().ToString() + ".wav")
  $speaker = New-Object System.Speech.Synthesis.SpeechSynthesizer

  try {
    $speaker.SelectVoice($voiceName)
    $speaker.Rate = 0
    $speaker.Volume = 100
    $speaker.SetOutputToWaveFile($tempPath)
    $chunks = Split-NarrationText -Text $Text
    foreach ($chunk in $chunks) {
      $escapedText = [System.Security.SecurityElement]::Escape($chunk)
      $ssml = @"
<speak version="1.0" xml:lang="en-US">
  <prosody rate="$($voiceProfile.ProsodyRate)" pitch="$($voiceProfile.ProsodyPitch)">
    $escapedText
    <break time="$($voiceProfile.BreakTime)"/>
  </prosody>
</speak>
"@
      $speaker.SpeakSsml($ssml)
    }
    $speaker.SetOutputToNull()
    $audioBytes = [System.IO.File]::ReadAllBytes($tempPath)
    return $audioBytes
  } finally {
    $speaker.Dispose()
    if (Test-Path $tempPath) {
      Remove-Item $tempPath -Force
    }
  }
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
$parts = New-Object System.Collections.Generic.List[string]
while ($true) {
  $result = $engine.Recognize()
  if (-not $result) { break }
  if (-not [string]::IsNullOrWhiteSpace($result.Text)) {
    [void]$parts.Add($result.Text.Trim())
  }
}
$engine.Dispose()
[Console]::Out.Write(($parts -join ' ').Trim())
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
    Write-JsonResponse -Stream $Stream -StatusCode 200 -Payload @{
      ok = $true
      voices = @("male", "female", "indian-female", "fresh", "anjali")
    }
    return
  }

  if ($Request.Method -eq "POST" -and $path -eq "/api/transcribe") {
    if (-not $Request.BodyBytes -or $Request.BodyBytes.Length -eq 0) {
      Write-JsonResponse -Stream $Stream -StatusCode 400 -Payload @{ error = "No audio data received." }
      return
    }

    $tempWave = Join-Path $env:TEMP ("transcribe-" + [System.Guid]::NewGuid().ToString() + ".wav")
    [System.IO.File]::WriteAllBytes($tempWave, $Request.BodyBytes)

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

  if ($Request.Method -eq "POST" -and $path -eq "/api/narrate") {
    $payload = Read-JsonBody -Bytes $Request.BodyBytes
    $voice = if ($uri.Query -match "voice=anjali") {
      "anjali"
    } elseif ($uri.Query -match "voice=fresh") {
      "fresh"
    } elseif ($uri.Query -match "voice=indian-female") {
      "indian-female"
    } elseif ($uri.Query -match "voice=male") {
      "male"
    } else {
      "female"
    }
    $wantsJson = $uri.Query -match "format=json"
    $text = if ($payload) { [string]$payload.text } else { "" }

    if ([string]::IsNullOrWhiteSpace($text)) {
      Write-JsonResponse -Stream $Stream -StatusCode 400 -Payload @{ error = "Text is required." }
      return
    }

    $voiceProfile = Get-VoiceProfile -VoiceKey $voice
    $audioBytes = Invoke-Narration -Text $text -VoiceKey $voice
    $fileName = $voiceProfile.FileName

    if ($wantsJson) {
      Write-JsonResponse -Stream $Stream -StatusCode 200 -Payload @{
        fileName = $fileName
        contentType = "audio/wav"
        audioBase64 = [Convert]::ToBase64String($audioBytes)
      }
      return
    }

    Write-HttpResponse -Stream $Stream -StatusCode 200 -BodyBytes $audioBytes -ContentType "audio/wav"
    return
  }

  Write-JsonResponse -Stream $Stream -StatusCode 404 -Payload @{ error = "Route not found." }
}

try {
  $listener.Start()
  Write-Host "Speech server listening on $baseUrl"

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
