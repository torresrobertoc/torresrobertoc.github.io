document.addEventListener("DOMContentLoaded", function() {
    loadComponent("component_navbar.html", "#NavBar");
    loadComponent("component_footer.html", "#Footer");
});

function loadComponent(url, selector) {
    fetch(url)
        .then(response => response.text())
        .then(data => document.querySelector(selector).innerHTML = data)
        .catch(error => console.error(`Error loading ${url}:`, error));
}

// Toggle Mobile Menu
function toggleMenu() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}

// Show navbar on scroll up
let lastScroll = 0;
window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    let navbar = document.querySelector(".navbar");
    
    if (currentScroll === 0) {
        navbar.classList.remove("hidden");
    }
    else {
        navbar.classList.toggle("hidden", currentScroll > lastScroll);
    }

    lastScroll = currentScroll;
});


function updateNavbarHeight() {
    const navbar = document.querySelector(".navbar"); // Select the navbar element
    if (navbar) {
        let navbarHeight = navbar.offsetHeight; // Get the actual height
        document.documentElement.style.setProperty("--navbarHeight", navbarHeight + "px");
    }
}

// Run when the page loads and when window resizes
window.addEventListener("load", updateNavbarHeight);
window.addEventListener("resize", updateNavbarHeight);

// Lightbox Implementation
document.querySelectorAll('.lightbox').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const imgSrc = link.getAttribute('href');
      const overlay = document.createElement('div');
      overlay.id = 'lightbox-overlay';
      overlay.innerHTML = `<img src="${imgSrc}" alt="Expanded view">`;
      overlay.addEventListener('click', () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });
  