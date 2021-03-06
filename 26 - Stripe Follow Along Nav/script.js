const navListItems = document.querySelectorAll('ul.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('nav.top')

function handleEnter() {
  this.classList.add('trigger-enter')
  background.classList.add('open')
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

  const dropdown = this.querySelector('.dropdown')
  const dropdownCoords = dropdown.getBoundingClientRect()
  const navCoords = nav.getBoundingClientRect()
  const { width, height } = dropdownCoords;
  const pageCoords = {
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  }

  background.style.width = width + 'px'
  background.style.height = height + 'px'
  background.style.setProperty('transform', `translate(${pageCoords.left}px, ${pageCoords.top}px)`)
}
function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active')
  background.classList.remove('open')
}

navListItems.forEach(li => li.addEventListener('mouseenter', handleEnter))
navListItems.forEach(li => li.addEventListener('mouseleave', handleLeave))
