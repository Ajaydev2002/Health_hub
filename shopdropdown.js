const shopDropdown = document.querySelector('.shop-dropbtn');
const shopDropdownContent = document.querySelector('.shop-dropdown-content');
console.log('shopDropdown', shopDropdown)

let shopTimeoutId; 

function showDropdown() {
    clearTimeout(pageTimeoutId); 
    shopDropdownContent.style.display = 'block'; 
}

function hideDropdownWithDelay() {
    shopTimeoutId = setTimeout(() => {
        if (!shopDropdown.matches(':hover') && !shopDropdownContent.matches(':hover')) {
            shopDropdownContent.style.display = 'none'; 
        }
    }, 500);
}

shopDropdown.addEventListener('mouseover', showDropdown);
shopDropdown.addEventListener('mouseleave', hideDropdownWithDelay);

shopDropdownContent.addEventListener('mouseover', showDropdown);
shopDropdownContent.addEventListener('mouseleave', hideDropdownWithDelay);