const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  // Bật headless mode để chạy ngầm
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Chiều rộng cố định 450px theo khung menu của bạn
  // Tăng deviceScaleFactor lên 3 để ảnh xuất ra siêu nét (chuẩn Retina/4K), đăng Insta không lo vỡ chữ
  await page.setViewport({
    width: 450,
    height: 1000, // Chiều cao tạm thời, fullPage: true bên dưới sẽ tự động ghi đè để lấy hết trang
    deviceScaleFactor: 3 
  });

  // Load file HTML của bạn
  const filePath = path.resolve(__dirname, 'index.html');
  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

  // Lệnh quan trọng nhất để gộp tất cả vào 1 tấm ảnh dài
  await page.screenshot({
    path: 'sanh_fruit_menu_full.png',
    fullPage: true // Bắt buộc phải có option này để lấy trọn vẹn 1 tấm duy nhất
  });

  await browser.close();
  console.log('📸 Đã xuất 1 tấm ảnh duy nhất thành công tại sanh_fruit_menu_full.png!');
})();