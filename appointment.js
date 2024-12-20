
const dates = document.querySelectorAll('.date');
const appointmentContainer = document.querySelector('#appointment-container');

dates.forEach(date => {
    date.addEventListener('click', () => {
        appointmentContainer.style.display = 'block';
    });
});