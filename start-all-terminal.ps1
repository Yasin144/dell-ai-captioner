$projectRoot = $PSScriptRoot
$startScript = Join-Path $projectRoot "start-all.ps1"

if (-not (Test-Path $startScript)) {
  throw "Could not find start-all.ps1 in $projectRoot"
}

Write-Host ""
Write-Host "Maths Teacher terminal startup"
Write-Host "Project: $projectRoot"
Write-Host ""

& $startScript

Write-Host ""
Write-Host "Open in browser:"
Write-Host "http://127.0.0.1:8080/"
Write-Host ""
Write-Host "Keep this terminal command for later:"
Write-Host "powershell -ExecutionPolicy Bypass -File `"$startScript`""

Write-Host "Automatically launching the browser..."
Start-Process "http://127.0.0.1:8080/"
