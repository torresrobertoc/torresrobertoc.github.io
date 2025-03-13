document.addEventListener("DOMContentLoaded", function() {
    loadComponent("component_navbar.html", "#navbar");
    loadComponent("component_footer.html", "#footer");
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
    document.querySelector(".navbar").classList.toggle("hidden", currentScroll > lastScroll);
    lastScroll = currentScroll;
});
