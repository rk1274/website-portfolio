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

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}