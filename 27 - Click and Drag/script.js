const slider = document.querySelector('.items')

let isClickDown = false
let startX, scrollLeft;

slider.addEventListener('mousedown', (ev) => {
  isClickDown = true
  slider.classList.add('active')
  startX = ev.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft
})

slider.addEventListener('mouseleave', () => {
  isClickDown = false
  slider.classList.remove('active')

})

slider.addEventListener('mouseup', () => {
  slider.classList.remove('active')
  isClickDown = false

})

slider.addEventListener('mousemove', (ev) => {
  if (isClickDown) {
    ev.preventDefault()
    const x = ev.pageX - slider.offsetLeft
    const distance = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - distance
  }
})
