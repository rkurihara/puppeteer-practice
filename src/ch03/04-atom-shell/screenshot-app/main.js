'use strcit';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const fs = require('fs');

var TARGET_URL = "https://atom.io";

let win;

app.on('ready', function () {
  win = new BrowserWindow({ width: 1024, height: 800 });
  win.loadURL(TARGET_URL);
  win.webContents.on('did-finish-load', captureFunc);
});

function captureFunc() {
  win.capturePage(function (img) {
    fs.writeFileSync('screenshot-aaaa.png', img.toPng());
  });
}