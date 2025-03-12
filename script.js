// Toggle Mobile Menu
function toggleMenu() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}


let lastScroll = 0;
window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    document.querySelector(".navbar").classList.toggle("hidden", currentScroll > lastScroll);
    lastScroll = currentScroll;
});
