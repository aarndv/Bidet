// alert('Only play when you\'re on a laptop! Don't use fullscreen (f11)');

let vid = document.getElementById("bg-audio");
vid.volume = 0.2;
let volumeElement = document.querySelector(".js-volume-display");
const muteButtonElement = document.querySelector('.mute-button') 

function lowerVolume() {
  if (muteButtonElement.classList.contains('active')) {
    return
  }
  if (vid.volume === 0) {
    return
  }
  let videoVolume = vid.volume * 1000; 
  videoVolume -= 50
  vid.volume = videoVolume / 1000
  volumeElement.innerHTML = `Volume: ${vid.volume}`;
}

function increaseVolume() {
  if (muteButtonElement.classList.contains('active')) {
    return
  }
  if (vid.volume === 1) {
    return
  }
  let videoVolume = vid.volume * 1000; 
  videoVolume += 50
  vid.volume = videoVolume / 1000
  volumeElement.innerHTML = `Volume: ${vid.volume}`;
}

function mute() {
  if (muteButtonElement.classList.contains('active')) {
    muteButtonElement.classList.remove('active');
    muteButtonElement.innerHTML = 'mute';
    return; 
  }
  vid.volume = 0; 
  muteButtonElement.classList.add('active');
  muteButtonElement.innerHTML = 'muted';
  volumeElement.innerHTML = `Volume: ${vid.volume}`;
}