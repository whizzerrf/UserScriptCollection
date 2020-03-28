// ==UserScript==
// @name        Download Visible Torrent List
// @namespace   https://https://github.com/whizzerrf
// @downloadURL https://github.com/whizzerrf/UserScriptCollection/blob/master/DownloadVisibleTorrentList.user.js
// @version     0.1
// @author      WhizzerRF
// @include     https://www.empornium.me/torrents.php
// @include     https://www.empornium.me/torrents.php?*
// @include     https://www.empornium.me/torrents.php?order_by*
// @exclude     https://www.empornium.me/torrents.php*userid*
// @exclude     https://www.empornium.me/torrents.php?id=*
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// ==/UserScript==



function dowloadAll(rowElement){
  var link = rowElement.querySelectorAll('span.torrent_icon_container span a').item(0);

  var a = document.createElement("a");
  a.href = link;
  var evt = document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0,
                              true, false, false, false, 0, null);
  a.dispatchEvent(evt);

};

function goDowloadAll(){
rows.forEach(dowloadAll);
};

var rows = document.querySelectorAll('tr[class^="torrent row"]');
var topMenu = document.querySelectorAll('div#header_top div#menu').item(0);
var scriptsUl = document.createElement("UL");
var scriptLi = document.createElement("LI");
var downLink = document.createElement("A");

scriptLi.id = 'nav_downl';
downLink.innerHTML = 'downl ('+rows.length+')';
downLink.href = '#';
scriptLi.appendChild(downLink);
scriptsUl.appendChild(scriptLi);
topMenu.appendChild(scriptsUl);

downLink.addEventListener("click", goDowloadAll);