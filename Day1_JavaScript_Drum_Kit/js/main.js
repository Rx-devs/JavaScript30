console.log('Drum Kit');


// keydown event
window.addEventListener('keydown', (e) => {
    // console.log(e.keyCode);

    // select audio
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // select key
    const key = document.querySelector(`div[data-key="${e.keyCode}"`);

    if(!audio) return;
    
    // add 'playing' class
    key.classList.add('playing');

    // reset current position
    audio.currentTime = 0;
    // console.log(audio.currentTime);

    // play audio
    audio.play();
    
});

// select all keys
const keys = Array.from(document.querySelectorAll('.key-wrapper'));
// transitionend event checked for all keys
keys.forEach((key)=> key.addEventListener('transitionend', (e) => {
    
    // remove className
    e.target.classList.remove('playing');
}))

