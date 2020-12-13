@echo off
@title WebPage Install Bat
echo DelFiles
del script.js
del logo.svg
del logo.ai
del background.pdn

echo Install Type Script 
npm install -g typescript

echo TSC compile
tsc script.ts

echo Done
start index.html
pause