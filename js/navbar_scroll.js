// To change navbar when scroll
let navbar = document.getElementById('navbar');

window.onscroll = function () {
    if (this.scrollY > navbar.offsetHeight)
        navbar.classList.add('dark-bg');
    else
        navbar.classList.remove('dark-bg');
}