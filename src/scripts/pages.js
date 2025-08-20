const pages = {
  home: `
    <div class="hero">
      <h1>JOMER BARCENILLA</h1>
      <p></p>
    </div>
  `,
  about: `
    <h1>About Me</h1>
    <p>
      I'm Jomer, a passionate and adaptable Software Developer who is aiming for growth and learning 
      with a solid foundation in Computer Science.
    </p>
    <p>
      My journey in the realm of technology has been dynamic, marked by diverse experiences across Game, Web, API, and App Development.
    </p>
  `,
  works: `
    <h1>Works</h1>
    <ul>
      <li>3D Portfolio Site</li>
      <li>Interactive WebGL Demo</li>
    </ul>
  `,
};

let currentPage = null;
let intervalId = null;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
const fullName = "JOMER BARCENILLA";
const titles = [
  "SOFTWARE DEVELOPER",
  "GAME DEVELOPER",
  "WEB DEVELOPER",
  "FULL-STACK DEVELOPER",
  "BACK-END DEVELOPER"
];

let index = 0;
let isCycling = false;

// Load chosen page
export function loadPage(pageName) {
    if (pageName === currentPage) return;
    currentPage = pageName;

    const contentDiv = document.getElementById('page-content');
    contentDiv.innerHTML = '';

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = pages[pageName] || `<h1>Page Not Found</h1>`;
    wrapper.className = pageName === 'home' ? 'page-slide-in center' : 'page-slide-in';
    contentDiv.appendChild(wrapper);

    if (pageName === 'home') {
        setTimeout(() => {
            intervalId = setInterval(cycleTitles, 3000);
        }, 0);
    }
}

// Scramble text effect
function scrambleText(target, newText) {
  const targetText = newText;
  
  let iteration = 0;

  const scrambleInterval = setInterval(() => {
    target.innerText = targetText
      .split("")
      .map((letter, index) => {
        if (letter == " ") return " ";
        
        const roundedIndex = Math.floor(iteration);
        if (index <= roundedIndex) {
          return targetText[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    iteration += 1 / 3;

    if (iteration >= targetText.length) {
      clearInterval(scrambleInterval);
    }
  }, 30);
}

// Cycle through titles
function cycleTitles() {
  const titleName = document.querySelector(".hero h1");
  const subtitleName = document.querySelector(".hero p");

  if (!titleName || !subtitleName) return;

  titleName.classList.add("fade-out");

  setTimeout(() => {
    let nextTitle;
    let nextSubtitle;
    
    if (!isCycling) {
      isCycling = true;
      index = 0;
      
    }

    if (titles.length > index) {
      nextTitle = titles[index];
      nextSubtitle = fullName;
      index++;
    } else {
      isCycling = false;
      nextTitle = fullName;
      nextSubtitle = "";
    }

    scrambleText(titleName, nextTitle);
    subtitleName.textContent = nextSubtitle;

    titleName.classList.remove("fade-out");
  }, 500);
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(intervalId);
    intervalId = null;
  } else {
    if (currentPage === 'home') {
      if (intervalId) return;
      intervalId = setInterval(cycleTitles, 3000);
    }
  }
});