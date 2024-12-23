document.querySelector(".menu-icon").addEventListener("click", function () {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "menu.html";
    }, 1000); 
});