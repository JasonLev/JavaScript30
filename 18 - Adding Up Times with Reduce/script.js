const timeNodes = Array.from(document.querySelectorAll('[data-time]'))
const seconds = timeNodes.map(timeNode => {
  const timeString = timeNode.dataset.time
  const [mins, secs] = timeString.split(':').map(parseFloat)
  return mins * 60 + secs
})
  .reduce((total, increment) => total + increment)

let secondsLeft = seconds
const hours = Math.floor(seconds / 3600)
// remaining seconds calculated via difference:
// secondsLeft -= (hours * 3600)

// alternative way to calculate with modulo:
secondsLeft %= 3600
const minutes = Math.floor(secondsLeft / 60)
secondsLeft %= 60
console.log(hours, minutes, secondsLeft);
