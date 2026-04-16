$port = 8080
$root = $PSScriptRoot
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://127.0.0.1:$port/")

function Get-ContentType {
  param([string]$Path)

  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    ".html" { "text/html; charset=utf-8" }
    ".js" { "application/javascript; charset=utf-8" }
    ".css" { "text/css; charset=utf-8" }
    ".json" { "application/json; charset=utf-8" }
    ".mp3" { "audio/mpeg" }
    ".wav" { "audio/wav" }
    ".mp4" { "video/mp4" }
    ".png" { "image/png" }
    ".jpg" { "image/jpeg" }
    ".jpeg" { "image/jpeg" }
    ".svg" { "image/svg+xml" }
    ".pdf" { "application/pdf" }
    ".txt" { "text/plain; charset=utf-8" }
    default { "application/octet-stream" }
  }
}

function Get-LiveReloadState {
  $extensions = @(".html", ".css", ".js", ".ps1", ".png", ".jpg", ".jpeg", ".svg", ".mp3", ".wav", ".mp4")
  $latestTicks = 0L
  $fileCount = 0

  Get-ChildItem -Path $root -File -ErrorAction SilentlyContinue | ForEach-Object {
    if ($extensions -contains $_.Extension.ToLowerInvariant()) {
      $fileCount += 1
      $ticks = $_.LastWriteTimeUtc.Ticks
      if ($ticks -gt $latestTicks) {
        $latestTicks = $ticks
      }
    }
  }

  return @{
    revision = "$latestTicks-$fileCount"
    fileCount = $fileCount
  }
}

try {
  $listener.Start()
  Write-Output "RETEST_STATIC_SERVER http://127.0.0.1:$port/"

  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response

    try {
      $response.Headers["Access-Control-Allow-Origin"] = "*"
      $response.Headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
      $response.Headers["Pragma"] = "no-cache"

      $relativePath = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath.TrimStart('/'))
      if ([string]::IsNullOrWhiteSpace($relativePath)) {
        $relativePath = "index.html"
      }

      if ($relativePath -eq "__live-reload") {
        $response.StatusCode = 200
        $response.ContentType = "application/json; charset=utf-8"
        $bytes = [System.Text.Encoding]::UTF8.GetBytes((Get-LiveReloadState | ConvertTo-Json -Compress))
        $response.ContentLength64 = $bytes.Length
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
        continue
      }

      $localPath = Join-Path $root $relativePath
      $resolvedRoot = [System.IO.Path]::GetFullPath($root)
      $resolvedPath = [System.IO.Path]::GetFullPath($localPath)

      if (-not $resolvedPath.StartsWith($resolvedRoot, [System.StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path $resolvedPath)) {
        $response.StatusCode = 404
        $bytes = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
        $response.ContentType = "text/plain; charset=utf-8"
        $response.OutputStream.Write($bytes, 0, $bytes.Length)
        continue
      }

      $response.StatusCode = 200
      $response.ContentType = Get-ContentType -Path $resolvedPath
      $bytes = [System.IO.File]::ReadAllBytes($resolvedPath)
      $response.ContentLength64 = $bytes.Length
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } catch {
      $response.StatusCode = 500
      $bytes = [System.Text.Encoding]::UTF8.GetBytes($_.Exception.Message)
      $response.ContentType = "text/plain; charset=utf-8"
      $response.OutputStream.Write($bytes, 0, $bytes.Length)
    } finally {
      $response.OutputStream.Close()
    }
  }
} finally {
  if ($listener.IsListening) {
    $listener.Stop()
  }
  $listener.Close()
}
