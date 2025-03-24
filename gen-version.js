const fs = require("fs");
const path = require("path");

// Đường dẫn đến file HTML
const filePath = "e:/o/google-auth2/index.html";

// Lấy ngày hiện tại theo định dạng MMDD
const currentDate = new Date().toISOString().slice(5, 10).replace("-", "");

// Đọc nội dung file
fs.readFile(filePath, "utf8", (err, fileContent) => {
  if (err) {
    console.error("Lỗi khi đọc file:", err);
    return;
  }

  // Kiểm tra xem có chứa phiên bản theo mẫu 'v.x.xx.MMDD.x' không
  const versionPattern = /v\.(\d{1,2})\.(\d{1,2})\.(\d{4})\.(\d{1,2})/;

  const match = fileContent.match(versionPattern);
  if (match) {
    // Lấy ngày tháng từ phiên bản
    const versionDate = match[3];

    let newVersion;
    if (versionDate === currentDate) {
      // Ngày tháng khớp, tăng số cuối lên 1
      newVersion = `v.${match[1]}.${match[2]}.${match[3]}.${parseInt(match[4]) + 1}`;
      console.log(`Ngày tháng khớp, phiên bản đã được tăng lên: ${newVersion}`);
    } else {
      // Ngày tháng không khớp, thay thế bằng ngày hiện tại và đặt số cuối về 0
      newVersion = `v.${match[1]}.${match[2]}.${currentDate}.0`;
      console.log(`Ngày tháng không khớp, phiên bản đã được cập nhật: ${newVersion}`);
    }

    // Thay đổi giá trị phiên bản trong file
    const updatedContent = fileContent.replace(match[0], newVersion);

    fs.writeFile(filePath, updatedContent, "utf8", (err) => {
      if (err) {
        console.error("Lỗi khi ghi file:", err);
      } else {
        console.log("Phiên bản đã được cập nhật thành công.");
      }
    });
  } else {
    console.log("Không tìm thấy phiên bản trong file.");
  }
});
