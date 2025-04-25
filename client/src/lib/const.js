// lib/const.js
export const markdownContent = `
\`\`\`batch
@echo off
color 0A
title Flutter Wi-Fi Debug Baglantisi

REM ADB kontrolü
where adb >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    color 0C
    echo HATA: adb komutu taninmiyor.
    echo.
    echo 1. Android Studio veya SDK Platform Tools yuklu oldugundan emin olun.
    echo 2. platform-tools klasorunu PATH degiskenine ekleyin.
    echo.
    pause
    exit /b
)

REM Cihazlari listele
echo [1] Cihazlar listeleniyor (USB ile bagli olmali)...
adb devices
echo.
pause

REM TCP/IP moduna gec
echo [2] Cihaz TCP/IP moduna aliniyor (port 5555)...
adb tcpip 5555
echo.
pause

REM IP adresi gir
set /p DEVICE_IP=[3] Cihazin IP adresini girin (ornek: 192.168.1.102): 

REM ADB connect
echo [4] IP adresine baglaniliyor...
adb connect %DEVICE_IP%:5555
echo.
timeout /t 2 >nul

REM Baglanti kontrolu
echo [5] Baglanti durumu kontrol ediliyor...
adb devices | findstr %DEVICE_IP% >nul
IF %ERRORLEVEL% EQU 0 (
    echo.
    echo Baglanti BASARILI! Cihaz artik Wi-Fi uzerinden Flutter ile kullanilabilir.
) ELSE (
    color 0C
    echo.
    echo Baglanti BASARISIZ. IP adresini ve Wi-Fi agini kontrol edin.
)

echo.
pause
\`\`\`
`;
