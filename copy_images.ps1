$brainDir = "C:\Users\Walter White\.gemini\antigravity\brain\c1ee98b3-d267-4eb5-a585-4fa2df2a864d"
$publicDir = ".\public"

if (!(Test-Path $publicDir)) { New-Item -ItemType Directory -Path $publicDir | Out-Null }

Get-ChildItem -Path $brainDir -Filter "hero_slide_*.png" | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination (Join-Path $publicDir $_.Name) -Force
    Write-Host "Copied $($_.Name)"
}
