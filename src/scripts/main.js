import View from './graphics/view.js';
import { loadPage } from './pages.js';

const canvas = document.getElementById('app');
const view = new View(canvas);
view.animate();

window.loadPage = loadPage;

// Load initial page
loadPage('home');

// Logo click
document.getElementById('logo').addEventListener('click', () => {
  loadPage('home');
});

// Nav button click
document.querySelectorAll('.navbar-menu button').forEach(button => {
  button.addEventListener('click', () => {
    const page = button.getAttribute('data-page');

    if (page) {
      loadPage(page);
    } else if (button.id === 'arcade-button') {
      window.open('games.html', '_blank');
    }
  });
});

// Menu button click
document.querySelectorAll('.menu button').forEach(button => {
  button.addEventListener('click', () => {
    const page = button.getAttribute('data-page');

    if (page) {
      loadPage(page);
    } else if (button.id === 'arcade-button') {
      window.open('games.html', '_blank');
    }

    toggleMenuOverlay();
  });
});

// Hamburger toggle
document.getElementById('hamburger')?.addEventListener('click', toggleMenuOverlay);

function toggleMenuOverlay() {
  const overlay = document.getElementById('menu-overlay');
  const hamburger = document.querySelector('.hamburger');
  
  overlay.classList.toggle('open');
  hamburger.classList.toggle('open');
}