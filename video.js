const showVideoButton = document.querySelector('.playbtn'); 
const videoContainer = document.getElementById('video-container');
const closeVideoButton = document.querySelector('.closebtn');
const iframe = document.getElementById('video');

function postMessageToIframe(message) {
    iframe.contentWindow.postMessage(JSON.stringify(message), '*');
}

showVideoButton.addEventListener('click', () => {
    videoContainer.style.display = 'block'; 
    postMessageToIframe({ event: 'command', func: 'playVideo' }); 
});


closeVideoButton.addEventListener('click', () => {
    postMessageToIframe({ event: 'command', func: 'pauseVideo' }); 
    videoContainer.style.display = 'none';
});
