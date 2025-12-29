const menuToggle = document.querySelector('.menu-toggle input');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

/* AUTO TUTUP SAAT MENU DIKLIK */
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.checked = false;
  });
});
