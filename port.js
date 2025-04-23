const imageData = {
  goaCarnival: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"],
  kumbPottery: ["kp1.jpg", "kp2.jpg", "kp3.jpg", "kp4.jpg", "kp5.jpg", "kp6.jpg", "kp7.jpg", "kp8.jpg", "kp9.jpg", "kp10.jpg", "kp11.jpg", "kp12.jpg", "kp13.jpg", "kp14.jpg", "kp15.jpg", "kp16.jpg", "kp17.jpg", "kp18.jpg", "kp19.jpg", "kp20.jpg"],
  londonTravel: ["lt1.jpg", "lt2.jpg", "lt3.jpg", "lt4.jpg", "lt5.jpg", "lt6.jpg", "lt7.jpg", "lt8.jpg", "lt9.jpg", "lt10.jpg", "lt11.jpg"],
  prayagraj: ["p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg", "p6.jpg"],
  sangenerBangru: ["sb1.jpg", "sb2.jpg", "sb3.jpg", "sb4.jpg", "sb5.jpg", "sb6.jpg", "sb7.jpg", "sb8.jpg", "sb9.jpg", "sb10.jpg"]
};

const galleryDescriptions = {
  goaCarnival: "Vibrant celebrations and colorful streets during Goa's famous carnival.",
  kumbPottery: "A journey through the craft and soul of India's traditional pottery.",
  londonTravel: "Urban charm and hidden stories from the heart of London.",
  prayagraj: "Sacred rituals and riverside serenity captured in Prayagraj.",
  sangenerBangru: "Art, fabric, and tradition woven into the soul of Rajasthan."
};

function loadImages(folder) {
  const $gallery = $('#gallery');
  $gallery.empty();

  // Add text card first
  const textCard = $(`<div class="gallery-text-card"><p>${galleryDescriptions[folder]}</p></div>`);
  $gallery.append(textCard);

  // Add images in original order
  imageData[folder].forEach(image => {
    const imgPath = `${folder}/${image}`;
    $gallery.append(`<img src="${imgPath}" alt="${image}" class="img-fluid gallery-image">`);
  });

  // Apply custom CSS for Prayagraj gallery
  if (folder === 'prayagraj') {
    $gallery.addClass('prayagraj');
  }
}

$(document).ready(function () {
  const initialFolder = $('#folderSelect').val();
  loadImages(initialFolder);

  $('#folderSelect').on('change', function () {
    const selected = $(this).val();
    if (imageData[selected]) {
      loadImages(selected);
    } else {
      console.error("Folder not found!");
    }
  });
});
