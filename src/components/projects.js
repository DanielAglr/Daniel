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
      <div className='w-[90vw] max-w-[1500px] pb-[200px] md:pb-[150px]'>
        <div className='pb-[50px]'>
            <div className='text-contrast text-[45px] font-bold'>/ projects</div>
        </div>
        <div>
          <div className='flex flex-wrap justify-evenly items-center'>
              {
                projectList.map((project, index) => (
                  <div className='flex flex-col max-w-[350px] min-w-[350px] max-h-[400px] min-h-[400px] rounded-[15px] px-[30px] py-[25px] bg-primary-light mb-[10px]' key={index}>
                    <div className='flex justify-between items-center pb-[20px]'>
                      <i className='bx bx-folder text-accent text-[35px]'></i>
                      <div className='text-contrast text-[25px]'>
                          <a href={project.githubLink} className='github-icon'>
                              <i className='bx bxl-github'></i>
                          </a>
                          <a href={project.websiteLink} className='website-icon'>
                              <i className='bx bx-window-alt'></i>
                          </a>
                      </div>
                    </div>
                    <div className='text-contrast text-[25px] font-bold'>{project.title}</div>
                    <div className='text-contrast-dark text-[20px]'>{project.desc}</div>
                    <div className='flex justify-center text-contrast-dark text-[15px] mt-auto bottom-0'>{project.langs}</div>
                  </div>
                ))
              }
          </div>
        </div>
      </div>
    )
}

export default Projects;