@echo off
echo ==========================================
echo       SÀNH FRUIT - DỰ ÁN CẬP NHẬT WEB
echo ==========================================
echo.
echo [*] Dang add file danhmuc.txt...
git add .

echo [*] Dang commit code...
git commit -m "Cap nhat danh muc trai cay tu dong"

echo [*] Dang push len GitHub...
git push origin main

echo.
echo ==========================================
echo [OK] Da push thanh cong! Netlify dang deploy.
echo Cua so se tu dong dong sau 3 giay...
echo ==========================================
timeout /t 3 > nul