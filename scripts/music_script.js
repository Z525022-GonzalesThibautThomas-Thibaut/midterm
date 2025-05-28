function formatTime(time) {//This function return a number of seconds in format minutes:seconds
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

document.querySelectorAll('.audio-player').forEach(player => {
    const audio = player.querySelector('.audio');
    const playPauseBtn = player.querySelector('.play-pause');
    const playPauseBtnImg = player.querySelector('.play-pause-img');
    const currentTimeDisplay = player.querySelector('.current-time');
    const durationDisplay = player.querySelector('.duration');
    const progressBar = player.querySelector('.progress-bar');
    const progress = player.querySelector('.progress');
    const volumeSlider = player.querySelector('.volume-slider');
    const volumeIcon = player.querySelector('.volume-icon');

    audio.addEventListener('loadedmetadata', () => {//when the audio is loaded we show its duration
    durationDisplay.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {//update of audio infos
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';//update of progress bar

    if(percent == 100){//reset at the end of the song
        progress.style.width = 0 + '%';
        audio.currentTime = 0;
        audio.pause();
        playPauseBtnImg.src = '../img/play-button.svg'
        playPauseBtnImg.alt = "Play button"
    }
    });

    playPauseBtn.addEventListener('click', () => {//when we click the play/pause button
    if (audio.paused) {
        audio.play();
        playPauseBtnImg.src = '../img/pause-button.svg'
        playPauseBtnImg.alt = "Pause button"
    } else {
        audio.pause();
        playPauseBtnImg.src = '../img/play-button.svg'
        playPauseBtnImg.alt = "Play button"
    }
    });

    progressBar.addEventListener('click', (e) => {//when we click on the progress bar
    const rect = progressBar.getBoundingClientRect();//we get the coords of the progress bar in the page
    const offsetX = e.clientX - rect.left;//we calculate the distance between the begenning of the progress bar and where the user click
    const percent = offsetX / progressBar.offsetWidth;//we calculate the advancement in the song
    audio.currentTime = percent * audio.duration;//we update the time of the song
    });

    volumeSlider.addEventListener('input', () => {//volume adjustement
        audio.volume = volumeSlider.value;
        if (audio.volume == 0) {
            volumeIcon.src = '../img/volume-mute-icon.svg';
            volumeIcon.alt = "mute volume icon";
        } else {
            volumeIcon.src = '../img/volume-icon.svg';
            volumeIcon.alt = "volume icon";
        }
    });

    volumeIcon.addEventListener('click', (e) =>{//mute volume
        if(audio.volume != 0){
            volumeIcon.src = '../img/volume-mute-icon.svg';
            volumeIcon.alt = "mute volume icon";
            audio.volume = 0;
            volumeSlider.value = 0;
        }
    })
});
