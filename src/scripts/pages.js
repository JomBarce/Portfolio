const pages = {
  home: `
    <div class="hero">
      <h1>JOMER BARCENILLA</h1>
      <p></p>
    </div>
  `,
  about: `
    <section class="about-intro">
      <h1 class="intro-title">Software Developer with a passion for building purposeful experiences</h1>
      <p class="intro-text">
        I'm Jomer, a software developer from Cebu, Philippines.
        <span>
          I have a growth mindset and a passion for building intuitive experiences through thoughtful logic and clean architecture.
        </span>
      </p>
      <button id="aboutBtn" type="button">GET TO KNOW</button>
    </section>
    <div class="about-details">
      <section class="page-section">
        <h1 class="section-title">About Me</h1>
        <div class="flex-col-center">
          <div class="text-container">
            <p>
              I'm Jomer, a passionate and adaptable Software Developer who is aiming for growth and learning
              with a solid foundation in Computer Science. My journey in the realm of technology has been dynamic, marked by diverse experiences across Game, Web, API, and App Development.
            </p>
            <p>
              My goal is to be able to improve and further develop my skills in programming and development. With a focus on software development, algorithm design, and machine learning, I aspire to create impactful solutions that address real-world problems and contribute to the everevolving field of computer science. 
            </p>
          </div>
        </div>
      </section>
      <section class="page-section">
        <h1 class="section-title">Skills/Tech</h1>
        <div class="row">
          <div class="column flex-col-center">
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
            <div class="icon-controls">
              <img id="leftIcon" class="control-icon" src="/public/portfolio/icons/ArrowLeft.svg" alt="Left" draggable="false"/>
              <h2 class="icon-name">\u{25CF}</h2>
              <img id="rightIcon" class="control-icon" src="/public/portfolio/icons/ArrowRight.svg" alt="Right" draggable="false"/>
            </div>
          </div>
          <div class="column flex-center">
            <div class="text-col-container">
              <h2 class="text-title">The technological world changes at a rapid pace.</h2>
              <p class="text-sub-title">
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
            <p class="section-text">
            Whether you've got a small project in mind or just want to connect, free to drop me a message. I'd love to hear what you're working on.
            </p>
          </div>
          <div class="contact-icons">
            <a class="tooltip-wrapper" href="https://www.linkedin.com/in/jomer-barcenilla-903403227" target="_blank">
              <img class="contact-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" draggable="false"/>
              <span class="tooltip-text">Visit LinkedIn profile</span>
            </a>
            <a class="tooltip-wrapper" href="https://github.com/JomBarce" target="_blank">
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
    <h1>Works</h1>
    <ul>
      <li>3D Portfolio Site</li>
      <li>Interactive WebGL Demo</li>
    </ul>
  `,
};

let currentPage = null;

// Load chosen page
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