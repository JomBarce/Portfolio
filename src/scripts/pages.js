const pages = {
  home: `
    <div class="hero">
      <h1>JOMER BARCENILLA</h1>
      <p></p>
    </div>
  `,
  about: `
    <section class="about-intro">
      <h1>Software Developer with a passion for building purposeful experiences</h1>
      <p>
        I'm Jomer, a software developer from Cebu, Philippines.
        I have a growth mindset and a passion for building intuitive experiences through thoughtful logic and clean architecture.
      </p>
      <button id="aboutBtn" type="button">GET TO KNOW</button>
    </section>
    <div class="about-details">
      <section class="page-section">
        <h1>About Me</h1>
        <p>
          I'm Jomer, a passionate and adaptable Software Developer who is aiming for growth and learning 
          with a solid foundation in Computer Science.
        </p>
        <p>
          My journey in the realm of technology has been dynamic, marked by diverse experiences across Game, Web, API, and App Development.
        </p>
      </section>
      <section class="page-section">
        <h1>Skills/Tech</h1>
        <p>
          I'm Jomer, a passionate and adaptable Software Developer who is aiming for growth and learning 
          with a solid foundation in Computer Science.
        </p>
        <div class="icons">
            <h2 class="item-title">Languages</h2>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" draggable="false"/>

            <h2 class="item-title">Framework and Libraries</h2>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" draggable="false"/>        
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" draggable="false"/> 
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg" draggable="false"/>

            <h2 class="item-title">Tools</h2>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" draggable="false"/>
            <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" draggable="false"/>
        </div>
      </section>
      <section class="page-section">
        <h1>Experience</h1>
        <p>
          I'm Jomer, a passionate and adaptable Software Developer who is aiming for growth and learning 
          with a solid foundation in Computer Science.
        </p>
        <img src="/public/portfolio/icons/Diploma.gif" alt="Diploma" draggable="false">
        <img src="/public/portfolio/icons/MobileGame.gif" alt="Mobile Game" draggable="false">
        <img src="/public/portfolio/icons/Software.gif" alt="Software" draggable="false">
      </section>
      <section class="page-section">
        <h1>Get in Touch</h1>
        <p>
          I'm Jomer, a passionate and adaptable Software Developer who is aiming for growth and learning 
          with a solid foundation in Computer Science.
        </p>
        <div>
          <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" draggable="false"/>
          <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" draggable="false"/>
          <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" draggable="false"/>
          <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" draggable="false"/>
        </div>
      </section>
    </div>
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

    const contentDiv = document.getElementById('pageContent');
    contentDiv.innerHTML = '';
    contentDiv.className = (pageName === 'home') ? 'abs-center' : 'container';

    if (pageName === 'home') {
      contentDiv.className = 'abs-center';
    } else if (pageName === 'about'){
      contentDiv.className = 'abs-bottom';
    } else {
      contentDiv.className = 'container';
    }

    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = pages[pageName] || `<h1>Page Not Found</h1>`;
    wrapper.className = (pageName === 'home') ? 'page-slide-in flex-center' : 'page-slide-in';
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