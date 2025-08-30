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
      <section class="page-section text">
        <h1 class="section-title">About Me</h1>
        <p>
          I'm Jomer, a passionate and adaptable Software Developer who is aiming for growth and learning 
          with a solid foundation in Computer Science. My journey in the realm of technology has been dynamic, marked by diverse experiences across Game, Web, API, and App Development.
        </p>
        <p>
          I am interested in 
        </p>
      </section>
      <section class="page-section">
        <h1 class="section-title">Skills/Tech</h1>
        <div class="row">
          <div class="column">
            <div class="icons-grid">
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" data-name="C" alt="C" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" data-name="Python" alt="Python" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" data-name="Java" alt="Java" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" data-name="HTML" alt="HTML" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" data-name="CSS" alt="CSS" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" data-name="JavaScript" alt="JavaScript" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" data-name="TypeScript" alt="TypeScript" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" data-name="C#" alt="C#" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" data-name="MySQL" alt="MySQL" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" data-name="PHP" alt="PHP" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-plain.svg" data-name="OpenGL" alt="OpenGL" draggable="false"/>
              <img class="tech-icon" src="/public/portfolio/icons/Rust.svg" data-name="Rust" alt="Rust" draggable="false"/>
            </div>
            <div class="icons-grid">
              <img class="tech-icon" src="/public/portfolio/icons/ThreeJs.svg" data-name="Three.js" alt="Three.js" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" data-name="TensorFlow" alt="TensorFlow" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" data-name="NumPy" alt="NumPy" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" data-name="Pandas" alt="Pandas" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" data-name="Scikit-learn" alt="Scikit-learn" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" data-name="Matplotlib" alt="Matplotlib" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" data-name="React" alt="React" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" data-name="Vue.js" alt="Vue.js" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" data-name="Vite.js" alt="Vite.js" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" data-name="Bootstrap" alt="Bootstrap" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" data-name="jQuery" alt="jQuery" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg" data-name="Xamarin" alt="Xamarin" draggable="false"/>
            </div>
            <div class="icons-grid">
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" data-name="Git" alt="Git" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" data-name="Visual Studio" alt="Visual Studio" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" data-name="VS Code" alt="VS Code" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg" data-name="Google Colab" alt="Google Colab" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" data-name="Anaconda" alt="Anaconda" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" data-name="Jupyter" alt="Jupyter" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" data-name="Unity" alt="Unity" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" data-name="Node.js" alt="Node.js" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" data-name="Insomnia" alt="Insomnia" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" data-name="Figma" alt="Figma" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" data-name="Canva" alt="Canva" draggable="false"/>
              <img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" data-name="Photoshop" alt="Photoshop" draggable="false"/>
            </div>
            <div class="icon-grid-controls">
              <img id="leftIcon" class="control-icon" src="/public/portfolio/icons/ArrowLeft.svg" alt="Left" draggable="false"/>
              <h2 class="icon-name">\u{25CF}</h2>
              <img id="rightIcon" class="control-icon" src="/public/portfolio/icons/ArrowRight.svg" alt="Right" draggable="false"/>
            </div>
          </div>
          <div class="column flex-center">
            <div class="text-container">
              <h2 class="text-title">The world changes at a rapid pace.</h2>
              <p>
                Being a developer means being able to adapt and learn new languages and technologies.
              </p>
              <p>
                What matters most is your ability to stay curious, stay humble, and keep building, even when the tools evolve faster than you expect.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section">
        <h1 class="section-title">Experience</h1>
        <div class="row">
          <div class="column experiences-list">
            <div class="experiences active" data-index="0">
              <h2 class="experience-title">Full-stack Software Developer</h2>
              <p>AOS Stella Maris | 2025</p>
            </div>
            <div class="experiences" data-index="1">
              <h2 class="experience-title">Back-end Developer</h2>
              <p>Pixel8 Web Solutions & Consultancy Inc. | 2023</p>
            </div>
            <div class="experiences" data-index="2">
              <h2 class="experience-title">Game Developer</h2>
              <p>JaM! Games | 2021-2023</p>
            </div>
            <div class="experiences" data-index="3">
              <h2 class="experience-title">Computer Science</h2>
              <p>USC | 2020-2023</p>
            </div>
          </div>
          <div class="column experience-container">
            <div class="experience-details">
              <img class="experience-icon" src="/public/portfolio/icons/Software.gif" alt="Software" draggable="false">
            </div>
            <div class="experience-details">
              <img class="experience-icon" src="/public/portfolio/icons/Software.gif" alt="Software" draggable="false">
            </div>
            <div class="experience-details">
              <img class="experience-icon" src="/public/portfolio/icons/MobileGame.gif" alt="Mobile Game" draggable="false">
            </div>
            <div class="experience-details">
              <img class="experience-icon" src="/public/portfolio/icons/Diploma.gif" alt="Diploma" draggable="false">
            </div>
        </div>        
      </section>
      <section class="page-section">
        <h1 class="section-title">Get in Touch</h1>
        <p>
          I'm Jomer, a passionate and adaptable Software Developer who is aiming for growth and learning 
          with a solid foundation in Computer Science.
        </p>
        <div>
          <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" draggable="false"/>
          <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" draggable="false"/>
          <img class="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" draggable="false"/>
          <img class="icon" src="/public/portfolio/icons/Discord.svg" draggable="false"/>
          <img class="icon" src="/public/portfolio/icons/CV.svg" draggable="false"/>
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
    wrapper.className = (pageName === 'home') ? 'page-slide-in flex-center-center' : 'page-slide-in';
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