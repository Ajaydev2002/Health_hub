document.addEventListener("DOMContentLoaded", () => {
    const dates = document.querySelectorAll(".dates .date");
    const appointmentContainer = document.querySelector(".Appointment-container");
    let lastClickedDate = null; 

    dates.forEach(date => {
        date.addEventListener("click", () => {
            if (lastClickedDate === date) {
                appointmentContainer.style.display =
                    appointmentContainer.style.display === "block" ? "none" : "block";
            } 
            else 
            {
                appointmentContainer.style.display = "block";
            }
            lastClickedDate = date;
        });
    });
});
