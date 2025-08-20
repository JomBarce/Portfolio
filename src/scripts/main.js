import { loadPage } from './pages.js';
import HomeView from './graphics/homeView.js';
import WorksView from './graphics/worksView.js';
import AboutView from './graphics/aboutView.js';

const canvas = document.getElementById('app');

// Load initial page
let currentView = null;
let currentPage = 'about';
loadPage('about');
switchView('about');

// Function to switch views
function switchView(viewName) {
  if (currentView) {
      currentView.cleanup();
  }

  if (viewName === 'home') {
    currentView = new HomeView(canvas);
  } else if (viewName === 'works') {
    currentView = new WorksView(canvas);
  } else if (viewName === 'about') {
    currentView = new AboutView(canvas);
  }

  currentView.init();
  currentView.animate();
}

// Logo click
document.getElementById('logo').addEventListener('click', () => {
  if (currentPage !== 'home') {
    currentPage = 'home';
    loadPage('home');
    switchView('home');
  }
});

// Nav button click
document.querySelectorAll('.navbar-menu button').forEach(button => {
  button.addEventListener('click', () => {
    const page = button.getAttribute('data-page');

    if (page && currentPage !== page) {
      currentPage = page;
      loadPage(page);
      switchView(page);
    } else if (button.id === 'arcade-button') {
      window.open('games.html', '_blank');
    }
  });
});

// Menu button click
document.querySelectorAll('.menu button').forEach(button => {
  button.addEventListener('click', () => {
    const page = button.getAttribute('data-page');

    if (page && currentPage !== page) {
      currentPage = page;
      loadPage(page);
      switchView(page);
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