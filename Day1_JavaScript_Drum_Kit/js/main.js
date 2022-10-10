console.log('Drum Kit');


// keydown event
window.addEventListener('keydown', (e) => {
    console.log(e.keyCode);

    // select audio
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // select key
    const key = document.querySelector(`div[data-key="${e.keyCode}"`);

    // add 'playing' classg
    key.classList.add('playing');

    // play audio
    audio.play();
    
});


