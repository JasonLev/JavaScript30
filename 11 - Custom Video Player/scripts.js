// DOM elements:
const player = document.querySelector('.player')
const video = player. querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipBtns = player.querySelectorAll('.player__button')
const ranges = player.querySelectorAll('.player__slider')
const fullscreenBtn = player.querySelector('.fullscreen')

// functions:
function togglePlay() {
  video.paused ? video.play() : video.pause()
}

function updateBtn() {
  const btnText = this.paused ? '►' : '❚ ❚';
  toggle.textContent = btnText
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  video[this.name] = this.value
}

function handleProgress() {
  const percent = video.currentTime / video.duration * 100
  progressBar.style.flexBasis = percent + "%"
}
function dragProgress(ev) {
  const progresTime = (ev.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progresTime
}

function toggleFullscreen() {
  if (player.fullscreenElement ||
    player.webkitFullscreenElement ||
    player.mozFullScreenElement ||
    player.msFullscreenElement) {
    player.exitFullscreen()
  } else {
    player.requestFullscreen()
  }
}

// event listeners:
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateBtn)
video.addEventListener('pause', updateBtn)
video.addEventListener('timeupdate', handleProgress)
toggle.addEventListener('click', togglePlay)
skipBtns.forEach(btn => btn.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
progress.addEventListener('click', dragProgress)
let mouseDown = false
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)
progress.addEventListener('mousemove', (ev) => mouseDown && dragProgress(ev))

fullscreenBtn.addEventListener('click', toggleFullscreen)
