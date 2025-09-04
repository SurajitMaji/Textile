const toggleButton = document.getElementsByClassName('toggleButton');
// toggleButton.classList.add('toggle');
toggleButton.innerHTML = '&#9776;'; // Hamburger icon
document.querySelector('.navbar').insertBefore(toggleButton, document.querySelector('.navbar-menu'));

toggleButton.addEventListener('click', () => {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
});
