const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

video.addEventListener('click', playPause);
play.addEventListener('click', playPause);

function updateIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);

function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

stop.addEventListener('click', stopVideo);

function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

video.addEventListener('timeupdate', updateProgress);

function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

progress.addEventListener('change', setVideoProgress);