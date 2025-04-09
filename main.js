const container = document.getElementById("scroll-container");
const content = document.getElementById("scroll-content");

// Calculate total scrollable height based on panel width
const panels = document.querySelectorAll('.panel');
const totalScrollWidth = panels.length * window.innerWidth;
const scrollHeight = totalScrollWidth - window.innerWidth;

// Set the container height to mimic horizontal scroll
container.style.height = scrollHeight + window.innerHeight + "px";

window.addEventListener("scroll", () => {
  const containerTop = container.offsetTop;
  const scrollY = window.scrollY;

  // Only animate if within the sticky container scroll range
  if (scrollY >= containerTop && scrollY <= containerTop + scrollHeight) {
    const scrollOffset = scrollY - containerTop;
    content.style.transform = `translateX(-${scrollOffset}px)`;
  }
});