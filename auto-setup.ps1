Write-Host "=========================================="
Write-Host "🚀 AUTOMATED LOCAL AI SETUP"
Write-Host "=========================================="
Write-Host ""
Write-Host "1. Launching Ollama Installer..."
Write-Host "-> PLEASE CLICK 'INSTALL' ON THE POPUP WINDOW."
Start-Process ".\OllamaSetup.exe"

Write-Host "Waiting for you to complete the click..."
do {
    Start-Sleep -Seconds 3
} until (Test-Path "$env:LOCALAPPDATA\Programs\Ollama\ollama.exe")

Write-Host ""
Write-Host "✅ Ollama installed successfully!"
Write-Host "Starting Ollama service..."
Start-Process "$env:LOCALAPPDATA\Programs\Ollama\ollama.exe" -ArgumentList "serve" -WindowStyle Hidden

Write-Host ""
Write-Host "2. Downloading the Local AI Brain (llama3)..."
Write-Host "-> This is a ~4.7GB download. The progress will appear below."
& "$env:LOCALAPPDATA\Programs\Ollama\ollama.exe" pull llama3

Write-Host ""
Write-Host "✅ Success! Llama 3 is installed."
Write-Host "=========================================="
Write-Host "Setup is 100% complete!"
Write-Host "You can close this terminal window now. Go back to your dashboard and restart start-all.ps1!"
Write-Host "=========================================="
Start-Sleep -Seconds 600
