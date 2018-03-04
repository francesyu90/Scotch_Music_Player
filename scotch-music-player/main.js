const { app, BrowserWindow, Menu } = require('electron')
const url = require('url')
const path = require('path')

let win

function createWindow() {

    // Create the browser window.
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`
    })


    win.loadURL(`file://${__dirname}/dist/index.html`)
    win.on('closed', () => {
        win = null;
    })

    win.webContents.openDevTools();

    var menu = Menu.buildFromTemplate([{
        role: 'quit'
    }])

    Menu.setApplicationMenu(menu)

}

app.on('activate', () => {
    if (win == null)
        createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
})

app.on('ready', createWindow)