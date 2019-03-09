const canvas = document.getElementById('draw')
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
const headerHeight = document.querySelector('header').offsetHeight
canvas.height = window.innerHeight - headerHeight

context.strokeStyle = '#BADA55'
context.lineJoin = 'round'
context.lineCap = 'round'
context.lineWidth = 30

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

const draw = ev => {
  if (!isDrawing) return; //stop function from firing when not drawing
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`
  context.beginPath()
  context.moveTo(lastX, lastY)
  context.lineTo(ev.offsetX, ev.offsetY)
  context.stroke();
  [lastX, lastY] = [ev.offsetX, ev.offsetY];
  hue++
  hue %= 360

  if (context.lineWidth > 200 || context.lineWidth <= 1) {
    direction = !direction
  }
  if (direction) {
    context.lineWidth++
  } else {
    context.lineWidth--
  }
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (ev) => {
  isDrawing = true;
  [lastX, lastY] = [ev.offsetX, ev.offsetY];
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
