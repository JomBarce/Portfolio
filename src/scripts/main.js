import { loadPage } from './pages.js';
import HomeView from './graphics/views/homeView.js';
import WorksView from './graphics/views/worksView.js';
import AboutView from './graphics/views/aboutView.js';
import MoreView from './graphics/views/moreView.js';

const bgCanvas = document.getElementById('bgCanvas');
const hideButton = document.getElementById('hideBtn');
const viewButton = document.getElementById('viewBtn');
const pageContent = document.getElementById('pageContent');

let currentView = null;
let currentPage = 'home';

// Load initial page
loadPage('home');
switchView('home');

// Switch views
async function switchView(viewName) {
  document.getElementById('closeBtn').style.display = 'none';

  if (viewButton.style.display !== 'block'){
    hideButton.style.display = 'block';
    viewButton.style.display = 'none';
  }
  
  if (currentView) await currentView.cleanup();

  const views = {
    home: HomeView,
    works: WorksView,
    about: AboutView,
    more: MoreView
  };

  const ViewClass = views[viewName];
  if (!ViewClass) return;

  currentView = new ViewClass(bgCanvas);
  await currentView.init();
  currentView.animate();
}

// Navigation handler
function handlePageSwitch(page) {
  if (page && currentPage !== page) {
    currentPage = page;
    loadPage(page);
    switchView(page);
  }
}

// Logo click
document.getElementById('logo').addEventListener('click', () => {
  handlePageSwitch('home');
});

// Navbar buttons
document.querySelectorAll('.navbar-menu button').forEach(button => {
  button.addEventListener('click', () => {
    const page = button.getAttribute('data-page');
    handlePageSwitch(page);
  });
});

// Menu buttons
document.querySelectorAll('.menu button').forEach(button => {
  button.addEventListener('click', () => {
    const page = button.getAttribute('data-page');
    handlePageSwitch(page);
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

// View toggle
hideButton.addEventListener('click', () => {
  pageContent.style.display = 'none';
  hideButton.style.display = 'none';
  viewButton.style.display = 'block';
});

viewButton.addEventListener('click', () => {
  pageContent.style.display = 'block';
  hideButton.style.display = 'block';
  viewButton.style.display = 'none';
});

// Console message
var consoleSytle = [
  'display: block',
  'padding: 20px',
  'background: black',
  'font-size: 20px',
  'color: white'
].join(";");

console.log(
  "%cHi! \ud83d\udc4b I'm Jomer Barcenilla!\u{1f604}" +
  "\nWelcome to my code!\u{2699} Let's code and learn together.\u{2328}" +
  "\nCheck out my Repository \u{1f4c1}: https://github.com/JomBarce" +
  "\n\"Anyone can write code that a computer can understand. Great programmers write code that humans can understand.\"",
  consoleSytle
);