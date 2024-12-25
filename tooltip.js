document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    document.body.appendChild(tooltip);

    const dates = document.querySelectorAll(".dates .date");
    const appointmentContainer = document.querySelector(".Appointment-container");
    const appointments = appointmentContainer.querySelectorAll(".appointment1, .appointment2, .appointment3");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let slots = 1;
    let lastClickedDate = null;

    dates.forEach(date => {
        const day = parseInt(date.textContent);
        const dateValue = new Date(today.getFullYear(), today.getMonth(), day);
        dateValue.setHours(0, 0, 0, 0);

        if (dateValue >= today) {
            let availableSlots = slots;
            slots = slots === 1 ? 2 : 3; 

            date.addEventListener("mouseenter", (event) => {
                const rect = date.getBoundingClientRect();
                tooltip.style.display = "block";
                tooltip.textContent = `${availableSlots} Available`;

                
                tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`; 
                tooltip.style.top = `${rect.top - tooltip.offsetHeight - -90}px`; 
            });

            date.addEventListener("mouseleave", () => {
                tooltip.style.display = "none";
            });

            date.addEventListener("click", () => {
                if (lastClickedDate === date) {
                    appointmentContainer.style.display = 
                        appointmentContainer.style.display === "block" ? "none" : "block";
                } else {
                    appointmentContainer.style.display = "block";

                    appointments.forEach(appointment => appointment.style.display = "none");

                    for (let i = 0; i < availableSlots; i++) {
                        appointments[i].style.display = "block";
                    }
                }

                lastClickedDate = date;
            });
        }
    });
});
