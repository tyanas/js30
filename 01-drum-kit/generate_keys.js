'use strict';

var keyCodes = {
    65 : "a",
    66 : "b",
    67 : "c",
    68 : "d",
    69 : "e",
    70 : "f",
    71 : "g",
    72 : "h",
    73 : "i",
    74 : "j",
    75 : "k",
    76 : "l",
    77 : "m",
    78 : "n",
    79 : "o",
    80 : "p",
    81 : "q",
    82 : "r",
    83 : "s",
    84 : "t",
    85 : "u",
    86 : "v",
    87 : "w",
    88 : "x",
    89 : "y",
    90 : "z"
};
var keys = document.getElementsByClassName('keys')[0];

function addNode(e) {
    if ( !e.metaKey ) {
        e.preventDefault();
    }

    let key = document.createElement('div');

    key.classList.add('key');
    key.setAttribute('data-key', e.keyCode);
    key.innerText = keyCodes[e.keyCode];
    keys.appendChild(key);
}
window.addEventListener('keydown', addNode);
