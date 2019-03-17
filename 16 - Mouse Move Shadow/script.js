const hero = document.querySelector('.hero')
const heroText = hero.querySelector('h1')
const distance = 100; //100px

function shadow(ev) {
  const { offsetWidth: width, offsetHeight: height} = hero;
  let { offsetX: x, offsetY: y} = ev;

  if (this !== ev.target) {
    x += ev.target.offsetLeft;
    y += ev.target.offsetTop;
  }

  const xDistance = Math.round((x / width * distance) - (distance / 2))
  const yDistance = Math.round((y / height * distance) - (distance / 2))

  heroText.style.textShadow = `${xDistance}px ${yDistance}px 0 orange`
}
hero.addEventListener('mousemove', shadow)
