document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector(".gallary");
    const imgModal = document.querySelector(".img-modal");
    const imgViewContainer = imgModal.querySelector(".img");
    const modalName = imgModal.querySelector(".img-name p");
  
    const tl = gsap.timeline({ paused: true });
    revealModal();
  
    function generateRandomName() {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
      const nameLength = Math.floor(Math.random() * 3) + 6;
      let randomName = "";
      for (let i = 0; i < nameLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomName += characters.charAt(randomIndex);
      }
      return randomName + ".jpg";
    }
  
    const imageNames = Array.from({ length: 6 }, (_, i) => `img${i + 1}.jpg`);
  
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    shuffle(imageNames);
  
    imageNames.forEach((imageFile) => {
      const item = document.createElement("div");
      item.classList.add("item");
  
      const itemImg = document.createElement("div");
      itemImg.classList.add("item-img");
  
      const imgTag = document.createElement("img");
      imgTag.src = `./prayagraj/${imageFile}`;
      itemImg.appendChild(imgTag);
  
      const itemName = document.createElement("div");
      itemName.classList.add("item-name");
      const randomName = generateRandomName();
      itemName.innerHTML = `<p>${randomName}</p>`;
      itemName.setAttribute("data-img", imageFile.replace(".jpg", ""));
  
      item.appendChild(itemImg);
      item.appendChild(itemName);
  
      item.addEventListener("click", () => {
        const dataImg = itemName.getAttribute("data-img");
        const clickedItemImgSrc = `./prayagraj/${dataImg}.jpg`;
        const clickedItemName = itemName.textContent;
  
        imgViewContainer.innerHTML = `<img src="${clickedItemImgSrc}" alt="${clickedItemName}" />`;
        modalName.textContent = clickedItemName;
  
        tl.play();
      });
  
      galleryContainer.appendChild(item);
    });
  
    const closeBtn = document.querySelector(".close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        tl.reverse();
      });
    }
  
    function revealModal() {
      tl.to(".img-modal", {
        duration: 0.75,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        pointerEvents: "auto",
      });
  
      tl.to(".img-modal .img", {
        duration: 0.75,
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      }, "<");
  
      tl.to(".modal-item p", {
        duration: 1,
        top: 0,
        ease: "power4.inOut",
        stagger: {
          amount: 0.2,
        },
      }, "<");
  
      tl.reverse();
    }
  });
  