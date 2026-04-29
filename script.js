// ================================
// 1. NAVBAR — Changement au scroll
// ================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.style.background = "#0D5C6E";
        navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.background = "#1A1A2E";
        navbar.style.boxShadow = "none";
    }
});
// ================================
// 2. ANIMATIONS AU SCROLL
// ================================

// On sélectionne toutes les sections
const sections = document.querySelectorAll("section");

// On crée l'observateur
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

// On dit à l'observateur de surveiller chaque section
sections.forEach(function(section) {
    observer.observe(section);
});
// ================================
// 3. FORMULAIRE DE CONTACT
// ================================

function sendMessage() {

    // On récupère les valeurs des champs
    const nom     = document.getElementById("name").value;
    const email   = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // On vérifie que les champs ne sont pas vides
    if (nom === "" || email === "" || message === "") {
        alert("⚠️ Veuillez remplir tous les champs !");
        return; // On arrête la fonction ici
    }

    // Si tout est rempli — on affiche un message de confirmation
    alert("✅ Merci " + nom + " ! Votre message a bien été envoyé.");

    // On vide les champs après envoi
    document.getElementById("name").value    = "";
    document.getElementById("email").value   = "";
    document.getElementById("message").value = "";
}