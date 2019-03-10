const checkboxes = document.querySelectorAll('input[type="checkbox"]')
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', toggleCheckbox)
})
let lastChecked;
function toggleCheckbox(ev) {
  let between = false
  if (ev.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        between = !between
        console.log("between");
      }
      if (between) {
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this
}
