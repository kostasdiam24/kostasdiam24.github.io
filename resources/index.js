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
  const navbarImage = document.getElementById("navbarImage");
  const rootElement = document.documentElement;

  const updateButtonHoverTextColor = () => {
    if (themeToggle.checked) {
      rootElement.style.setProperty('--button-hover-text-color', '#000000'); // Change hover text color to black in light theme
    } else {
      rootElement.style.setProperty('--button-hover-text-color', '#ffffff'); // Change hover text color to white in dark theme
    }
  };

  // Initial setup
  updateButtonHoverTextColor();

  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      rootElement.setAttribute('data-theme', 'light');
      navbarImage.src = 'resources/images/newEdit3p8.png'; // Change to light theme image
    } else {
      rootElement.removeAttribute('data-theme');
      navbarImage.src = 'resources/images/newEdit2p8.png'; // Change to dark theme image
    }
    updateButtonHoverTextColor();
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






//navbar
document.addEventListener("DOMContentLoaded", function() {
  const navbarToggle = document.getElementById("navbarToggle");
  const verticalNavbar = document.getElementById("verticalNavbar");

  navbarToggle.addEventListener("mouseover", function() {
    verticalNavbar.style.display = "block";
  });

  navbarToggle.addEventListener("mouseout", function() {
    verticalNavbar.style.display = "none";
  });
});


//////////MY PROJECTS///////////////

// --------------LETTER ANIMATION

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
