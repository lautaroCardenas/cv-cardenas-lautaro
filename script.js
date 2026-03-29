// Referencia al botón flotante
const scrollBtn = document.getElementById('scroll-btn');

// Función para mostrar/ocultar el botón según el scroll del usuario
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Acción al hacer clic: Volver arriba con efecto suave
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});