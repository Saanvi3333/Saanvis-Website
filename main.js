const menuToggle = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');

// Toggle menu when hamburger is clicked
menuToggle.addEventListener('click', function() {
  navBar.classList.toggle('show');      // toggle menu
  menuToggle.classList.toggle('open');  // rotate hamburger

  // Change hamburger to X and back
  if (menuToggle.textContent === '☰') {
    menuToggle.textContent = 'X';
    menuToggle.style.color = 'white';
  } else {
    menuToggle.textContent = '☰';
    menuToggle.style.color = 'black';
  }
});

// Close menu when a nav link is clicked
const navLinks = navBar.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('show');
    menuToggle.classList.remove('open');
    menuToggle.textContent = '☰';   // reset to hamburger
    menuToggle.style.color = 'black';
  });
});
