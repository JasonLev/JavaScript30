let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const endTimeDisplay = document.querySelector('.display__end-time')
const btns = document.querySelectorAll('button[data-time]')

function timer(seconds) {
  //immediately clear any existing timer that may be running:
  clearInterval(countdown)

  const now = Date.now()
  const endTime = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(endTime)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000)
    if (secondsLeft <= 0) {
      clearInterval(countdown)
    }
    displayTimeLeft(secondsLeft);
  }, 1000);

}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60)
  const secondsRemain = seconds % 60
  const display = `${minutes}:${secondsRemain < 10 ? 0 : ""}${secondsRemain}`
  timerDisplay.textContent = display;
  document.title = display
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp)
  const hour = end.getHours()
  const minutes = end.getMinutes()
  endTimeDisplay.textContent = `We will return at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? 0 : ""}${minutes}`
}

function startTimer() {
  const seconds = parseInt(this.dataset.time)
  timer(seconds);
}

btns.forEach(btn => btn.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const minutes = this.minutes.value
  timer(minutes * 60);
  this.reset()
})
