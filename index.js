document.addEventListener("DOMContentLoaded", function () {
    const loaderContainer = document.querySelector(".loader-container");
    const content = document.querySelector(".content");
    const carouselTrack = document.querySelector(".carousel-track");

    // Hide Loader After 2 Spins
    setTimeout(() => {
        loaderContainer.classList.add("fade-out");

        // Show main content
        setTimeout(() => {
            loaderContainer.style.display = "none";
            content.classList.add("show");
        }, 500);
    }, 2000);

    // Load Carousel Images
    fetch("headcar.json")
        .then(response => response.json())
        .then(data => {
            const images = data.images;

            // Append Images to Carousel
            images.forEach(imgSrc => {
                const img = document.createElement("img");
                img.src = imgSrc;
                carouselTrack.appendChild(img);
            });

            // Clone first few images for infinite loop effect
            for (let i = 0; i < 3; i++) {
                let clone = carouselTrack.children[i].cloneNode(true);
                carouselTrack.appendChild(clone);
            }

            let currentIndex = 0;
            const imageWidth = 310;

            function moveCarousel() {
                currentIndex++;
                carouselTrack.style.transform = `translateX(-${currentIndex * imageWidth}px)`;

                if (currentIndex >= images.length) {
                    setTimeout(() => {
                        carouselTrack.style.transition = "none";
                        carouselTrack.style.transform = `translateX(0)`;
                        currentIndex = 0;
                    }, 500);
                } else {
                    carouselTrack.style.transition = "transform 0.5s ease-in-out";
                }
            }

            setInterval(moveCarousel, 2000);
        })
        .catch(error => console.error("Error loading images:", error));
});
