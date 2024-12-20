const dropdown = document.querySelector('.home-dropdown');
const dropdownContent = document.querySelector('.home-dropdown-content');

let timeout;

dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdownContent.style.display = 'none';
    }, 3000);
  });

dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    dropdownContent.style.display = 'block';
  });


