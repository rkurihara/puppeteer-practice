'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const { ipcMain } = require('electron');

let mainWindow;

app.on('ready', function () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
});

ipcMain.on('mul-sync', function (event, arg) {
  console.log(arg);
  event.returnValue = arg.a * arg.b;
});

ipcMain.on('mul-async', function (event, arg) {
  console.log(arg);
  var result = arg.a * arg.b;
  event.sender.send('mul-async-reply', result);
});