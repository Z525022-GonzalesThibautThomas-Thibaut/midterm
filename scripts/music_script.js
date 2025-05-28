function formatTime(time) {
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

    audio.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';

    if(percent == 100){
        progress.style.width = 0 + '%';
        audio.currentTime = 0;
        audio.pause();
        playPauseBtnImg.src = '../img/play-button.svg'
        playPauseBtnImg.alt = "Play button"
    }
    });

    playPauseBtn.addEventListener('click', () => {
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

    progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percent = offsetX / progressBar.offsetWidth;
    audio.currentTime = percent * audio.duration;
    });

    volumeSlider.addEventListener('input', () => {
        audio.volume = volumeSlider.value;
        if (audio.volume == 0) {
            volumeIcon.src = '../img/volume-mute-icon.svg';
            volumeIcon.alt = "mute volume icon";
        } else {
            volumeIcon.src = '../img/volume-icon.svg';
            volumeIcon.alt = "volume icon";
        }
    });

    volumeIcon.addEventListener('click', (e) =>{
        if(audio.volume != 0){
            volumeIcon.src = '../img/volume-mute-icon.svg';
            volumeIcon.alt = "mute volume icon";
            audio.volume = 0;
            volumeSlider.value = 0;
        }
    })
});
