// Selecting the menu button and navigation menu elements
const menuButton = document.querySelector('.menu-button');
const navigationMenu = document.querySelector('.navigation-menu');

// Adding a click event listener to the menu button
menuButton.addEventListener('click', function() {
  // Toggling the visibility of the navigation menu
  navigationMenu.classList.toggle('show-menu');
});
