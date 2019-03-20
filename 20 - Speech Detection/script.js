// setup of SpeechRecognition:
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition;
recognition.interimResults = true;

let newParagraph = document.createElement('p');
const words = document.querySelector('.words')
words.appendChild(newParagraph)

recognition.addEventListener('result', ev => {
  const transcript = Array.from(ev.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('')
  newParagraph.textContent = transcript
  if (ev.results[0].isFinal) {
    newParagraph = document.createElement('p')
    words.appendChild(newParagraph)
  }
  if (transcript.includes('wake word')) {
    // go fun a function that is specific to the word you need
  }
})
recognition.addEventListener('end', recognition.start)

recognition.start()
