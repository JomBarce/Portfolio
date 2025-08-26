import { loadPage } from './pages.js';
import HomeView from './graphics/views/homeView.js';
import WorksView from './graphics/views/worksView.js';
import AboutView from './graphics/views/aboutView.js';
import ImageView from './graphics/views/imageView.js';

const bgCanvas = document.getElementById('bgCanvas');

// Load initial page
let currentView = null;
// let currentPage = 'home';
// loadPage('home');
// switchView('home');
let currentPage = 'about';
loadPage('about');
switchView('about');

// Function to switch views
async function switchView(viewName) {
  if (currentView) {
    await currentView.cleanup();
  }

  if (viewName === 'home') {
    currentView = new HomeView(bgCanvas);
  } else if (viewName === 'works') {
    currentView = new WorksView(bgCanvas);
  } else if (viewName === 'about') {
    currentView = new AboutView(bgCanvas);
    
    // const modelCanvas = document.getElementById('modelCanvas');
    // const modelView = new ImageView(modelCanvas);

    // await modelView.init();
    // modelView.animate();

    // const contentDiv = document.getElementById('pageContent');
    // contentDiv.style.backgroundColor = 'black';
  }

  await currentView.init();
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
  const overlay = document.getElementById('menuOverlay');
  const hamburger = document.querySelector('.hamburger');
  const logo = document.getElementById('logo');
  
  overlay.classList.toggle('open');
  hamburger.classList.toggle('open');
  logo.classList.toggle('open');
}