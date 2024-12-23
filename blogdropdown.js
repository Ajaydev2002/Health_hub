const blogDropdown = document.querySelector('.blog-dropbtn');
const blogDropdownContent = document.querySelector('.blog-dropdown-content');
console.log('blogDropdown', blogDropdown)

let blogTimeoutId; 

function showDropdown() {
    clearTimeout(blogTimeoutId); 
    blogDropdownContent.style.display = 'block'; 
}

function hideDropdownWithDelay() {
    blogTimeoutId = setTimeout(() => {
        if (!blogDropdown.matches(':hover') && !blogDropdownContent.matches(':hover')) {
            blogDropdownContent.style.display = 'none'; 
        }
    }, 500);
}

blogDropdown.addEventListener('mouseover', showDropdown);
blogDropdown.addEventListener('mouseleave', hideDropdownWithDelay);

blogDropdownContent.addEventListener('mouseover', showDropdown);
blogDropdownContent.addEventListener('mouseleave', hideDropdownWithDelay);