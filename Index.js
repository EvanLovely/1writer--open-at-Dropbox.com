'use strict';
// Options
const openInApp = false;
const debug = true;
// End Options

const folder = editor.getFolderPath().replace('/Dropbox', '');
const file = editor.getFileName().replace(/ /g, '+');
const base = 'https://www.dropbox.com/home';
let url = base + folder;

function open(urlToOpen) {
	if (openInApp) {
		webBrowser.open(urlToOpen);
	} else {
		app.openURL(urlToOpen);
	}
}

function debugValues(cb) {
	ui.list('Debugged Values', [
		'folder|folder|' + folder,
		'file|file|' + file,
		'url|url|' + url
	], cb);
}

function init () {
	ui.alert('What to open?', 'File/Folder', 'File', 'Folder', (option) => {
		if (option === 0) {
			url = url + '?preview=' + file;
		}
		if (debug) {
			debugValues(() => open(url));
		} else {
			open(url);
		}
	});
}

init();
