let slideIndex = 1;

document.addEventListener("DOMContentLoaded", () => {
    mostrarSlides(slideIndex);
});

// Controle pelos botões
window.mudarSlide = function(n) {
    mostrarSlides(slideIndex += n);
}

function mostrarSlides(n) {
    let slides = document.querySelectorAll(".slide");
    
    if (slides.length === 0) return;

    // Lógica para rotacionar infinito
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    // Esconde todos
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    
    slides[slideIndex - 1].style.display = "block";
}