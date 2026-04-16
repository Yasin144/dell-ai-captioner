$endpoints = @(
  @{ Name = "Narration"; Url = "http://127.0.0.1:8424/health" },
  @{ Name = "Anjali"; Url = "http://127.0.0.1:8426/health" },
  @{ Name = "Transcription"; Url = "http://127.0.0.1:8428/health" },
  @{ Name = "Video export"; Url = "http://127.0.0.1:8430/health" },
  @{ Name = "App"; Url = "http://127.0.0.1:8080/__live-reload" }
)

Write-Host ""
Write-Host "Maths Teacher server status"
Write-Host ""

foreach ($endpoint in $endpoints) {
  try {
    $response = Invoke-WebRequest -Uri $endpoint.Url -UseBasicParsing -TimeoutSec 5
    Write-Host ("{0,-14} {1}" -f $endpoint.Name, "OK ($($response.StatusCode))")
  } catch {
    Write-Host ("{0,-14} {1}" -f $endpoint.Name, "FAIL")
  }
}

Write-Host ""
