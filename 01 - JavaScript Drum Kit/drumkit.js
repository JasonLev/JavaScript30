const playDrum = ev => {
  const audio = document.querySelector(`audio[data-key='${ev.keyCode}']`)
  const key = document.querySelector(`.key[data-key='${ev.keyCode}']`)
  if(!audio){return}
  audio.currentTime = 0 // sets playback at start
  audio.play()
  key.classList.add('playing')
}

function removeStyling(ev) {
  if (ev.propertyName !== 'transform'){return}
  this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener("transitionend", removeStyling))
window.addEventListener("keydown", playDrum)
