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
    githubLink: 'https://github.com/danielaglr/Glory',
    websiteLink: '',
    title: 'Glory | Powerlifting Database',
    desc: 'An interactive database for users to store and measure the progression of the lifts, aimed at helping powerlifters analyze their lifts over time. Utilizes an API to store and retrive data from a firebase backend.',
    langs: 'React, Javascript, Express JS, Tailwind CSS'
  },
  {
    githubLink: 'https://github.com/danielaglr/Mocha',
    websiteLink: '',
    title: 'Mocha',
    desc: 'A combat simulator which takes two champions from the game League of Legends, and calculates who would be the victor between the two in a perfectly simulated battle, using the in-game formulas for stat growth and combat.',
    langs: 'C++'
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
                        <a href={project.githubLink} target='_blank' rel='noreferrer noopener' className='github-icon'>
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