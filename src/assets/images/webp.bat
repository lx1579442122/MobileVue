@echo off
for %%a in (D:\phpstudy\WWW\web_loading\img\*.gif) do (
      cwebp -q 70 %%a -o D:\phpstudy\WWW\web_loading\img\%%~na.webp
)