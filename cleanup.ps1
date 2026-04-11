$srcDir = 'c:\Users\Walter White\Downloads\highlight\src'

# Delete all .tsx files
$tsxFiles = Get-ChildItem -Recurse -Path $srcDir -Filter '*.tsx'
foreach ($f in $tsxFiles) {
    Remove-Item -Path $f.FullName -Force
    Write-Host "Deleted: $($f.Name)"
}

# Delete all .ts files
$tsFiles = Get-ChildItem -Recurse -Path $srcDir -Filter '*.ts'
foreach ($f in $tsFiles) {
    Remove-Item -Path $f.FullName -Force
    Write-Host "Deleted: $($f.Name)"
}

Write-Host "Done. Remaining count:"
(Get-ChildItem -Recurse -Path $srcDir -Include '*.tsx','*.ts').Count
