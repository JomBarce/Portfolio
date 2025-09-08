const pages = {
  home: `
    <div class="hero">
      <h1>JOMER BARCENILLA</h1>
      <p></p>
    </div>
  `,
  about: `
    <section id="about-intro">
      <h1 class="intro-title">Software Developer with a passion for building purposeful experiences</h1>
      <p class="intro-text">
        I'm Jomer, a software developer from Cebu, Philippines.
        <span>
          I have a growth mindset and a passion for building intuitive experiences through thoughtful logic and clean architecture.
        </span>
      </p>
      <button id="aboutBtn" type="button">GET TO KNOW</button>
    </section>
    <div id="about-details">
      <section class="page-section">
        <h1 class="section-title">About Me</h1>
        <div class="flex-col-center">
          <div class="text-container">
            <p>I'm Jomer, a passionate and adaptable Software Developer who is aiming for growth and learning with a solid foundation in Computer Science. My journey in the realm of technology has been dynamic, marked by diverse experiences across Game, Web, API, and App Development.</p>
            <p>My goal is to be able to improve and further develop my skills in programming and development. With a focus on software development, algorithm design, and machine learning, I aspire to create impactful solutions that address real-world problems and contribute to the everevolving field of computer science. </p>
          </div>
        </div>
      </section>
      <section class="page-section">
        <h1 class="section-title">Skills/Tech</h1>
        <div class="row">
          <div class="column flex-col-center">
            <div class="icons-grid">
              <div class="tech-icon-wrapper" data-name="C"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Python"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Java"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="HTML"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="CSS"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="JavaScript"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="TypeScript"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="C#"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="MySQL"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="PHP"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="OpenGL"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opengl/opengl-plain.svg" alt="OpenGL" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Rust"><img class="tech-icon" src="/public/portfolio/icons/Rust.svg" alt="Rust" draggable="false"/></div>
            </div>
            <div class="icons-grid">
              <div class="tech-icon-wrapper" data-name="Three.js"><img class="tech-icon" src="/public/portfolio/icons/ThreeJs.svg" alt="Three.js" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="TensorFlow"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="NumPy"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" alt="NumPy" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Pandas"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Scikit-learn"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-learn" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Matplotlib"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" alt="Matplotlib" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="React"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Vue.js"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Vite.js"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt="Vite.js" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Bootstrap"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="jQuery"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" alt="jQuery" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Xamarin"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xamarin/xamarin-original.svg" alt="Xamarin" draggable="false"/></div>
            </div>
            <div class="icons-grid">
              <div class="tech-icon-wrapper" data-name="Git"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Visual Studio"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" alt="Visual Studio" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="VS Code"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Google Colab"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg" alt="Google Colab" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Anaconda"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" alt="Anaconda" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Jupyter"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" alt="Jupyter" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Unity"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" alt="Unity" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Node.js"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Insomnia"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" alt="Insomnia" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Figma"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Canva"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" draggable="false"/></div>
              <div class="tech-icon-wrapper" data-name="Photoshop"><img class="tech-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="Photoshop" draggable="false"/></div>
            </div>
            <div class="icon-controls">
              <img id="leftIcon" class="control-icon" src="/public/portfolio/icons/ArrowLeft.svg" alt="Left" draggable="false"/>
              <h2 class="icon-name">\u{25CF}</h2>
              <img id="rightIcon" class="control-icon" src="/public/portfolio/icons/ArrowRight.svg" alt="Right" draggable="false"/>
            </div>
          </div>
          <div class="column flex-center">
            <div class="text-col-container">
              <h2 class="text-title">The technological world changes at a rapid pace.</h2>
              <p class="text-sub-title">Being a developer means being able to adapt and learn new languages and technologies.</p>
              <p>What matters most is your ability to stay curious, stay humble, and keep building, even when the tools evolve faster than you expect.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section">
        <h1 class="section-title">Experience</h1>
        <div class="row">
          <div class="column flex-center">
            <div class="experiences-list">
              <div class="experiences active" data-index="0">
                <h2 class="experience-title">Full-stack Software Developer</h2>
                <p>AOS Stella Maris | 2025</p>
              </div>
              <div class="experiences" data-index="1">
                <h2 class="experience-title">Freelance Developer</h2>
                <p>2024</p>
              </div>
              <div class="experiences" data-index="2">
                <h2 class="experience-title">Back-end Developer</h2>
                <p>Pixel8 Web Solutions & Consultancy Inc. | 2023</p>
              </div>
              <div class="experiences" data-index="3">
                <h2 class="experience-title">Game Developer</h2>
                <p>JaM! Games | 2021-2023</p>
              </div>
              <div class="experiences" data-index="4">
                <h2 class="experience-title">Computer Science</h2>
                <p>USC | 2020-2023</p>
              </div>
            </div>
          </div>
          <div class="column flex-center">
            <div class="experience-container">
              <div class="experience-details">
                <h2>
                  <img class="experience-icon" src="/public/portfolio/icons/Software.gif" alt="Software" draggable="false">
                  Full-stack Development
                </h2>
                <p>Designed and developed an internal Accommodation and Reporting System to streamline operational workflows.</p>
                <p>Handled both frontend and backend tasks, ensuring smooth integration and functionality across the stack.</p>
                <p>Integrated Google Apps Script to automate report generation and export data directly into Google Sheets format.</p>
              </div>
              <div class="experience-details">
                <h2>
                  <img class="experience-icon" src="/public/portfolio/icons/Freelance.gif" alt="Freelance" draggable="false">                
                  Freelancer
                </h2>
                <p>Assisted in debugging and optimizing code, improving reliability and performance in the project.</p>
                <p>Taught mathematics and programming fundamentals, focusing on logic, problem-solving, and real-world applications.</p>
                <p>Mentored thesis projects about motor vehicle crash detection and Arduino-powered gloves for sign language detection.</p>
              </div>
              <div class="experience-details">
                <h2>
                  <img class="experience-icon" src="/public/portfolio/icons/Backend.gif" alt="Back End" draggable="false">
                  Back-end API Development
                </h2>
                <p>Developed backend REST APIs for microservices with comprehensive documentation and unit testing.</p>
                <p>Collaborated in an agile environment, contributing to clean architecture and modular backend logic.</p>
                <p>Optimized database queries and middleware for performance and maintainability.</p>
              </div>
              <div class="experience-details">
                <h2>
                  <img class="experience-icon" src="/public/portfolio/icons/MobileGame.gif" alt="Mobile Game" draggable="false">
                  Mobile Game Development
                </h2>
                <p>Independently designed, developed, and published a mobile game "Jump Frog" using Unity and C#.</p>
                <p>Engineered a custom jump mechanic using the phone's accelerometer to calculate jump angle and force dynamically.</p>
                <p>Managed the full development lifecycle including design, programming, testing, and deployment.</p>
              </div>
              <div class="experience-details">
                <h2>
                  <img class="experience-icon" src="/public/portfolio/icons/Diploma.gif" alt="Diploma" draggable="false">
                  Bachelor's Degree
                </h2>
                <p>Published a research article on identifying common pest and diseases in lettuce plants using CNN.</p>
                <p>Built full-stack projects integrating frontend UI logic with backend data handling.</p>
                <p>Explored algorithm design, machine learning fundamentals, and modular architecture principles.</p>
              </div>
            </div>
        </div>        
      </section>
      <section class="page-section">
        <h1 class="section-title">Get in Touch</h1>
        <div class="contact-container flex-col-center">
          <div class="contact-text">
            <h2 class="section-sub-title">I'm always open to opportunities and collaborations.</h2>
            <p class="section-text">Whether you've got a small project in mind or just want to connect, free to drop me a message. I'd love to hear what you're working on.</p>
          </div>
          <div class="contact-icons">
            <a class="tooltip-wrapper" href="https://www.linkedin.com/in/jomer-barcenilla-903403227" target="_blank" rel="noopener noreferrer">
              <img class="contact-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" draggable="false"/>
              <span class="tooltip-text">Visit LinkedIn profile</span>
            </a>
            <a class="tooltip-wrapper" href="https://github.com/JomBarce" target="_blank" rel="noopener noreferrer">
              <img class="contact-icon invert-color" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Github" draggable="false"/>
              <span class="tooltip-text">Visit GitHub profile</span>
            </a>
            <div id="emailButton" class="tooltip-wrapper">
              <img class="contact-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" alt="Google" draggable="false">
              <span class="tooltip-text">Copy to clipboard</span>
            </div>
            <div id="discordButton" class="tooltip-wrapper">
              <img class="contact-icon" src="/public/portfolio/icons/Discord.svg" alt="Discord" draggable="false"/>
              <span class="tooltip-text">Copy to clipboard</span>
            </div>
            <a class="tooltip-wrapper" href="/public/portfolio/assets/BARCENILLA-CV.pdf" download>
              <img class="contact-icon" src="/public/portfolio/icons/CV.svg" alt="CV" draggable="false"/>
              <span class="tooltip-text">Download CV file</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  `,
  works: `
    <section id="works-cards">
      <h1>Works</h1>
      <div id="cards-container"></div>
    </section>
    <div id="works-details"></div>
  `,
};

let currentPage = null;

export function loadPage(pageName) {
    if (pageName === currentPage) return;
    currentPage = pageName;

    const contentDiv = document.getElementById('pageContent');
    contentDiv.innerHTML = '';

    if (pageName === 'home') {
      contentDiv.className = 'abs-center';
    } else if (pageName === 'about'){
      contentDiv.className = 'abs-bottom';
    } else {
      contentDiv.className = 'container';
    }
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = pages[pageName] || `<h1>Page Not Found</h1>`;
    wrapper.className = (pageName === 'home') ? 'page-slide-in flex-text-center' : 'page-slide-in';
    contentDiv.appendChild(wrapper);
}