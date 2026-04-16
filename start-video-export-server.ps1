$serverPath = Join-Path $PSScriptRoot "video-export-server.ps1"
Start-Process powershell -ArgumentList @(
  "-ExecutionPolicy", "Bypass",
  "-File", "`"$serverPath`""
) -WorkingDirectory $PSScriptRoot
