$projectRoot = $PSScriptRoot
$launcherPath = Join-Path $projectRoot "protocol-launcher.ps1"

if (-not (Test-Path $launcherPath)) {
  throw "Launcher script not found at $launcherPath"
}

$protocolName = "learningoutcomes"
$registryPath = "Software\Classes\$protocolName"
$commandValue = "powershell.exe -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$launcherPath`" `"%1`""

$rootKey = [Microsoft.Win32.Registry]::CurrentUser.CreateSubKey($registryPath)
$rootKey.SetValue("", "URL:Learning Outcomes Launcher")
$rootKey.SetValue("URL Protocol", "")

$iconKey = $rootKey.CreateSubKey("DefaultIcon")
$iconKey.SetValue("", "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe,0")
$iconKey.Close()

$commandKey = $rootKey.CreateSubKey("shell\open\command")
$commandKey.SetValue("", $commandValue)
$commandKey.Close()

$rootKey.Close()

Write-Host "Registered learningoutcomes:// protocol for the current Windows user."
Write-Host "Button target: learningoutcomes://start-servers"
