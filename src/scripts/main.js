import { loadPage } from './pages.js';
import HomeView from './graphics/views/homeView.js';
import WorksView from './graphics/views/worksView.js';
import AboutView from './graphics/views/aboutView.js';

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
  document.getElementById('closeBtn').style.display = 'none';

  if (document.getElementById('viewBtn').style.display !== 'block'){
    document.getElementById('hideBtn').style.display = 'block';
  }
  
  
  if (currentView) {
    await currentView.cleanup();
  }

  if (viewName === 'home') {
    currentView = new HomeView(bgCanvas);
  } else if (viewName === 'works') {
    currentView = new WorksView(bgCanvas);
  } else if (viewName === 'about') {
    currentView = new AboutView(bgCanvas);
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
    } else if (button.id === 'nav-arcade-btn') {
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
    } else if (button.id === 'menu-arcade-btn') {
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

document.getElementById('hideBtn').addEventListener('click', () => {
  document.getElementById('pageContent').style.display = 'none';
  document.getElementById('hideBtn').style.display = 'none';
  document.getElementById('viewBtn').style.display = 'block';
});

document.getElementById('viewBtn').addEventListener('click', () => {
  document.getElementById('pageContent').style.display = 'block';
  document.getElementById('hideBtn').style.display = 'block';
  document.getElementById('viewBtn').style.display = 'none';
});

var consoleSytle = [
  "display: block",
  "padding: 20px",
  "background: black",
  "font-size: 20px",
  "color: white"
].join(";");

console.log(
  "%cHi! \ud83d\udc4b I'm Jomer Barcenilla!\u{1f604}" +
  "\nWelcome to my code!\u{2699} Let's code and learn together.\u{2328}" +
  "\nCheck out my Repository \u{1f4c1}: https://github.com/JomBarce" +
  "\n\"Anyone can write code that a computer can understand. Great programmers write code that humans can understand.\"",
  consoleSytle
);