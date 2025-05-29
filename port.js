$(document).ready(function () {
  const gallerySelect = $('#gallery-select');
  const galleryContainer = $('.gallary');
  const galleryTitle = $('.gallery-title');
  const modal = $('.img-modal');
  const modalImg = $('.img-modal .img');
  const modalName = $('.img-name p');

  function loadGallery(folder, count) {
    galleryContainer.empty();

    for (let i = 1; i <= count; i++) {
      const imgPath = `${folder}/img${i}.jpg`;
      const item = $(`
        <div class="item">
          <div class="item-img">
            <img src="${imgPath}" alt="Image ${i}" data-name="img${i}.jpg" />
          </div>
        </div>
      `);
      galleryContainer.append(item);
    }

    galleryTitle.text(folder.replace(/([A-Z])/g, ' $1').trim());
  }

  // Initial load
  const initialValue = gallerySelect.val().split('|');
  loadGallery(initialValue[0], parseInt(initialValue[1]));

  // On dropdown change
  gallerySelect.on('change', function () {
    const [folder, count] = $(this).val().split('|');
    loadGallery(folder, parseInt(count));
  });

  // Modal logic
  galleryContainer.on('click', 'img', function () {
    const src = $(this).attr('src');
    const name = $(this).data('name');
    modalImg.html(`<img src="${src}" alt="${name}" />`);
    modalName.text(name);
    modal.css('clip-path', 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)');
    modal.css('pointer-events', 'auto');
  });

  $('.close-btn').on('click', function () {
    modal.css('clip-path', 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)');
    modal.css('pointer-events', 'none');
  });
});
