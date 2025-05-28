document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallary");
  const title = document.querySelector("h1");
  const select = document.getElementById("gallery-select");

  function loadGallery(folder, count) {
    gallery.innerHTML = "";
    title.textContent = folder.replace(/([A-Z])/g, ' $1').trim();

    for (let i = 1; i <= count; i++) {
      const item = document.createElement("div");
      item.classList.add("item");

      const imageContainer = document.createElement("div");
      imageContainer.classList.add("item-img");

      const img = document.createElement("img");
      img.src = `${folder}/img${i}.jpg`;
      img.alt = `Image ${i}`;

      imageContainer.appendChild(img);
      item.appendChild(imageContainer);
      gallery.appendChild(item);

      // Modal Logic
      img.addEventListener("click", () => {
        const modal = document.querySelector(".img-modal");
        modal.style.pointerEvents = "auto";
        modal.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
        document.querySelector(".img-modal .img").innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
        document.querySelector(".img-name p").textContent = img.alt;
      });
    }
  }

  select.addEventListener("change", () => {
    const [folder, count] = select.value.split("|");
    loadGallery(folder, Number(count));
  });

  document.querySelector(".close-btn").addEventListener("click", () => {
    const modal = document.querySelector(".img-modal");
    modal.style.pointerEvents = "none";
    modal.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";
  });

  // Load default on page load
  const [defaultFolder, defaultCount] = select.value.split("|");
  loadGallery(defaultFolder, Number(defaultCount));
});
