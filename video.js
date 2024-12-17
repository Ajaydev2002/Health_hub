const video = document.querySelector(".myvideo");
const button = document.querySelector(".playbtn");

button.addEventListener('click', () => {
    video.play();
});