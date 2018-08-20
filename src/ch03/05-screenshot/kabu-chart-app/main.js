'use strcit';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const fs = require('fs');

// 東京証券取引所の株価指数グラフのページ
var TARGET_URL = "http://quote.jpx.co.jp/jpx/template/quote.cgi?F=tmp/hist_index&basequote=151&mode=D";

let win;

app.on('ready', function () {
  win = new BrowserWindow({ width: 1024, height: 800 });
  win.loadURL(TARGET_URL);
  win.webContents.on('did-finish-load', captureFunc);
});

function captureFunc() {
  var t = new Date();
  var fileName = "kabu-" + t.getFullYear() +
    "-" + (1 + t.getMonth()) +
    "-" + t.getDate() + ".png";
  win.capturePage(function (img) {
    fs.writeFileSync(fileName, img.toPng());
    app.quit();
  });
}