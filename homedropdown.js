const dropdown = document.querySelector('.home-dropbtn');
const dropdownContent = document.querySelector('.home-dropdown-content');
console.log('dropdown', dropdown)


dropdown.addEventListener('mouseenter', () => {
    dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    setTimeout(() => {
        dropdownContent.style.display = 'none';
    }, 1000);
});

dropdownContent.addEventListener('mouseenter', () => {
    dropdownContent.style.display = 'block';
});

dropdowncontent.addEventListener('mouseleave', () => {
    setTimeout(() => {
        dropdownContent.style.display = 'none';
    }, 1000);
});

