[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
# Đường dẫn đến file HTML
$filePath = "e:\o\google-auth2\index.html"

# Lấy ngày hiện tại theo định dạng MMDD
$currentDate = Get-Date -Format "MMdd"

# Đọc nội dung file
$fileContent = Get-Content -Path $filePath -Raw

# Kiểm tra xem có chứa phiên bản theo mẫu 'v.x.xx.MMDD.x' không (bao gồm cả dấu cách)
$versionPattern = 'v\.(\d{1,2})\.(\d{1,2})\.(\d{4})\.(\d{1,2})'

if ($fileContent -match $versionPattern) {
    # Lấy ngày tháng từ phiên bản
    $versionDate = $matches[3]

    if ($versionDate -eq $currentDate) {
        # Ngày tháng khớp, tăng số cuối lên 1
        $newVersion = "v.$($matches[1]).$($matches[2]).$($matches[3])." + ([int]$matches[4] + 1)
        Write-Output "Ngày tháng khớp, phiên bản đã được tăng lên: $newVersion"
    }
    else {
        # Ngày tháng không khớp, thay thế bằng ngày hiện tại và đặt số cuối về 0
        $newVersion = "v.$($matches[1]).$($matches[2]).$currentDate.0"
        Write-Output "Ngày tháng không khớp, phiên bản đã được cập nhật: $newVersion"
    }

    # Thay đổi giá trị phiên bản trong file
    $updatedContent = $fileContent -replace $matches[0], $newVersion
    Set-Content -Path $filePath -Value $updatedContent
}
else {
    Write-Output "Không tìm thấy phiên bản trong file."
}