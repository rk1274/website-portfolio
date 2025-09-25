const experiences = [
  {
    category: "Languages",
    skills: [
      { name: "Go", level: "Experienced" },
      { name: "Python", level: "Experienced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "Java", level: "Experienced" },
      { name: "C#", level: "Intermediate" },
      { name: "Bash", level: "Intermediate" },
      { name: "C", level: "Basic" },
      { name: "Magik", level: "Intermediate" },
    ],
  },
  {
    category: "Cloud & Systems",
    skills: [
      { name: "GCP", level: "Intermediate" },
      { name: "Azure", level: "Basic" },
      { name: "Linux", level: "Intermediate" },
      { name: "Git", level: "Experienced" },
    ],
  },
  {
    category: "Web & Databases",
    skills: [
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Intermediate" },
      { name: "HTMX", level: "Intermediate" },
      { name: "SQL", level: "Basic" },
      { name: "bbolt", level: "Basic" },
    ],
  },
];

const levelDots = {
  "Basic": 2,
  "Intermediate": 3,
  "Experienced": 5
};

const levelColors = {
  "Basic": "#a7c957",        // Light green
  "Intermediate": "#6a994e", // Medium green
  "Experienced": "#386641"   // Dark green
};

const expContainer = document.querySelector(
  "#skills .about-containers"
);

experiences.forEach(section => {
  const sectionEl = document.createElement("div");
  sectionEl.classList.add("details-container");

  sectionEl.innerHTML = `
    <h2 class="skills-sub-title">${section.category}</h2>
    <div class="article-container">
      ${section.skills
        .map(
          skill => {
          const dots = Array.from({ length: 5 })
            .map((_, i) => {
            const filled = i < levelDots[skill.level];
            const color = filled ? levelColors[skill.level] : "#e7e7e7ff"; // gray for empty
            return `<span class="dot" style="background-color: ${color}"></span>`;
          })
          .join("");
          
          return `
            <article>
              <img src="./assets/checkmark.png" alt="Experience icon" class="icon" />
              <div>
                <h3>${skill.name}</h3>
                <div class="skill-level">${dots}</div>
              </div>
            </article>
          `;
        })
        .join("")}
    </div>
  `;

  expContainer.appendChild(sectionEl);
});

const projects = [
  {
    title: "Machine Learning Project",
    subtitle: "University second year project involving the creation of a neural network to classify flowers based off the Flowers-102 dataset\n\nManage to achieve an accurage of 64.5%. The GitHub repo below contains information on how the reproduce the model, and the 64.5% model itself.",
    github: "https://github.com/rk1274/IMLO-assessment",
  },
  {
    title: "Bridges Puzzle Solver",
    subtitle: "The above video shows the solver in action, solving a complex version of the logic puzzle game 'Bridges' (Hashi).",
    video: "./assets/bridges.mp4",
    github: "https://github.com/rk1274/bridges-solver-core"
  },
 {
    title: "Project Three",
    img: "./assets/project-3.png",
    github: "https://github.com/",
    liveDemo: "https://github.com/"
  }
];

const projectsContainer = document.querySelector("#projects .about-containers");

projects.forEach(project => {
  const projectEl = document.createElement("div");
  projectEl.classList.add("details-container", "color-container");

  const videoEmbed = project.video
  ? `<div class="video-container">
       <video autoplay loop muted playsinline class="project-video">
         <source src="${project.video}" type="video/mp4">
         Your browser does not support the video tag.
       </video>
     </div>`
  : "";

  const img = project.img
  ? `<img src="${project.img}" alt="${project.title}" class="project-img" />`
  : "";

  projectEl.innerHTML = `
    <div class="article-container">
        ${img}
        ${videoEmbed}
    </div>
    <h2 class="skills-sub-title project-title">${project.title}</h2>
    <h3 class="skills-sub-title project-subtitle">${project.subtitle}</h3>
    <div class="btn-container">
      <button class="btn btn-color-2 project-btn" onclick="location.href='${project.github}'">Github</button>
    </div>
  `;

  projectsContainer.appendChild(projectEl);
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}