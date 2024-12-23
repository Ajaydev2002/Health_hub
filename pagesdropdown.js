const pageDropdown = document.querySelector('.pages-dropbtn');
const pageDropdownContent = document.querySelector('.pages-dropdown-content');
console.log('pageDropdown', pageDropdown)

let pageTimeoutId; 

function showDropdown() {
    clearTimeout(pageTimeoutId); 
    pageDropdownContent.style.display = 'block'; 
}

function hideDropdownWithDelay() {
    pageTimeoutId = setTimeout(() => {
        if (!pageDropdown.matches(':hover') && !pageDropdownContent.matches(':hover')) {
            pageDropdownContent.style.display = 'none'; 
        }
    }, 500);
}

pageDropdown.addEventListener('mouseover', showDropdown);
pageDropdown.addEventListener('mouseleave', hideDropdownWithDelay);

pageDropdownContent.addEventListener('mouseover', showDropdown);
pageDropdownContent.addEventListener('mouseleave', hideDropdownWithDelay);



