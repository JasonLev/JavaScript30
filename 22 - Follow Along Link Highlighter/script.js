const links = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink() {
  const linkCoords = this.getBoundingClientRect()
  const { width, height } = linkCoords;
  const positionDOM = {
    left: linkCoords.left + window.scrollX,
    top: linkCoords.top + window.scrollY
  }
  highlight.style.width = width + "px"
  highlight.style.height = height + "px"
  highlight.style.transform = `translate(${positionDOM.left}px, ${positionDOM.top}px)`
}

links.forEach(link => link.addEventListener("mouseenter", highlightLink))
