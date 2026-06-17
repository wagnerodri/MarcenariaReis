@echo off
cd /d "%~dp0"

for /f "tokens=*" %%i in ('java -XshowSettings:properties -version 2^>^&1 ^| findstr "java.home"') do set %%i
if not defined JAVA_HOME set "JAVA_HOME=%java.home%"

if exist "mvnw.cmd" (
  call mvnw.cmd spring-boot:run
) else (
  java -jar target\marcenaria-reis-security-1.0.0.jar
)
