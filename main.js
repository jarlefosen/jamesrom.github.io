var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var window = null;

app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
	app.quit();
});

app.on('ready', function() {
    // Create the browser window.
    window = new BrowserWindow(
	{
	    width: 800,
	    height: 600,
	    "node-integration": false
	});

    console.log("Starting application...");
    window.loadUrl('file://' + __dirname + '/index.html');

    // Emitted when the window is closed.
    window.on('closed', function() {
	window = null;
    });
});
