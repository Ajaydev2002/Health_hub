const dropdown = document.querySelector('.home-dropbtn');
const dropdownContent = document.querySelector('.home-dropdown-content');
console.log('dropdown', dropdown)

let timeoutId;

function showDropdown() {
    clearTimeout(timeoutId);
    dropdownContent.style.display = 'block'; 
}

function hideDropdownWithDelay() {
    timeoutId = setTimeout(() => {
        if (!dropdown.matches(':hover') && !dropdownContent.matches(':hover')) {
            dropdownContent.style.display = 'none'; 
        }
    }, 500);
}

dropdown.addEventListener('mouseover', showDropdown);
dropdown.addEventListener('mouseleave', hideDropdownWithDelay);

dropdownContent.addEventListener('mouseover', showDropdown);
dropdownContent.addEventListener('mouseleave', hideDropdownWithDelay);








