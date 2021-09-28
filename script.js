const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass video to element, then display
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    console.log('Damn!:', error);
  }
}


//On Load
selectMediaStream();
