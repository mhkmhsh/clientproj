document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallary");
  const title = document.querySelector("h1");
  const select = document.getElementById("gallery-select");

  function loadGallery(folder, count) {
    gallery.innerHTML = "";
    title.textContent = folder; // update h1 with folder name

    for (let i = 1; i <= count; i++) {
      const item = document.createElement("div");
      item.classList.add("item");

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("item-img");

      const img = document.createElement("img");
      img.src = `${folder}/kp${i}.jpg`;
      img.alt = `${folder} ${i}`;

      imageContainer.appendChild(img);
      item.appendChild(imageContainer);
      gallery.appendChild(item);

      // Add modal logic here if needed
      img.addEventListener("click", () => {
        document.querySelector(".img-modal").style.pointerEvents = "auto";
        document.querySelector(".img-modal").style.clipPath =
          "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
        document.querySelector(".img-modal .img").innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
        document.querySelector(".img-name p").textContent = img.alt;
      });
    }
  }

  // Handle dropdown change
  select.addEventListener("change", () => {
    const [folder, count] = select.value.split("|");
    loadGallery(folder, Number(count));
  });

  // Close button logic
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.querySelector(".img-modal").style.pointerEvents = "none";
    document.querySelector(".img-modal").style.clipPath =
      "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";
  });

  // Load default gallery
  const [defaultFolder, defaultCount] = select.value.split("|");
  loadGallery(defaultFolder, Number(defaultCount));
});
