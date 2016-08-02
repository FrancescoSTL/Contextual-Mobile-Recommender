var windowUtils = require('sdk/window/utils');

// get the active window
var activeWindow = windowUtils.getMostRecentBrowserWindow();

// get the bookmark menu from our window
var menu = activeWindow.document.getElementById("editBookmarkPanel");

// create and style our hr linebreak
var horizLine = activeWindow.document.createElement("hr");
horizLine.setAttribute("style", "margin-top:20px; height:1px; background-color:grey");

// create our content body
var paragraph = activeWindow.document.createElement("p");
paragraph.setAttribute("style", "margin-top:15px;");
var textnode = activeWindow.document.createTextNode("Access your bookmarks on the go! Download Firefox for iOS/Android.");

// append our elements together
menu.appendChild(horizLine);
paragraph.appendChild(textnode);
menu.appendChild(paragraph);
