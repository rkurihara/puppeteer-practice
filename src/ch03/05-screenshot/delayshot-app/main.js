'use strcit';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const fs = require('fs');

// 撮影までの待ち時間
var DELAY_TIME = 1000 * 1; // 1秒

// Googleの画像検索のページ
var WORD = "ネコ";
var TARGET_URL = "https://www.google.co.jp/search" +
  "?source=lnms&tbm=isch&q=" +
  encodeURIComponent(WORD);
let win;

app.on('ready', function () {
  win = new BrowserWindow({ width: 1024, height: 800 });
  win.loadURL(TARGET_URL);
  win.webContents.on('did-finish-load', captureFunc);
});

function captureFunc() {
  setTimeout(function () {
    var t = new Date();
    var fileName = "cat-" + t.getFullYear() +
      "-" + (1 + t.getMonth()) +
      "-" + t.getDate() + ".png";
    win.capturePage(function (img) {
      fs.writeFileSync(fileName, img.toPng());
      app.quit();
    });
  }, DELAY_TIME);
}