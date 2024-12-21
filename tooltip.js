document.addEventListener("DOMContentLoaded", () => {
    const dates = document.querySelectorAll(".dates .date");
    const tooltip = document.querySelector(".tooltip");
    

    dates.forEach(date => {
        date.addEventListener('mouseenter', (event) => {
            const rect = date.getBoundingClientRect(); 
        tooltip.style.display = 'block';
        tooltip.style.left = `${rect.left + rect.width / 2}px`; 
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 95}px`;
        tooltip.textContent = `3 Available`;
       });
    });
   

   dates.forEach(date => {
      date.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
      });
    });
});