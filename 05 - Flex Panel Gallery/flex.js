const panels = document.querySelectorAll('.panel')

function toggleSize() {
  this.classList.toggle('open')
  this.addEventListener('transitionend', toggleText)
}
function toggleText(ev) {
  if (ev.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleSize))
