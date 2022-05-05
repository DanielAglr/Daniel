import './intro.css';

function Intro() {
    return (
        <div className="intro">
            <div className="intro-title">
                Hi, I'm <span className="intro-name">Daniel</span>.
            </div>
            <div className="intro-info">I'm a student from Long Beach. I'm very interested in full-stack development, data manipulation, and anything involving JavaScript.</div>
            <div className="intro-reach">
                <a className="intro-contact" href="mailto:daniel16aglr@gmail.com">
                    <i className="bx bx-conversation intro-icon"/>
                    <h6 className="intro-contact-text">Reach me</h6>
                </a>
            </div>
        </div>
    )
};

export default Intro;