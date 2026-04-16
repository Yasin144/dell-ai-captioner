$port = 8430
$baseUrl = "http://127.0.0.1:$port"
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)
$script:MuxUploadSessions = @{}

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
  $headerDelimiter = [byte[]](13, 10, 13, 10)
  $headerEndIndex = -1
  $headerBytes = [byte[]]@()
  $initialBodyBytes = [byte[]]@()
  $headerMemory = New-Object System.IO.MemoryStream

  try {
    while ($headerEndIndex -lt 0) {
      $read = $Stream.Read($buffer, 0, $buffer.Length)
      if ($read -le 0) {
        break
      }

      $headerMemory.Write($buffer, 0, $read)
      $currentHeaderBytes = $headerMemory.ToArray()
      $headerEndIndex = Get-BytePatternIndex -Bytes $currentHeaderBytes -Pattern $headerDelimiter

      if ($headerEndIndex -ge 0) {
        $bodyStartIndex = $headerEndIndex + 4
        $headerBytes = New-Object byte[] $headerEndIndex
        [System.Buffer]::BlockCopy($currentHeaderBytes, 0, $headerBytes, 0, $headerEndIndex)

        $initialBodyLength = $currentHeaderBytes.Length - $bodyStartIndex
        if ($initialBodyLength -gt 0) {
          $initialBodyBytes = New-Object byte[] $initialBodyLength
          [System.Buffer]::BlockCopy($currentHeaderBytes, $bodyStartIndex, $initialBodyBytes, 0, $initialBodyLength)
        }
      }
    }
  } finally {
    $headerMemory.Dispose()
  }

  if ($headerEndIndex -lt 0) {
    throw "Could not parse the HTTP request."
  }

  $headerText = [System.Text.Encoding]::ASCII.GetString($headerBytes)
  $lines = $headerText -split "`r`n"
  $requestLine = $lines[0].Split(" ")
  $headers = @{}
  $contentLength = 0

  foreach ($line in $lines[1..($lines.Length - 1)]) {
    if (-not $line) {
      continue
    }

    $separatorIndex = $line.IndexOf(":")
    if ($separatorIndex -lt 0) {
      continue
    }

    $headers[$line.Substring(0, $separatorIndex).Trim()] = $line.Substring($separatorIndex + 1).Trim()
    if ($line.Substring(0, $separatorIndex).Trim() -ieq "Content-Length") {
      $contentLength = [int]$line.Substring($separatorIndex + 1).Trim()
    }
  }

  $bodyBytes = if ($contentLength -gt 0) {
    New-Object byte[] $contentLength
  } else {
    [byte[]]@()
  }

  $copiedLength = 0
  if ($contentLength -gt 0 -and $initialBodyBytes.Length -gt 0) {
    $copiedLength = [Math]::Min($initialBodyBytes.Length, $contentLength)
    [System.Buffer]::BlockCopy($initialBodyBytes, 0, $bodyBytes, 0, $copiedLength)
  }

  while ($copiedLength -lt $contentLength) {
    $read = $Stream.Read($bodyBytes, $copiedLength, $contentLength - $copiedLength)
    if ($read -le 0) {
      throw "The HTTP request body ended before the declared Content-Length was received."
    }

    $copiedLength += $read
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

function Write-FileResponse {
  param(
    [System.IO.Stream]$Stream,
    [int]$StatusCode,
    [string]$FilePath,
    [string]$ContentType = "application/octet-stream",
    [hashtable]$ExtraHeaders = @{}
  )

  if (-not (Test-Path $FilePath)) {
    throw "The response file was not found."
  }

  $fileInfo = Get-Item $FilePath
  $headers = @(
    "HTTP/1.1 $StatusCode $(Get-StatusText -StatusCode $StatusCode)",
    "Access-Control-Allow-Origin: *",
    "Access-Control-Allow-Methods: GET, POST, OPTIONS",
    "Access-Control-Allow-Headers: Content-Type",
    "Content-Length: $($fileInfo.Length)",
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

  $buffer = New-Object byte[] 65536
  $fileStream = [System.IO.File]::OpenRead($FilePath)
  try {
    while (($read = $fileStream.Read($buffer, 0, $buffer.Length)) -gt 0) {
      $Stream.Write($buffer, 0, $read)
    }
  } finally {
    $fileStream.Dispose()
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

function Get-QueryParameters {
  param([System.Uri]$Uri)

  $result = @{}
  $queryText = [string]$Uri.Query
  if ([string]::IsNullOrWhiteSpace($queryText)) {
    return $result
  }

  foreach ($pair in $queryText.TrimStart("?") -split "&") {
    if ([string]::IsNullOrWhiteSpace($pair)) {
      continue
    }

    $parts = $pair -split "=", 2
    $name = [System.Uri]::UnescapeDataString($parts[0])
    $value = if ($parts.Length -gt 1) { [System.Uri]::UnescapeDataString($parts[1]) } else { "" }
    $result[$name] = $value
  }

  return $result
}

function Read-LittleEndianUInt32 {
  param(
    [byte[]]$Bytes,
    [int]$Offset
  )

  return [System.BitConverter]::ToUInt32($Bytes, $Offset)
}

function Write-ByteRangeToFile {
  param(
    [string]$Path,
    [byte[]]$Bytes,
    [int]$Offset,
    [int]$Length
  )

  $fileStream = [System.IO.File]::Open($Path, [System.IO.FileMode]::Create, [System.IO.FileAccess]::Write, [System.IO.FileShare]::None)
  try {
    if ($Length -gt 0) {
      $fileStream.Write($Bytes, $Offset, $Length)
    }
  } finally {
    $fileStream.Dispose()
  }
}

function Append-BytesToFile {
  param(
    [string]$Path,
    [byte[]]$Bytes
  )

  $directory = Split-Path -Path $Path -Parent
  if ($directory -and -not (Test-Path $directory)) {
    New-Item -ItemType Directory -Path $directory -Force | Out-Null
  }

  $fileStream = [System.IO.File]::Open($Path, [System.IO.FileMode]::Append, [System.IO.FileAccess]::Write, [System.IO.FileShare]::None)
  try {
    if ($Bytes -and $Bytes.Length -gt 0) {
      $fileStream.Write($Bytes, 0, $Bytes.Length)
    }
  } finally {
    $fileStream.Dispose()
  }
}

function New-MuxUploadSession {
  param([object]$Metadata)

  $sessionId = [System.Guid]::NewGuid().ToString()
  $videoExtension = Get-FileExtension -FileName ([string]$Metadata.videoFileName) -FallbackExtension ".webm"
  $audioExtension = Get-FileExtension -FileName ([string]$Metadata.audioFileName) -FallbackExtension ".wav"
  $musicExtension = Get-FileExtension -FileName ([string]$Metadata.musicFileName) -FallbackExtension ".wav"
  $session = @{
    Id = $sessionId
    Metadata = $Metadata
    VideoPath = Join-Path $env:TEMP ("mux-video-" + $sessionId + $videoExtension)
    AudioPath = Join-Path $env:TEMP ("mux-audio-" + $sessionId + $audioExtension)
    MusicPath = Join-Path $env:TEMP ("mux-music-" + $sessionId + $musicExtension)
    VideoBytes = 0
    AudioBytes = 0
    MusicBytes = 0
  }
  $script:MuxUploadSessions[$sessionId] = $session
  return $session
}

function Remove-MuxUploadSession {
  param([string]$SessionId)

  if (-not $script:MuxUploadSessions.ContainsKey($SessionId)) {
    return
  }

  $session = $script:MuxUploadSessions[$SessionId]
  foreach ($path in @($session.VideoPath, $session.AudioPath, $session.MusicPath)) {
    if (-not [string]::IsNullOrWhiteSpace($path) -and (Test-Path $path)) {
      Remove-Item $path -Force -ErrorAction SilentlyContinue
    }
  }

  $script:MuxUploadSessions.Remove($SessionId)
}

function Read-MuxBinaryPayload {
  param([byte[]]$Bytes)

  $magicText = "LOMUX1"
  $magicLength = $magicText.Length
  $headerLength = $magicLength + 16

  if (-not $Bytes -or $Bytes.Length -lt $headerLength) {
    throw "The binary mux payload was incomplete."
  }

  $receivedMagic = [System.Text.Encoding]::ASCII.GetString($Bytes, 0, $magicLength)
  if ($receivedMagic -ne $magicText) {
    throw "The binary mux payload format was not recognized."
  }

  $metadataLength = [int](Read-LittleEndianUInt32 -Bytes $Bytes -Offset $magicLength)
  $videoLength = [int](Read-LittleEndianUInt32 -Bytes $Bytes -Offset ($magicLength + 4))
  $audioLength = [int](Read-LittleEndianUInt32 -Bytes $Bytes -Offset ($magicLength + 8))
  $musicLength = [int](Read-LittleEndianUInt32 -Bytes $Bytes -Offset ($magicLength + 12))

  if ($metadataLength -lt 0 -or $videoLength -lt 0 -or $audioLength -lt 0 -or $musicLength -lt 0) {
    throw "The binary mux payload contained invalid lengths."
  }

  $expectedLength = $headerLength + $metadataLength + $videoLength + $audioLength + $musicLength
  if ($Bytes.Length -lt $expectedLength) {
    throw "The binary mux payload ended before all declared file data was received."
  }

  $metadataBytes = New-Object byte[] $metadataLength
  if ($metadataLength -gt 0) {
    [System.Buffer]::BlockCopy($Bytes, $headerLength, $metadataBytes, 0, $metadataLength)
  }

  $metadataJson = [System.Text.Encoding]::UTF8.GetString($metadataBytes)
  $metadata = if ([string]::IsNullOrWhiteSpace($metadataJson)) {
    $null
  } else {
    $metadataJson | ConvertFrom-Json
  }

  $videoOffset = $headerLength + $metadataLength
  $audioOffset = $videoOffset + $videoLength
  $musicOffset = $audioOffset + $audioLength

  return @{
    Metadata = $metadata
    VideoOffset = $videoOffset
    VideoLength = $videoLength
    AudioOffset = $audioOffset
    AudioLength = $audioLength
    MusicOffset = $musicOffset
    MusicLength = $musicLength
  }
}

function Get-FFmpegPath {
  $command = Get-Command ffmpeg -ErrorAction SilentlyContinue
  if ($command -and $command.Source -and (Test-Path $command.Source)) {
    return $command.Source
  }

  $packageRoot = Join-Path $env:LOCALAPPDATA "Microsoft\WinGet\Packages"
  if (Test-Path $packageRoot) {
    $match = Get-ChildItem $packageRoot -Filter ffmpeg.exe -Recurse -ErrorAction SilentlyContinue |
      Select-Object -First 1 -ExpandProperty FullName
    if ($match) {
      return $match
    }
  }

  throw "FFmpeg is not installed on this machine."
}

function Get-FileExtension {
  param(
    [string]$FileName,
    [string]$FallbackExtension
  )

  $extension = [System.IO.Path]::GetExtension($FileName)
  if ([string]::IsNullOrWhiteSpace($extension)) {
    return $FallbackExtension
  }

  return $extension
}

function Invoke-VideoMux {
  param(
    [string]$VideoPath,
    [string]$AudioPath,
    [string]$MusicPath = "",
    [double]$AudioSpeed = 1.0,
    [double]$VideoSpeed = 1.0,
    [string]$ExportQuality = "hd",
    [double]$MusicVolume = 0.18,
    [double]$TargetDurationMs = 0,
    [bool]$AudioDuckingEnabled = $true,
    [switch]$KeepOutputFile
  )

  $ffmpegPath = Get-FFmpegPath
  $outputPath = Join-Path $env:TEMP ("learning-outcomes-" + [System.Guid]::NewGuid().ToString() + ".mp4")

  try {
    $safeMusicVolume = [Math]::Min([Math]::Max($MusicVolume, 0.0), 1.0)
    $safeAudioSpeed = [Math]::Min([Math]::Max($AudioSpeed, 0.5), 2.0)
    $safeVideoSpeed = [Math]::Min([Math]::Max($VideoSpeed, 1.0), 20.0)
    $safeTargetDurationMs = [Math]::Max([double]$TargetDurationMs, 0.0)
    $volumeText = [string]::Format([System.Globalization.CultureInfo]::InvariantCulture, "{0:0.00}", $safeMusicVolume)
    $audioSpeedText = [string]::Format([System.Globalization.CultureInfo]::InvariantCulture, "{0:0.00}", $safeAudioSpeed)
    $videoSpeedText = [string]::Format([System.Globalization.CultureInfo]::InvariantCulture, "{0:0.00}", $safeVideoSpeed)
    $targetDurationSecondsText = if ($safeTargetDurationMs -gt 0) {
      [string]::Format([System.Globalization.CultureInfo]::InvariantCulture, "{0:0.000}", ($safeTargetDurationMs / 1000.0))
    } else {
      ""
    }
    $is4k = $ExportQuality -eq "4k"
    $is2k = $ExportQuality -eq "2k"
    $scaleFilter = if ($is4k) { "scale=3840:2160:flags=lanczos" } elseif ($is2k) { "scale=2560:1440:flags=lanczos" } else { "" }
    $args = @("-y", "-i", $VideoPath, "-i", $AudioPath)
    $videoFilters = @()
    if ($safeVideoSpeed -ne 1.0) {
      $videoFilters += "setpts=$videoSpeedText*PTS"
    }
    if (-not [string]::IsNullOrWhiteSpace($scaleFilter)) {
      $videoFilters += $scaleFilter
    }
    $videoFilterInput = if ($videoFilters.Count -gt 0) {
      "[0:v]{0}[vout]" -f ($videoFilters -join ",")
    } else {
      "[0:v]null[vout]"
    }

    if (-not [string]::IsNullOrWhiteSpace($MusicPath) -and (Test-Path $MusicPath)) {
      $args += @("-stream_loop", "-1", "-i", $MusicPath)
      if ($AudioDuckingEnabled) {
          $audioFilterInput = if ($safeAudioSpeed -ne 1.0) { "[1:a]atempo=$audioSpeedText,asplit[narr_out][narr_sc]" } else { "[1:a]anull,asplit[narr_out][narr_sc]" }
          $mixedAudioTail = if ($targetDurationSecondsText) {
            "amix=inputs=2:duration=first:dropout_transition=2,apad=whole_dur=$targetDurationSecondsText[aout]"
          } else {
            "amix=inputs=2:duration=first:dropout_transition=2,apad[aout]"
          }
          $args += @(
            "-filter_complex",
            "$videoFilterInput;$audioFilterInput;[2:a]volume=$volumeText[music];[music][narr_sc]sidechaincompress=threshold=0.08:ratio=4:attack=5:release=50[ducked_music];[narr_out][ducked_music]$mixedAudioTail",
            "-map", "[vout]",
            "-map", "[aout]"
          )
      } else {
          $audioFilterInput = if ($safeAudioSpeed -ne 1.0) { "[1:a]atempo=$audioSpeedText[narr]" } else { "[1:a]anull[narr]" }
          $mixedAudioTail = if ($targetDurationSecondsText) {
            "amix=inputs=2:duration=first:dropout_transition=2,apad=whole_dur=$targetDurationSecondsText[aout]"
          } else {
            "amix=inputs=2:duration=first:dropout_transition=2,apad[aout]"
          }
          $args += @(
            "-filter_complex",
            "$videoFilterInput;$audioFilterInput;[2:a]volume=$volumeText[music];[narr][music]$mixedAudioTail",
            "-map", "[vout]",
            "-map", "[aout]"
          )
      }
    } elseif ($safeAudioSpeed -ne 1.0 -or $videoFilters.Count -gt 0) {
      $audioFilterInput = if ($targetDurationSecondsText) {
        if ($safeAudioSpeed -ne 1.0) {
          "[1:a]atempo=$audioSpeedText,apad=whole_dur=$targetDurationSecondsText[aout]"
        } else {
          "[1:a]anull,apad=whole_dur=$targetDurationSecondsText[aout]"
        }
      } else {
        if ($safeAudioSpeed -ne 1.0) { "[1:a]atempo=$audioSpeedText,apad[aout]" } else { "[1:a]anull,apad[aout]" }
      }
      $args += @(
        "-filter_complex",
        "$videoFilterInput;$audioFilterInput",
        "-map", "[vout]",
        "-map", "[aout]"
      )
    } else {
      $audioFilterInput = if ($targetDurationSecondsText) {
        "[1:a]anull,apad=whole_dur=$targetDurationSecondsText[aout]"
      } else {
        "[1:a]anull,apad[aout]"
      }
      $args += @(
        "-filter_complex",
        "$videoFilterInput;$audioFilterInput",
        "-map", "[vout]",
        "-map", "[aout]"
      )
    }

    $baseArgs = $args

    $encoderConfigs = @(
      @{
        Name = "NVENC (Nvidia GPU - Ultra Fast)"
        Args = @("-c:v", "h264_nvenc", "-preset", "p4", "-cq", $(if ($is4k) { "18" } elseif ($is2k) { "20" } else { "22" }), "-b:v", $(if ($is4k) { "32M" } elseif ($is2k) { "22M" } else { "14M" }), "-pix_fmt", "yuv420p")
      },
      @{
        Name = "AMF (AMD GPU - Ultra Fast)"
        Args = @("-c:v", "h264_amf", "-quality", "quality", "-b:v", $(if ($is4k) { "32M" } elseif ($is2k) { "22M" } else { "14M" }), "-pix_fmt", "yuv420p")
      },
      @{
        Name = "QSV (Intel GPU - Fast)"
        Args = @("-c:v", "h264_qsv", "-preset", "medium", "-global_quality", "22", "-b:v", $(if ($is4k) { "32M" } elseif ($is2k) { "22M" } else { "14M" }), "-pix_fmt", "yuv420p")
      },
      @{
        Name = "CPU Fast (Universal Fallback)"
        Args = @("-c:v", "libx264", "-profile:v", "high", "-level", $(if ($is4k) { "5.1" } elseif ($is2k) { "5.0" } else { "4.1" }), "-pix_fmt", "yuv420p", "-preset", "veryfast", "-crf", $(if ($is4k) { "12" } elseif ($is2k) { "13" } else { "14" }), "-maxrate", $(if ($is4k) { "32M" } elseif ($is2k) { "22M" } else { "14M" }), "-bufsize", $(if ($is4k) { "64M" } elseif ($is2k) { "44M" } else { "28M" }))
      }
    )

    $audioArgs = @("-c:a", "aac", "-ar", "48000", "-b:a", "192k", "-movflags", "+faststart", $outputPath)
    
    $success = $false
    foreach ($config in $encoderConfigs) {
      if (Test-Path $outputPath) { Remove-Item $outputPath -Force }
      Write-Host "Trying video export with $($config.Name)..."
      $fullArgs = $baseArgs + $config.Args + $audioArgs
      
      $transcodeOutput = & $ffmpegPath @fullArgs 2>&1 | Out-String
      if ($LASTEXITCODE -eq 0 -and (Test-Path $outputPath)) {
        Write-Host "Success! Compiled with $($config.Name)."
        $success = $true
        break
      }
    }

    if (-not $success) {
      throw "All FFmpeg encoding methods failed. Last error: $transcodeOutput"
    }

    if ($KeepOutputFile) {
      $resultPath = $outputPath
      $outputPath = $null
      return $resultPath
    }

    return [System.IO.File]::ReadAllBytes($outputPath)
  } finally {
    if ($outputPath -and (Test-Path $outputPath)) {
      Remove-Item $outputPath -Force
    }
  }
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
  $query = Get-QueryParameters -Uri $uri

  if ($Request.Method -eq "GET" -and ($path -eq "" -or $path -eq "/health")) {
    try {
      $ffmpegPath = Get-FFmpegPath
      Write-JsonResponse -Stream $Stream -StatusCode 200 -Payload @{ ok = $true; ffmpegPath = $ffmpegPath }
    } catch {
      Write-JsonResponse -Stream $Stream -StatusCode 500 -Payload @{ ok = $false; error = $_.Exception.Message }
    }
    return
  }

  if ($Request.Method -eq "POST" -and $path -eq "/api/mux-upload-session") {
    try {
      $payload = Read-JsonBody -Bytes $Request.BodyBytes
      $session = New-MuxUploadSession -Metadata $payload
      Write-JsonResponse -Stream $Stream -StatusCode 200 -Payload @{ ok = $true; sessionId = $session.Id }
    } catch {
      Write-JsonResponse -Stream $Stream -StatusCode 500 -Payload @{ error = $_.Exception.Message }
    }
    return
  }

  if ($Request.Method -eq "POST" -and $path -eq "/api/mux-upload-chunk") {
    try {
      $sessionId = [string]$query["sessionId"]
      $target = [string]$query["target"]
      if ([string]::IsNullOrWhiteSpace($sessionId) -or -not $script:MuxUploadSessions.ContainsKey($sessionId)) {
        Write-JsonResponse -Stream $Stream -StatusCode 400 -Payload @{ error = "The chunked upload session was not found." }
        return
      }

      $session = $script:MuxUploadSessions[$sessionId]
      $targetPath = switch ($target) {
        "audio" { $session.AudioPath; break }
        "music" { $session.MusicPath; break }
        default { $session.VideoPath; break }
      }

      Append-BytesToFile -Path $targetPath -Bytes $Request.BodyBytes
      switch ($target) {
        "audio" { $session.AudioBytes += $Request.BodyBytes.Length; break }
        "music" { $session.MusicBytes += $Request.BodyBytes.Length; break }
        default { $session.VideoBytes += $Request.BodyBytes.Length; break }
      }
      $script:MuxUploadSessions[$sessionId] = $session
      Write-JsonResponse -Stream $Stream -StatusCode 200 -Payload @{
        ok = $true
        sessionId = $sessionId
        target = $target
        receivedBytes = switch ($target) {
          "audio" { $session.AudioBytes; break }
          "music" { $session.MusicBytes; break }
          default { $session.VideoBytes; break }
        }
      }
    } catch {
      Write-JsonResponse -Stream $Stream -StatusCode 500 -Payload @{ error = $_.Exception.Message }
    }
    return
  }

  if ($Request.Method -eq "POST" -and $path -eq "/api/mux-upload-complete") {
    $sessionId = ""
    try {
      $payload = Read-JsonBody -Bytes $Request.BodyBytes
      $sessionId = if ($payload) { [string]$payload.sessionId } else { "" }
      if ([string]::IsNullOrWhiteSpace($sessionId) -or -not $script:MuxUploadSessions.ContainsKey($sessionId)) {
        Write-JsonResponse -Stream $Stream -StatusCode 400 -Payload @{ error = "The chunked upload session was not found." }
        return
      }

      $session = $script:MuxUploadSessions[$sessionId]
      if ($session.VideoBytes -le 0 -or $session.AudioBytes -le 0) {
        Write-JsonResponse -Stream $Stream -StatusCode 400 -Payload @{ error = "Video and audio are both required." }
        return
      }

      $metadata = $session.Metadata
      $musicPath = if ($session.MusicBytes -gt 0 -and (Test-Path $session.MusicPath)) { $session.MusicPath } else { "" }
      $muxedVideoPath = Invoke-VideoMux `
        -VideoPath $session.VideoPath `
        -AudioPath $session.AudioPath `
        -MusicPath $musicPath `
        -AudioSpeed $(if ($metadata) { [double]$metadata.audioSpeed } else { 1.0 }) `
        -VideoSpeed $(if ($metadata) { [double]$metadata.videoSpeed } else { 1.0 }) `
        -ExportQuality $(if ($metadata) { [string]$metadata.exportQuality } else { "hd" }) `
        -MusicVolume $(if ($metadata) { [double]$metadata.musicVolume } else { 0.18 }) `
        -TargetDurationMs $(if ($metadata) { [double]$metadata.targetDurationMs } else { 0.0 }) `
        -AudioDuckingEnabled $(if ($metadata -and $metadata.audioDuckingEnabled -ne $null) { [bool]$metadata.audioDuckingEnabled } else { $true }) `
        -KeepOutputFile
      try {
        Write-FileResponse -Stream $Stream -StatusCode 200 -FilePath $muxedVideoPath -ContentType "video/mp4" -ExtraHeaders @{
          "Cache-Control" = "no-store, no-cache, must-revalidate, max-age=0"
          "Pragma" = "no-cache"
          "Expires" = "0"
          "X-Content-Type-Options" = "nosniff"
        }
      } finally {
        if ($muxedVideoPath -and (Test-Path $muxedVideoPath)) {
          Remove-Item $muxedVideoPath -Force -ErrorAction SilentlyContinue
        }
      }
    } catch {
      Write-JsonResponse -Stream $Stream -StatusCode 500 -Payload @{ error = $_.Exception.Message }
    } finally {
      if ($sessionId) {
        Remove-MuxUploadSession -SessionId $sessionId
      }
    }
    return
  }

  if ($Request.Method -eq "POST" -and ($path -eq "/api/mux" -or $path -eq "/api/mux-binary")) {
    $isBinaryUpload = $path -eq "/api/mux-binary"
    $videoFileName = ""
    $audioFileName = ""
    $musicFileName = ""
    $exportQuality = "hd"
    $audioSpeed = 1.0
    $videoSpeed = 1.0
    $musicVolume = 0.18
    $targetDurationMs = 0.0
    $musicLength = 0
    $videoBytes = $null
    $audioBytes = $null
    $musicBytes = $null
    $binaryPayload = $null

    if ($isBinaryUpload) {
      $binaryPayload = Read-MuxBinaryPayload -Bytes $Request.BodyBytes
      $metadata = $binaryPayload.Metadata
      $videoFileName = if ($metadata) { [string]$metadata.videoFileName } else { "" }
      $audioFileName = if ($metadata) { [string]$metadata.audioFileName } else { "" }
      $musicFileName = if ($metadata) { [string]$metadata.musicFileName } else { "" }
      $exportQuality = if ($metadata) { [string]$metadata.exportQuality } else { "hd" }
      $audioSpeed = if ($metadata) { [double]$metadata.audioSpeed } else { 1.0 }
      $videoSpeed = if ($metadata) { [double]$metadata.videoSpeed } else { 1.0 }
      $musicVolume = if ($metadata) { [double]$metadata.musicVolume } else { 0.18 }
      $targetDurationMs = if ($metadata) { [double]$metadata.targetDurationMs } else { 0.0 }
      $audioDuckingEnabled = if ($metadata -and $metadata.audioDuckingEnabled -ne $null) { [bool]$metadata.audioDuckingEnabled } else { $true }

      if ($binaryPayload.VideoLength -le 0 -or $binaryPayload.AudioLength -le 0) {
        Write-JsonResponse -Stream $Stream -StatusCode 400 -Payload @{ error = "Video and audio are both required." }
        return
      }

      $musicLength = $binaryPayload.MusicLength
    } else {
      $payload = Read-JsonBody -Bytes $Request.BodyBytes
      $videoBase64 = if ($payload) { [string]$payload.videoBase64 } else { "" }
      $audioBase64 = if ($payload) { [string]$payload.audioBase64 } else { "" }
      $musicBase64 = if ($payload) { [string]$payload.musicBase64 } else { "" }
      $videoFileName = if ($payload) { [string]$payload.videoFileName } else { "" }
      $audioFileName = if ($payload) { [string]$payload.audioFileName } else { "" }
      $musicFileName = if ($payload) { [string]$payload.musicFileName } else { "" }
      $exportQuality = if ($payload) { [string]$payload.exportQuality } else { "hd" }
      $audioSpeed = if ($payload) { [double]$payload.audioSpeed } else { 1.0 }
      $videoSpeed = if ($payload) { [double]$payload.videoSpeed } else { 1.0 }
      $musicVolume = if ($payload) { [double]$payload.musicVolume } else { 0.18 }
      $targetDurationMs = if ($payload) { [double]$payload.targetDurationMs } else { 0.0 }
      $audioDuckingEnabled = if ($payload -and $payload.audioDuckingEnabled -ne $null) { [bool]$payload.audioDuckingEnabled } else { $true }

      if ([string]::IsNullOrWhiteSpace($videoBase64) -or [string]::IsNullOrWhiteSpace($audioBase64)) {
        Write-JsonResponse -Stream $Stream -StatusCode 400 -Payload @{ error = "Video and audio are both required." }
        return
      }

      $videoBytes = [System.Convert]::FromBase64String($videoBase64)
      $audioBytes = [System.Convert]::FromBase64String($audioBase64)
      if (-not [string]::IsNullOrWhiteSpace($musicBase64)) {
        $musicBytes = [System.Convert]::FromBase64String($musicBase64)
        $musicLength = $musicBytes.Length
      }
    }

    $videoExtension = Get-FileExtension -FileName $videoFileName -FallbackExtension ".webm"
    $audioExtension = Get-FileExtension -FileName $audioFileName -FallbackExtension ".wav"
    $musicExtension = Get-FileExtension -FileName $musicFileName -FallbackExtension ".wav"
    $tempVideo = Join-Path $env:TEMP ("canvas-" + [System.Guid]::NewGuid().ToString() + $videoExtension)
    $tempAudio = Join-Path $env:TEMP ("narration-" + [System.Guid]::NewGuid().ToString() + $audioExtension)
    $tempMusic = if ($musicLength -gt 0) {
      Join-Path $env:TEMP ("music-" + [System.Guid]::NewGuid().ToString() + $musicExtension)
    } else {
      ""
    }

    $muxedVideoPath = ""

    try {
      if ($isBinaryUpload) {
        Write-ByteRangeToFile -Path $tempVideo -Bytes $Request.BodyBytes -Offset $binaryPayload.VideoOffset -Length $binaryPayload.VideoLength
        Write-ByteRangeToFile -Path $tempAudio -Bytes $Request.BodyBytes -Offset $binaryPayload.AudioOffset -Length $binaryPayload.AudioLength
        if ($tempMusic) {
          Write-ByteRangeToFile -Path $tempMusic -Bytes $Request.BodyBytes -Offset $binaryPayload.MusicOffset -Length $binaryPayload.MusicLength
        }
      } else {
        [System.IO.File]::WriteAllBytes($tempVideo, $videoBytes)
        [System.IO.File]::WriteAllBytes($tempAudio, $audioBytes)
        if ($tempMusic) {
          [System.IO.File]::WriteAllBytes($tempMusic, $musicBytes)
        }
      }

      $muxedVideoPath = Invoke-VideoMux `
        -VideoPath $tempVideo `
        -AudioPath $tempAudio `
        -MusicPath $tempMusic `
        -AudioSpeed $audioSpeed `
        -VideoSpeed $videoSpeed `
        -ExportQuality $exportQuality `
        -MusicVolume $musicVolume `
        -TargetDurationMs $targetDurationMs `
        -AudioDuckingEnabled $audioDuckingEnabled `
        -KeepOutputFile
      Write-FileResponse -Stream $Stream -StatusCode 200 -FilePath $muxedVideoPath -ContentType "video/mp4" -ExtraHeaders @{
        "Cache-Control" = "no-store, no-cache, must-revalidate, max-age=0"
        "Pragma" = "no-cache"
        "Expires" = "0"
        "X-Content-Type-Options" = "nosniff"
      }
    } catch {
      Write-JsonResponse -Stream $Stream -StatusCode 500 -Payload @{ error = $_.Exception.Message }
    } finally {
      if ($muxedVideoPath -and (Test-Path $muxedVideoPath)) {
        Remove-Item $muxedVideoPath -Force
      }
      if (Test-Path $tempVideo) {
        Remove-Item $tempVideo -Force
      }
      if (Test-Path $tempAudio) {
        Remove-Item $tempAudio -Force
      }
      if ($tempMusic -and (Test-Path $tempMusic)) {
        Remove-Item $tempMusic -Force
      }
    }

    return
  }

  Write-JsonResponse -Stream $Stream -StatusCode 404 -Payload @{ error = "Route not found." }
}

try {
  $listener.Start()
  Write-Host "Video export server listening on $baseUrl"

  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $request = Read-HttpRequest -Stream $stream
      Handle-Request -Request $request -Stream $stream
    } catch {
      try {
        $stream = $client.GetStream()
        Write-JsonResponse -Stream $stream -StatusCode 500 -Payload @{ error = $_.Exception.Message }
      } catch {
      }
    } finally {
      $client.Close()
    }
  }
} finally {
  $listener.Stop()
}

