$serverPath = Join-Path $PSScriptRoot "transcribe-server.ps1"
Start-Process powershell -ArgumentList @(
  "-ExecutionPolicy", "Bypass",
  "-File", "`"$serverPath`""
) -WorkingDirectory $PSScriptRoot
