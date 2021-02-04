
window.addEventListener('keydown', playSound);
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


// to play sound and add transtion class of playing
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; // rewind to the zero
    audio.play();

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
}

// to remove transition class of playing
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove("playing");
}

