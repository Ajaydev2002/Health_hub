document.addEventListener("DOMContentLoaded", () => {
  const dates = document.querySelectorAll(".dates .date");
  const tooltip = document.querySelector(".tooltip");
  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  let slots = 1;

  dates.forEach(date => {
      const day = parseInt(date.textContent);
      const dateValue = new Date(today.getFullYear(), today.getMonth(), day);
      dateValue.setHours(0, 0, 0, 0); 

      if (dateValue >= today) {
          const availableSlots = slots;
          slots = slots === 1 ? 2 : 3;

          date.addEventListener('mouseenter', (event) => {
              const rect = date.getBoundingClientRect();
              
              tooltip.style.display = 'block';
              tooltip.textContent = `${availableSlots} Available`;
              tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;
              tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
 

          });

          date.addEventListener('mouseleave', () => {
              tooltip.style.display = 'none';
          });
      } 
   });
});
