const nav = document.querySelector('nav#main')
const topOfNav = nav.offsetTop

function affixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav')
    document.body.style.paddingTop = nav.offsetHeight + 'px'
  } else {
    document.body.style.paddingTop = 0
    document.body.classList.remove('fixed-nav')
  }
}

window.addEventListener('scroll', affixNav)
