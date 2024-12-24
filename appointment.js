document.addEventListener("DOMContentLoaded", () => {
    const dates = document.querySelectorAll(".dates .date");
    const appointmentContainer = document.querySelector(".Appointment-container");
    const appointments = appointmentContainer.querySelectorAll(".appointment1, .appointment2, .appointment3"); 
    let lastClickedDate = new Date();
    let appointmentIndex = 1; 

    dates.forEach(date => {
        date.addEventListener("click", () => {
            
            if (lastClickedDate === date) {
                appointmentContainer.style.display =
                    appointmentContainer.style.display === "block" ? "none" : "block";
            } else {

                appointmentContainer.style.display = "block";

                appointments.forEach(appointment => appointment.style.display = "none");

                for (let i = 0; i < appointmentIndex; i++) {
                    appointments[i].style.display = "block";
                }

                appointmentIndex = (appointmentIndex % 3) +1;  
            }

            lastClickedDate = date;
        });
    });
});
