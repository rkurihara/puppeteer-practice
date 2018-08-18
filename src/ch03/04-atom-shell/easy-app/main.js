'use strict';

var TARGET_URL = "https:/ja.wikipedia.org/";

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(TARGET_URL);
});