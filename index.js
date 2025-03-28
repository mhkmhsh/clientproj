document.getElementById("menu-btn").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    let button = document.getElementById("menu-btn");
    sidebar.classList.toggle("active");
    button.classList.toggle("active");
});

document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


fetch('headcar.json')
.then(response => response.json())
.then(data => {
    const images = data.images.map(() => "img/placeholder.jpg");
    const texts = data.texts || ["Welcome", "Enjoy", "Discover", "Join Us", "Experience", "Explore"];
    let index = 0;
    const imageElement = document.getElementById("carouselImage");
    const textElement = document.getElementById("carouselText");
    
    function updateCarousel() {
        textElement.classList.remove("active");
        setTimeout(() => {
            imageElement.src = images[index];
            textElement.innerText = texts[index] || "Image";
            textElement.classList.add("active");
            index = (index + 1) % images.length;
        }, 1000);
    }
    setInterval(updateCarousel, 4000);
    updateCarousel();
})
.catch(error => console.error("Error loading JSON:", error));