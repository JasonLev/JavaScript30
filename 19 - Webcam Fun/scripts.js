const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
  })
  .then(localMediaStream => {
    video.srcObject = localMediaStream
    video.play()
  })
  .catch(error => console.error("Permission is needed from the webcam", error))
}

function paintToCanvas() {
  const {videoWidth: width, videoHeight: height} = video
  canvas.width = width
  canvas.height = height

  return setInterval(()=> {
    ctx.drawImage(video, 0 , 0, width, height)
    // get pixel data:
    let pixels = ctx.getImageData(0, 0, width, height)
    // alter the pixel data (with a photo-effect):
    // pixels = redEffect(pixels)
    pixels = rgbSplit(pixels)
    // pixels = greenScreen(pixels)
    // set the pixel data back into context:
    ctx.putImageData(pixels, 0, 0)
  }, 25)
}

function takePhoto() {
  // play the audio:
  snap.currentTime = 0
  snap.play()

  // send data out of canvas:
  const data = canvas.toDataURL('image/jpeg')
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('download', 'handsome')
  link.innerHTML = `<img src="${data}" alt="A very handsome man" />`
  strip.insertBefore(link, strip.firstChild)
}

// photo filter-effects
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i+= 4) {
    pixels.data[i] += 75 //RED
    pixels.data[i + 1] -= 55 //GREEN
    pixels.data[i + 2] *= 0.25 //BLUE
  }
  return pixels
}
function rgbSplit(pixels) {
  // this will look like a weird acid trip photo-effect:
  for (let i = 0; i < pixels.data.length; i+= 4) {
    pixels.data[i - 280] = pixels.data[i] //RED
    pixels.data[i + 400] = pixels.data[i + 1] //GREEN
    pixels.data[i - 220] = pixels.data[i + 2] //BLUE
  }
  return pixels
}
function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach( input => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
     let red = pixels.data[i + 0];
     let green = pixels.data[i + 1];
     let blue = pixels.data[i + 2];
     let alpha = pixels.data[i + 3];

    if (red >= levels.rmin
      && green >= levels.gmin
      && blue >= levels.bmin
      && red <= levels.rmax
      && green <= levels.gmax
      && blue <= levels.bmax) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }
  return pixels
}

getVideo()

video.addEventListener('canplay', paintToCanvas)
