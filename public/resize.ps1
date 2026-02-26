cd "./"
$folderPath = "./"
foreach ($file in Get-ChildItem -Path $folderPath -File) {
    Write-Output "Processing file: $($file.FullName)"
    ffmpeg -i "$file" -vf scale=500:500 "resized/$($file)"
}

