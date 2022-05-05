import './about.css';

function About() {
    return (
        <div className="about">
            <div className="section-header">
                <div className="section-title">/ about-me</div>
            </div>
            <div className="about-info">
                <p>I'm currently a High School student interested in the Computer Science field and am hoping to pursue a Masters in Software Engineering. I'm aspiring to be a part of a big company as a Software Engineer where I get the opportunity to use a variety of languages on a frequent basis.</p>
                <p>I love the logical aspect of software development and the sense of accomplishment from problem solving. Other areas of interest for me include data-visualization using APIs, scripting / automation, and making project websites. In my free time, I like to weight lift and play video games with friends.</p>
                <div className="about-lang">
                    <span>Here are some languages / technology I've been working with:</span>
                    <ul className="lang-list">
                        <div className="left-list">
                            <li><i class="bx bx-chevron-right"></i>Javascript ES6+</li>
                            <li><i class="bx bx-chevron-right"></i>React</li>
                        </div>
                        <div className="right-list">
                            <li><i class="bx bx-chevron-right"></i>HTML / CSS</li>
                            <li><i class="bx bx-chevron-right"></i>Node.js</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;