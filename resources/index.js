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

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("textInHeroSection").classList.add("visible");
    document.getElementById("imageH").classList.add("visible");
  }, 900);
});

// Function to rearrange elements based on screen width
const rearrangeElements = () => {
  const isMobile = window.innerWidth <= 800;
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


document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const navbarImage = document.getElementById("navbarImage");

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      navbarImage.src = 'resources/images/newEdit3p8.png'; // Change to light theme image
    } else {
      document.documentElement.removeAttribute('data-theme');
      navbarImage.src = 'resources/images/newEdit2p8.png'; // Change to dark theme image
    }
  });

  // Underline Animation on Scroll
  const h1 = document.querySelector('h1');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
    const underlineWidth = scrollPercentage * 100;

    h1.style.setProperty('--underline-width', underlineWidth + '%');
  });
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
