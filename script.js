const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Promp to select media stream, pass to video elemet, then play
async function selectMediaStream() {
    try {
        const mediaStrem = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStrem;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //Catch Error Here
        console.log('whoops, error here:', error);
    }
}

button.addEventListener('click', async() => {
    //Disable button
    button.disabled = true;
    //Start Piture in Picture
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled = false;
});

//On Load
selectMediaStream();