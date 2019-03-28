const speed = document.querySelector('.speed')
const barController = speed.querySelector('.speed-bar')
const video = document.querySelector('video')

function handleMouseMove(ev) {
  const y = ev.pageY - this.offsetTop
  const percentY = y / this.offsetHeight
  const min = 0.5
  const max = 4
  const height = Math.round(percentY * 100) + "%"
  const playbackRate = percentY * (max - min) + min
  barController.style.height = height
  barController.textContent = playbackRate.toFixed(2) + "x"
  video.playbackRate = playbackRate
}

speed.addEventListener('mousemove', handleMouseMove)
