window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('gallery');
    const images = Array.from(container.children);
  
    // Shuffle images
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
  
    // Re-add in new order
    images.forEach(img => container.appendChild(img));
  });
  