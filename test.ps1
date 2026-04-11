$garbled = "ÙˆÙƒØ§Ù„Ø© Ø§Ù„ØªØ³ÙˆÙŠÙ‚ Ø§Ù„Ø±Ù‚Ù…ÙŠ"
$bytes = [System.Text.Encoding]::GetEncoding("Windows-1252").GetBytes($garbled)
$fixed = [System.Text.Encoding]::UTF8.GetString($bytes)
Write-Host "Fixed: $fixed"
