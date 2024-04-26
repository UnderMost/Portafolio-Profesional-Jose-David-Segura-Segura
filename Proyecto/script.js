let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            document.querySelector('header nav ul li a[href="#' + id + '"]').classList.add('active');
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

var cards = document.querySelector('.cards');
var selectors = document.querySelectorAll('.card');

// Función para cambiar la imagen activa en el carrusel
function changeImage() {
    for (var i = 0; i < selectors.length; i++) {
        if (selectors[i].classList.contains('active')) {
            selectors[i].classList.remove('active');
            if (i === selectors.length - 1) {
                selectors[0].classList.add('active');
            } else {
                selectors[i + 1].classList.add('active');
            }
            break;
        }
    }
}

// Llamar a la función para cambiar la imagen cada 3 segundos
setInterval(changeImage, 3000);