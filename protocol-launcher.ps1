param(
  [string]$Uri = ""
)

$projectRoot = $PSScriptRoot
$anjaliCloneScript = Join-Path $projectRoot "anjali-chatterbox-server.py"
$anjaliClonePython = Join-Path $projectRoot ".voiceclone-venv\Scripts\python.exe"

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

function Test-PortListening {
  param([int]$Port)

  try {
    $client = New-Object System.Net.Sockets.TcpClient
    $async = $client.BeginConnect("127.0.0.1", $Port, $null, $null)
    $connected = $async.AsyncWaitHandle.WaitOne(500)
    if (-not $connected) {
      $client.Close()
      return $false
    }

    $client.EndConnect($async)
    $client.Close()
    return $true
  } catch {
    return $false
  }
}

function Stop-ListeningProcessOnPort {
  param(
    [Parameter(Mandatory = $true)]
    [int]$Port
  )

  Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue |
    Select-Object -ExpandProperty OwningProcess -Unique |
    ForEach-Object {
      try {
        Stop-Process -Id $_ -Force -ErrorAction Stop
      } catch {
      }
    }
}

function Start-ScriptIfNeeded {
  param(
    [string]$ScriptName,
    [int]$Port
  )

  if (Test-PortListening -Port $Port) {
    return
  }

  $scriptPath = Join-Path $projectRoot $ScriptName
  if (-not (Test-Path $scriptPath)) {
    throw "Could not find $ScriptName."
  }

  Start-Process powershell -WindowStyle Minimized -ArgumentList @(
    "-ExecutionPolicy", "Bypass",
    "-File", "`"$scriptPath`""
  ) -WorkingDirectory $projectRoot | Out-Null
}

function Start-PythonScriptIfNeeded {
  param(
    [string]$PythonPath,
    [string]$ScriptPath,
    [int]$Port
  )

  if (Test-PortListening -Port $Port) {
    return
  }

  if (-not (Test-Path $PythonPath)) {
    throw "Could not find the Anjali Python environment."
  }

  if (-not (Test-Path $ScriptPath)) {
    throw "Could not find the Anjali voice server script."
  }

  $command = '$env:PYTHONWARNINGS=''ignore''; $env:COQUI_TOS_AGREED=''1''; & ''{0}'' ''{1}''' -f $PythonPath, $ScriptPath
  Start-Process powershell -WindowStyle Minimized -ArgumentList @(
    "-ExecutionPolicy", "Bypass",
    "-Command", $command
  ) -WorkingDirectory $projectRoot | Out-Null
}

function Ensure-ScriptReady {
  param(
    [Parameter(Mandatory = $true)]
    [string]$ScriptName,
    [Parameter(Mandatory = $true)]
    [int]$Port,
    [Parameter(Mandatory = $true)]
    [string]$HealthUrl,
    [int]$TimeoutSeconds = 20,
    [scriptblock]$ReadyCheck = $null
  )

  if (Wait-ForHttpReady -Url $HealthUrl -TimeoutSeconds 2 -ReadyCheck $ReadyCheck) {
    return
  }

  if (Test-PortListening -Port $Port) {
    Stop-ListeningProcessOnPort -Port $Port
    Start-Sleep -Milliseconds 600
  }

  Start-ScriptIfNeeded -ScriptName $ScriptName -Port $Port
  Wait-ForHttpReady -Url $HealthUrl -TimeoutSeconds $TimeoutSeconds -ReadyCheck $ReadyCheck | Out-Null
}

function Ensure-PythonScriptReady {
  param(
    [Parameter(Mandatory = $true)]
    [string]$PythonPath,
    [Parameter(Mandatory = $true)]
    [string]$ScriptPath,
    [Parameter(Mandatory = $true)]
    [int]$Port,
    [Parameter(Mandatory = $true)]
    [string]$HealthUrl,
    [int]$TimeoutSeconds = 20,
    [scriptblock]$ReadyCheck = $null
  )

  if (Wait-ForHttpReady -Url $HealthUrl -TimeoutSeconds 2 -ReadyCheck $ReadyCheck) {
    return
  }

  if (Test-PortListening -Port $Port) {
    Stop-ListeningProcessOnPort -Port $Port
    Start-Sleep -Milliseconds 600
  }

  Start-PythonScriptIfNeeded -PythonPath $PythonPath -ScriptPath $ScriptPath -Port $Port
  Wait-ForHttpReady -Url $HealthUrl -TimeoutSeconds $TimeoutSeconds -ReadyCheck $ReadyCheck | Out-Null
}

if ($Uri -and $Uri -notmatch "^learningoutcomes://") {
  exit 0
}

Ensure-ScriptReady -ScriptName "speech-server.ps1" -Port 8424 -HealthUrl "http://127.0.0.1:8424/health" -TimeoutSeconds 20
Ensure-PythonScriptReady -PythonPath $anjaliClonePython -ScriptPath $anjaliCloneScript -Port 8426 -HealthUrl "http://127.0.0.1:8426/health" -TimeoutSeconds 240 -ReadyCheck { param($body) $body.modelLoaded -eq $true }
Ensure-ScriptReady -ScriptName "transcribe-server.ps1" -Port 8428 -HealthUrl "http://127.0.0.1:8428/health" -TimeoutSeconds 20
Ensure-ScriptReady -ScriptName "video-export-server.ps1" -Port 8430 -HealthUrl "http://127.0.0.1:8430/health" -TimeoutSeconds 20
Ensure-ScriptReady -ScriptName "retest-static-server.ps1" -Port 8080 -HealthUrl "http://127.0.0.1:8080/__live-reload" -TimeoutSeconds 20

exit 0
