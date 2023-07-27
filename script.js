// Get the menu button element and the navigation menu element
const menuButton = document.querySelector('.menu-button');
const navigationMenu = document.querySelector('.navigation-menu');

// Add a click event listener to the menu button
menuButton.addEventListener('click', function() {
  // Toggle the visibility of the navigation menu
  navigationMenu.classList.toggle('show-menu');
});
