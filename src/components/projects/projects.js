import './projects.css';

const projectList = [
    /* 
        githubLink: '',
        websiteLink: '',
        title: '',
        desc: '',
        langs: ''
    */
    {
        githubLink: 'https://github.com/danielaglr/NutriSearch',
        websiteLink: 'https://danielaglr.github.io/NutriSearch/',
        title: 'NutriSearch',
        desc: 'A calorie counter and recipe finder with barcode scanning and portion conversion capabilities, as well as woven interconnectivity between features.',
        langs: 'HTML / CSS, Javascript, Recipe / Nutrition APIs.' 
    },
    {
        githubLink: 'https://github.com/danielaglr/Jupiter',
        websiteLink: 'https://danielaglr.github.io/Jupiter/',
        title: 'Jupiter | Blitz Tracker',
        desc: 'A stat-tracker for Blitz Survival Games utilizing the public Hypixel player API. Can perform live stat-tracking or display general kit, K/D, and W/L stats.',
        langs: 'HTML / CSS, Javascript, Hypixel API.'
    },
    {
        githubLink: 'https://github.com/danielaglr/Apollo',
        websiteLink: '',
        title: 'Apollo',
        desc: 'A fitness tracker / planner with useful features for in-the-gym utility, such as weight-to-rep max calculators and personal record loggers.',
        langs: 'JSX / CSS, React, Javascript.'
    }
];

function Projects() {
    return (
        <div className="projects">
            <div className="section-header">
                <div className="section-title">/ projects</div>
            </div>
            <div className="projects-container">
                <div className="projects-array">
                    {
                        projectList.map(project => (
                            <div className="project-card">
                                <div className="card-header">
                                    <i class="bx bx-folder folder-icon"></i>
                                    <div className="external-links">
                                        <a href={project.githubLink} className="github-icon">
                                            <i class="bx bxl-github"></i>
                                        </a>
                                        <a href={project.websiteLink} className="website-icon">
                                            <i class="bx bx-window-alt"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="card-title">{project.title}</div>
                                <div className="card-info">{project.desc}</div>
                                <div className="card-lang">{project.langs}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects;