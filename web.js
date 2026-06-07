(function() {

  const skills = [
    { icon: "fab fa-node-js", name: "Node.js" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fas fa-database", name: "MongoDB" },
    { icon: "fas fa-server", name: "Express.js" },
    { icon: "fas fa-cloud", name: "REST APIs" },
    { icon: "fas fa-lock", name: "JWT / Auth" },
    { icon: "fas fa-chart-line", name: "PostgreSQL" },
    { icon: "fab fa-git-alt", name: "Git & GitHub" },
    { icon: "fas fa-terminal", name: "Linux CLI" },
    { icon: "fas fa-docker", name: "Docker" }
  ];

  const projects = [
    { 
      title: "Food Delivery API", 
      desc: "Complete REST API for food delivery with JWT auth, restaurant management, cart system, and order processing. Built with Node.js, Express, MongoDB.",
      lang: "Node.js / Express",
      icon: "fas fa-utensils",
      url: "https://github.com/ayushac39-design/food-dilivery-api",
      isExternal: true
    },
    { 
      title: "Doctor Appointment API", 
      desc: "REST API for booking doctor appointments. Features user auth, doctor management, appointment booking, cancel and status update.",
      lang: "Node.js / MongoDB",
      icon: "fas fa-hospital-user",
      url: "https://github.com/ayushac39-design/doctor-appointment-api",
      isExternal: true
    },
    { 
      title: "Modern Calculator", 
      desc: "A fully functional modern calculator with clean UI. Built with JavaScript, HTML5, CSS3. Live demo available.",
      lang: "JavaScript",
      icon: "fas fa-calculator",
      url: "https://ayushac39-design.github.io/-Modern-Calculator-By-Ayush-copy-2025/",
      isExternal: true
    },
    { 
      title: "React Product Catalog", 
      desc: "Student-level React project that fetches product data from a public API and displays it in a responsive grid layout. Built with React hooks.",
      lang: "React / API",
      icon: "fab fa-react",
      url: "https://react-product-catalog.netlify.app",
      isExternal: true
    },
    { 
      title: "Laundry Website", 
      desc: "Full laundry service platform mock — booking system with backend API simulation, responsive design.",
      lang: "HTML / CSS",
      icon: "fas fa-tshirt",
      url: "https://github.com/ayushac39-design/Laundry-Website-By-Ayush",
      isExternal: true
    },
    { 
      title: "Portfolio Website", 
      desc: "Student-level React project that fetches product data from a public API and displays it in a responsive grid layout.",
      lang: "React",
      icon: "fab fa-react",
      url: "https://github.com/ayushac39-design/portfolio-website",
      isExternal: true
    }
  ];

  function loadSkills() {
    const container = document.getElementById('skillsCloud');
    if (!container) return;
    let html = '';
    skills.forEach(skill => {
      html += `<span class="skill-tag"><i class="${skill.icon}"></i> ${skill.name}</span>`;
    });
    container.innerHTML = html;
  }

  function loadProjects() {
    const container = document.getElementById('repoGrid');
    if (!container) return;
    let html = '';
    projects.forEach(project => {
      html += `
        <div class="repo-card">
          <div class="repo-title"><i class="${project.icon}"></i> ${project.title}</div>
          <div class="repo-desc">${project.desc}</div>
          <div class="repo-meta"><span class="lang">${project.lang}</span><a href="${project.url}" target="_blank" class="repo-link">${project.isExternal ? 'live demo →' : 'view code →'}</a></div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  function loadSocialLinks() {
    const container = document.getElementById('socialLinks');
    if (!container) return;
    container.innerHTML = `
      <a href="https://github.com/ayushac39-design" target="_blank" class="social-btn"><i class="fab fa-github"></i> GitHub</a>
      <a href="https://www.linkedin.com/in/ayush-chauhan-617693311" target="_blank" class="social-btn"><i class="fab fa-linkedin"></i> LinkedIn</a>
      <a href="mailto:ayushac39@gmail.com" class="mail-link"><i class="fas fa-envelope"></i> ayushac39@gmail.com</a>
    `;
  }

  function generateContributions(year) {
    const grid = document.getElementById('contribGrid');
    if (!grid) return;
    let cells = '';
    for (let i = 0; i < 70; i++) {
      let level = 0;
      if (year === 2026) {
        if (i % 3 === 0) level = 3;
        else if (i % 5 === 0) level = 2;
        else if (i % 2 === 0) level = 1;
      } else {
        if (i % 5 === 0) level = 3;
        else if (i % 7 === 0) level = 2;
        else if (i % 3 === 0) level = 1;
      }
      let levelClass = '';
      if (level === 1) levelClass = 'l1';
      else if (level === 2) levelClass = 'l2';
      else if (level === 3) levelClass = 'l3';
      cells += `<div class="contrib-cell ${levelClass}"></div>`;
    }
    grid.innerHTML = cells;
  }

  function setupYearButtons() {
    const btns = document.querySelectorAll('.year-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const year = parseInt(btn.getAttribute('data-year'), 10);
        generateContributions(year);
      });
    });
  }

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === "#" || href === "") return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  loadSkills();
  loadProjects();
  loadSocialLinks();
  generateContributions(2026);
  setupYearButtons();
  setupSmoothScroll();

})();