const { app, BrowserWindow, Menu } = require('electron')

let win;

function createWindow() {

    // Create the browser window.
    win = new BrowserWindow({
        width: 360,
        height: 570,
        backgroundColor: '#ffffff',
        icon: `file://${__dirname}/dist/assets/logo.png`,
        frame: false
    })


    // Tell Electron where to load the entry point from
    win.loadURL(`file://${__dirname}/dist/index.html`)

    // uncomment below to open the DevTools.
    // win.webContents.openDevTools()

    // Event when the window is closed.
    win.on('closed', function() {
        win = null
    })

    var menu = new Menu();
    Menu.setApplicationMenu(menu);
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function() {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
})