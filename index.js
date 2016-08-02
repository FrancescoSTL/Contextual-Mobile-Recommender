var self = require("sdk/self");
let { Cc, Ci, Cu } = require('chrome');
var windowUtils = require('sdk/window/utils');
//Cu.import('chrome://browser/content/browser-places.js');
var activeWindow = windowUtils.getMostRecentBrowserWindow();
var menu = activeWindow.document.getElementById("editBookmarkPanel");

var textnode = activeWindow.document.createTextNode("Access your bookmarks on the go! Download Firefox for iOS/Android.");
menu.appendChild(textnode);