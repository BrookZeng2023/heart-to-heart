"use strict";

const { app, BrowserWindow, shell } = require("electron");
const path = require("node:path");

const appIsPackaged = app.isPackaged;

function webRoot() {
  return appIsPackaged
    ? path.join(process.resourcesPath, "web")
    : path.join(__dirname, "..", "web");
}

function createWindow() {
  const window = new BrowserWindow({
    width: 1080,
    height: 760,
    minWidth: 720,
    minHeight: 620,
    title: "心里有你",
    backgroundColor: "#100d0f",
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  window.loadFile(path.join(webRoot(), "index.html"));

  window.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https://")) shell.openExternal(url);
    return { action: "deny" };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
