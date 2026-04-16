$projectRoot = $PSScriptRoot

$speechServer = Join-Path $projectRoot "speech-server.ps1"
$anjaliCloneServer = Join-Path $projectRoot "anjali-chatterbox-server.py"
$anjaliClonePython = Join-Path $projectRoot ".voiceclone-venv\Scripts\python.exe"
$transcribeServer = Join-Path $projectRoot "transcribe-server.ps1"
$videoExportServer = Join-Path $projectRoot "video-export-server.ps1"
$staticServer = Join-Path $projectRoot "retest-static-server.ps1"

function Wait-ForHttpReady {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Url,
    [int]$TimeoutSeconds = 20,
    [scriptblock]$ReadyCheck = $null
  )

  $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
  do {
    try {
      $response = Invoke-RestMethod -UseBasicParsing $Url -TimeoutSec 3
      if (-not $ReadyCheck -or (& $ReadyCheck $response)) {
        return $true
      }
    } catch {
    }

    Start-Sleep -Milliseconds 800
  } while ((Get-Date) -lt $deadline)

  return $false
}

function Stop-ProcessesMatching {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Pattern
  )

  Get-CimInstance Win32_Process -ErrorAction SilentlyContinue |
    Where-Object { $_.CommandLine -like "*$Pattern*" } |
    ForEach-Object {
      try {
        Stop-Process -Id $_.ProcessId -Force -ErrorAction Stop
      } catch {
      }
    }
}

function Stop-ListeningProcessOnPort {
  param(
    [Parameter(Mandatory = $true)]
    [int]$Port
  )

  Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue |
    Select-Object -ExpandProperty OwningProcess -Unique |
    ForEach-Object {
      try {
        Stop-Process -Id $_ -Force -ErrorAction Stop
      } catch {
      }
    }
}

Stop-ProcessesMatching -Pattern "speech-server.ps1"
Stop-ProcessesMatching -Pattern "anjali-clone-server.py"
Stop-ProcessesMatching -Pattern "transcribe-server.ps1"
Stop-ProcessesMatching -Pattern "video-export-server.ps1"
Stop-ProcessesMatching -Pattern "retest-static-server.ps1"
Stop-ProcessesMatching -Pattern "ollama"
Stop-ListeningProcessOnPort -Port 8424
Stop-ListeningProcessOnPort -Port 8426
Stop-ListeningProcessOnPort -Port 8428
Stop-ListeningProcessOnPort -Port 8430
Stop-ListeningProcessOnPort -Port 8080

Write-Host "Starting narration server..."
Start-Process powershell -ArgumentList @(
  "-ExecutionPolicy", "Bypass",
  "-File", "`"$speechServer`""
) -WorkingDirectory $projectRoot

if ((Test-Path $anjaliClonePython) -and (Test-Path $anjaliCloneServer)) {
  Write-Host "Starting Anjali clone server..."
  $anjaliCommand = '$env:PYTHONWARNINGS=''ignore''; $env:COQUI_TOS_AGREED=''1''; & ''{0}'' ''{1}''' -f $anjaliClonePython, $anjaliCloneServer
  Start-Process powershell -ArgumentList @(
    "-ExecutionPolicy", "Bypass",
    "-Command", $anjaliCommand
  ) -WorkingDirectory $projectRoot
  Write-Host "Waiting for Anjali clone model to warm up (this can take 2-4 minutes on CPU)..."
  if (Wait-ForHttpReady -Url "http://127.0.0.1:8426/health" -TimeoutSeconds 240 -ReadyCheck { param($body) $body.ok -eq $true }) {
    Write-Host "Anjali clone server is ready."
  } else {
    Write-Host "Anjali clone server started, but the model is still warming up."
  }
} else {
  Write-Host "Skipping Anjali clone server because the Python environment was not found."
}

Write-Host "Starting transcription server..."
Start-Process powershell -ArgumentList @(
  "-ExecutionPolicy", "Bypass",
  "-File", "`"$transcribeServer`""
) -WorkingDirectory $projectRoot

Write-Host "Starting video export server..."
Start-Process powershell -ArgumentList @(
  "-ExecutionPolicy", "Bypass",
  "-File", "`"$videoExportServer`""
) -WorkingDirectory $projectRoot

if (Get-Command ollama -ErrorAction SilentlyContinue) {
  Write-Host "Starting Ollama Local AI server..."
  $ollamaCommand = '$env:OLLAMA_ORIGINS=''*''; ollama serve'
  Start-Process powershell -ArgumentList @(
    "-ExecutionPolicy", "Bypass",
    "-WindowStyle", "Hidden",
    "-Command", $ollamaCommand
  ) -WorkingDirectory $projectRoot
  Wait-ForHttpReady -Url "http://127.0.0.1:11434/" -TimeoutSeconds 15 | Out-Null
} else {
  Write-Host "Ollama not found. Install from ollama.com to use the Local AI Agent."
}

Write-Host "Starting app server with live reload..."
Start-Process powershell -ArgumentList @(
  "-ExecutionPolicy", "Bypass",
  "-File", "`"$staticServer`""
) -WorkingDirectory $projectRoot
Wait-ForHttpReady -Url "http://127.0.0.1:8080/__live-reload" -TimeoutSeconds 20 | Out-Null

Write-Host ""
Write-Host "Servers started."
Write-Host "App:                 http://127.0.0.1:8080/"
Write-Host "Narration health:    http://127.0.0.1:8424/health"
Write-Host "Anjali clone health: http://127.0.0.1:8426/health"
Write-Host "Transcription health: http://127.0.0.1:8428/health"
Write-Host "Video export health: http://127.0.0.1:8430/health"
Write-Host "Local AI (Ollama):   http://127.0.0.1:11434/"
