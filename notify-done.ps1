$ollamaPath = Get-ChildItem -Path "$env:LOCALAPPDATA\Microsoft\WinGet\Packages\" -Filter "ollama.exe" -Recurse | Select-Object -ExpandProperty FullName -First 1

do {
    Start-Sleep -Seconds 10
    $models = & $ollamaPath list
} until ($models -match "llama3")

Add-Type -AssemblyName PresentationFramework
[System.Windows.MessageBox]::Show("Llama 3 Brain has finished downloading! The Local Agent is officially fully ready. You can restart start-all.ps1 now.", "Agent Download Complete", 'OK', 'Information')
