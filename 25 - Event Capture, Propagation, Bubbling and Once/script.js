const allDivs = document.querySelectorAll('div')

function logText(e) {
  // e.stopPropagation() //prevents bubbling-up or bubbling-down
  console.log(this.classList.value);
}

allDivs.forEach(div => div.addEventListener('click', logText,
  {
    capture: false,
    once: true
  }))

const btn = document.querySelector('button')

btn.addEventListener('click', () => console.log("button clicked!"), {once:true})
