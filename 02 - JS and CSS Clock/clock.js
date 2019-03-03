const secHand = document.querySelector('#second-hand')
const minHand = document.querySelector('#min-hand')
const hourHand = document.querySelector('#hour-hand')

const secTick = () => {
  const date = new Date()
  //seconds:
  const sec = date.getSeconds()
  const secDegree = (sec * 6) + 90
  secHand.style.transform = `rotate(${secDegree}deg)`
  // minutes:
  const minutes = date.getMinutes()
  const minuteDegree = minutes * 6 + 90
  minHand.style.transform = `rotate(${minuteDegree}deg)`
  // hours:
  const hours = date.getHours()
  const hourDegree = hours * 30 + 90
  hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(secTick, 1000);
