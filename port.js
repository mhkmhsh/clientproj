const imageCollections = {
    kumbPottery: Array.from({ length: 20 }, (_, i) => `kp${i + 1}.jpg`),
    londonTravel: Array.from({ length: 11 }, (_, i) => `lt${i + 1}.jpg`),
    prayagraj: Array.from({ length: 6 }, (_, i) => `p${i + 1}.jpg`),
    sangererBangru: Array.from({ length: 10 }, (_, i) => `sb${i + 1}.jpg`),
    goaCarnival: Array.from({ length: 8 }, (_, i) => `${i + 1}.jpg`)
};

function loadGallery(collection) {
    const galleryContainer = $("#gallery-container");
    galleryContainer.empty();
    
    imageCollections[collection].forEach((image, index) => {
        if (index < 9) {
            galleryContainer.append(`<div class='image-box'><img src='${image}' alt='Image'></div>`);
        }
    });
}

$(document).ready(function () {
    loadGallery("kumbPottery");
    
    $("#collection-selector").change(function () {
        loadGallery($(this).val());
    });
});