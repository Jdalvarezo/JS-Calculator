// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 382,
    height: 676,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('./view/calculator/index.html')
  // remove application menu
  mainWindow.setMenu(null)
  // disable application resize
  mainWindow.resizable = false

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Displays the window once all components have loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.