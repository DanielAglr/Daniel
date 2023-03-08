function About() {
    return (
        <div className='w-[90vw] max-w-[1500px] pb-[200px] md:pb-[150px]'>
            <div className='pb-[50px]'>
                <div className='text-contrast text-[45px] font-bold'>/ about-me</div>
            </div>
            <div className='max-w-[750px] text-contrast-dark text-[20px] leading-[35px]'>
                <p className='pb-[20px]'>I'm currently a High School student interested in the Computer Science field and am hoping to pursue a Masters in Software Engineering. I'm aspiring to be a part of a big company as a Software Engineer where I get the opportunity to use a variety of languages on a frequent basis.</p>
                <p className='pb-[20px]'>I love the logical aspect of software development and the sense of accomplishment from problem solving. Other areas of interest for me include data-visualization using APIs, scripting / automation, and making project websites. In my free time, I like to weight lift and play video games with friends.</p>
                <div className="about-lang">
                    <span>Here are some languages / technology I've been working with:</span>
                    <ul className='flex flex-row w-[350px]'>
                        <div className='w-1/2 float-left'>
                            <li className='flex items-center h-[20px] text-[20px] my-[10px] list-none'><i className='bx bx-chevron-right'></i>Javascript ES6+</li>
                            <li className='flex items-center h-[20px] text-[20px] my-[10px] list-none'><i className='bx bx-chevron-right'></i>React</li>
                        </div>
                        <div className='w-1/2 float-right'>
                            <li className='flex items-center h-[20px] text-[20px] my-[10px] list-none'><i className='bx bx-chevron-right'></i>HTML / CSS</li>
                            <li className='flex items-center h-[20px] text-[20px] my-[10px] list-none'><i className='bx bx-chevron-right'></i>Node.js</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;