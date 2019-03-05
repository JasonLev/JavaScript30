const panels = document.querySelectorAll('.panel')

function togglePanel() {
  this.classList.toggle('open')
}
function slideText(ev) {
  if (ev.propertyName.includes('flex')) {
    this.classList.toggle('open-active')
  }
}

panels.forEach(panel => panel.addEventListener('click', togglePanel))
panels.forEach(panel => panel.addEventListener('transitionend', slideText))
