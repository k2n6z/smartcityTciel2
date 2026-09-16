// Animation simple lors du défilement

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);
});

/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const ouvert = navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            ouvert
        );

        menuToggle.setAttribute(
            "aria-label",
            ouvert ? "Fermer le menu" : "Ouvrir le menu"
        );

        menuToggle.textContent = ouvert ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(function (lien) {

        lien.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Ouvrir le menu");
        });

    });
}
