const {
    app,
    BrowserWindow,
    Notification
} = require('electron')
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

function showNotification() {
    const notification = {
        title: 'Basic Notification',
        body: 'Notification from the Main process'
    }
    new Notification(notification).show()
}

app.whenReady().then(() => {
    app.setAppUserModelId(process.execPath)
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
    
}).then(showNotification)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})