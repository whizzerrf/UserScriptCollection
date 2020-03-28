// ==UserScript==
// @name        Undowloaded Torrent List
// @namespace   https://https://github.com/whizzerrf
// @downloadURL https://github.com/whizzerrf/UserScriptCollection/blob/master/UndowloadedTorrentList.user.js
// @version     0.1.1
// @author      WhizzerRF
// @include     https://www.empornium.me/torrents.php
// @include     https://www.empornium.me/torrents.php?*
// @include     https://www.empornium.me/torrents.php?order_by*
// @exclude     https://www.empornium.me/torrents.php*userid*
// @exclude     https://www.empornium.me/torrents.php?id=*
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// ==/UserScript==


function removeSnatchedRow(rowElement){
    var snatched = rowElement.querySelectorAll('i.seeding, i.grabbed, i.leeching, i.snatched');
    if(snatched.item(0)){
       rowElement.remove();
       };
};

var rows = document.querySelectorAll('tr[class^="torrent row"]');
rows.forEach(removeSnatchedRow);