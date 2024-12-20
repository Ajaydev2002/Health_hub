const  appointments = document.querySelectorAll('.Appointment-container');
const requests = document.querySelectorAll('.request-container');
const exitButton = document.querySelectorAll('.closebtn');


appointments.foreach(appointment => {
    appointment.addEventListener('click', () => {
        requests.style.display = 'block';
    });
});


exitButton.addEventListener('click', () => {
    request.style.display = 'none';
});