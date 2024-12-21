document.addEventListener("DOMContentLoaded", () => {
    const appointments = document.querySelectorAll(".Appointment-container div[class^='appointment']");
    const requestContainer = document.querySelector(".request-container");
    const exitButton = document.querySelector(".exitbtn");
    const cancelButton = document.querySelector(".cancel");

    appointments.forEach(appointment => {
        appointment.addEventListener("click", () => {
            requestContainer.style.display = "flex";
        });
    });

    exitButton.addEventListener("click", () => {
        requestContainer.style.display = "none";
    });

    cancelButton.addEventListener("click", () => {
        requestContainer.style.display = "none";
    });
});
