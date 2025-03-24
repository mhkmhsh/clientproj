document.addEventListener("DOMContentLoaded", function () {
    const loader = document.querySelector(".loader");

    
    setTimeout(() => {
        loader.classList.add("fade-out");

        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 2000);
});