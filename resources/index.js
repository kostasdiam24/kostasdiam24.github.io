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



// Function to rearrange elements based on screen width
// Function to rearrange elements based on screen width
const rearrangeElements = () => {
  const isMobile = window.innerWidth <= 600;
  const text1H = document.getElementById("text1H");
  const text2H = document.getElementById("text2H");
  const imageH = document.getElementById("imageH");

  if (isMobile && !imageH.classList.contains('moved')) {
    text1H.insertAdjacentElement("afterend", imageH);
    imageH.classList.add('moved');
  } else if (!isMobile && imageH.classList.contains('moved')) {
    const heroSection = document.getElementById("heroSection");
    heroSection.appendChild(imageH);
    imageH.classList.remove('moved');
  }
};

// Initial call to rearrange elements
rearrangeElements();

// Event listener for window resize
window.addEventListener("resize", rearrangeElements);


   // Variables for slow scroll
      let scrollTimeout = null;

      // Function to handle the slow scroll
      const slowScroll = (event) => {
        event.preventDefault();

        // Clear the previous scroll timeout if any
        if (scrollTimeout !== null) {
          window.cancelAnimationFrame(scrollTimeout);
        }

        // Determine the scroll direction and set the scroll amount
        const scrollAmount = 80;
        const direction = event.deltaY > 0 ? 1 : -1;
        const targetScrollY = window.scrollY + direction * scrollAmount;

        // Animate the scroll
        const animateScroll = () => {
          const currentScrollY = window.scrollY;
          const distance = targetScrollY - currentScrollY;
          const scrollStep = distance / 20; // Adjust the division factor for slower or faster scroll
          

          window.scrollBy(0, scrollStep);

          if (Math.abs(distance) > 1) {
            scrollTimeout = window.requestAnimationFrame(animateScroll);
          }
        };

        animateScroll();
      };

      // Add event listener for the wheel event
      window.addEventListener("wheel", slowScroll, { passive: false });








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
