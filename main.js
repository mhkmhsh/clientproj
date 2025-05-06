 // Fade-in animation on load
 window.addEventListener('load', () => {
    document.getElementById('heroContent').classList.add('show');
  });

  // Optional: Scroll function
  function scrollToSection() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }