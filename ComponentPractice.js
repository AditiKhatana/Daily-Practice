const ProjectCard = (title, description, tags) => {
    return `
        <div class="project-card">
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="tags">${tags.join(', ')}</div>
        </div>
    `;
};

const sanctuaryProject = ProjectCard(
    "Sanctuary 3D", 
    "A spatial web experience", 
    ["React", "Three.js", "Zustand"]
);

console.log(sanctuaryProject);