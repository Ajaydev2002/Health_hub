const profiles = document.querySelectorAll('.profile-images img');
const Contents = document.querySelectorAll('.review-content');

profiles.forEach(profile => {

    profile.addEventListener('click', () => {

        Contents.forEach(content => content.classList.remove('active'));

        const targetId = profile.getAttribute('data-target');

        document.getElementById(targetId).classList.add('active');
    });
});