const profiles = document.querySelectorAll('.profile-images img');
const Contents = document.querySelectorAll('.review-content div');

if (Contents.length > 0) {
    Contents.forEach(content => content.classList.remove('active'));
    Contents[0].classList.add('active');  
}

profiles.forEach(profile => {

    profile.addEventListener('click', () => {

        Contents.forEach(content => content.classList.remove('active'));

        const targetId = profile.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);

       if (targetContent) {
        targetContent.classList.add('active');
       }
    });
});