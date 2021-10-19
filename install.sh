#!bin/bash

apt update -y
apt upgrade -y
pkg upgrade -y
pkg install nodejs -y
pkg install npm -y
pkg install libwebp -y
pkg install ffmpeg -y
pkg install wget -y
pkg install tesseract -y
pkg install graphicsmagick -y
pkg install imagemagick -y
npm install

echo "Hmmm tudo certo pode dar npm start, escanear o código e se divirta com o bot :)"

