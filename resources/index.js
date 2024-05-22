// JavaScript to add the visible class after 1.5 seconds
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("textInHeroSection").classList.add("visible");
  }, 400);
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("text2H").classList.add("visible2");
  }, 700);
});

// JavaScript to add the visible class after 1.5 seconds
    document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document.getElementById("textInHeroSection").classList.add("visible");
        document.getElementById("imageH").classList.add("visible");
      }, 900);
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
