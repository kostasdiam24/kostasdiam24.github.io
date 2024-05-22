document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1 // Trigger when 10% of the element is in view
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          if (entry.target.id === "textInHeroSection") {
            entry.target.classList.add("visible");
            document.getElementById("text2H").classList.add("visible");
          } else if (entry.target.id === "imageH") {
            entry.target.classList.add("visible");
          }
        }, 400);
        observer.unobserve(entry.target); // Stop observing the element after it becomes visible
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  const textInHeroSection = document.getElementById("textInHeroSection");
  const imageH = document.getElementById("imageH");

  observer.observe(textInHeroSection);
  observer.observe(imageH);
});





/*NAVBAR SCROLLING

let timer;

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  console.log('Scrolling...'); // Debug: Check if scroll event is firing
  navbar.style.opacity = '0.7'; // 70% opacity when scrolling

  // Clear the timer if it's already set
  if (timer) {
    clearTimeout(timer);
  }

  // Set a new timer to reset the opacity after scrolling stops
  timer = setTimeout(function() {
    console.log('Scroll stopped, resetting opacity'); // Debug: Check if timer callback is firing
    navbar.style.opacity = '1'; // 100% opacity after scrolling stops
  }, 100); // Adjust the timeout duration as needed
}); */
