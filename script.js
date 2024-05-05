// Get the menu button element and the navigation menu element
const btnMenu = document.querySelector('.menu-button');
const navMenu = document.querySelector('.navigation-menu');

// Add a click event listener to the menu button
btnMenu.addEventListener('click', function() {
  // Toggle the visibility of the navigation menu
  navMenu.classList.toggle('show-menu');
});
