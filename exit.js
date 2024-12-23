document.querySelector(".exit").addEventListener("click", function () {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000); 
});
