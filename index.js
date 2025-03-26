document.getElementById("menu-btn").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    let button = document.getElementById("menu-btn");
    sidebar.classList.toggle("active");
    button.classList.toggle("active");
});

document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});