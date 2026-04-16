$serverPath = Join-Path $PSScriptRoot "speech-server.ps1"
Start-Process powershell -ArgumentList @(
  "-ExecutionPolicy", "Bypass",
  "-File", "`"$serverPath`""
) -WorkingDirectory $PSScriptRoot
