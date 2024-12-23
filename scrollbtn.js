document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.getElementById('scrollTopButton');

   
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }

    scrollToTopButton.addEventListener('click', scrollToTop);
});
