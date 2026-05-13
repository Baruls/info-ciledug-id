@echo off
echo Membangun versi produksi Info Ciledug...
call pnpm build
if %errorlevel% neq 0 (
    echo.
    echo Terjadi kesalahan saat proses build!
    pause
    exit /b %errorlevel%
)
echo.
echo Proses build selesai. Menjalankan server di port 3003...
call pnpm start -p 3003
pause
