'use strict';

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) {
        return;
    }

    audio.currentTime = 0; // rewind
    audio.play();

    if (!key) {
        console.log('no key found', e.keyCode, e);
    } else {
        key.classList.add('playing');
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') {
        return;
    }

    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key-sound');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
