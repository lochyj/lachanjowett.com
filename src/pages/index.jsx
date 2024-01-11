import './index.css'

export default function Index() {
    return (
        <div>
            <div className="pageWrapper">
                <div className="landing">
                    <div className="logo">
                        <div className="logoWrapper">
                            <img src="/avatar.png" alt=""/>
                        </div>
                    </div>
                    <div className="quickInfo">
                        <h2>Hi, I'm Lachlan.</h2>
                        <a href="https://github.com/lochyj/">@Github</a>
                        <a href="mailto://lachlan@jowett.net.au">@Email</a>
                        <a href="https://au.linkedin.com/in/lachlan-jowett-15b213281">@LinkedIn</a>
                    </div>
                    <div className="arrow">
                        <span>Keep Scrolling</span><br></br>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="3" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"></path></svg>
                    </div>
                </div>

                <div className="aboutHeading">
                    <h2>About Me</h2>
                </div>

                <div className="about">

                    <span className="sentence">Hey 👋.</span>

                    <div className="panel">
                        I'm a highschool student at John Monash Science School.<br></br>
                        I love Computer Science, Engineering and Networking.<br></br>
                        I am <i>(currently)</i> a hobbyist programmer.<br></br>
                    </div>
                    <div className="panel">
                        I mostly work on personal projects.<br></br>
                        I love open source software and try to help where I can.<br></br>
                        I daily drive Fedora Linux and I love it.<br></br>
                    </div>
                    <div className="panel">
                        At the moment I am learning more about networking.<br></br>
                        I'm also improving my web design skills.<br></br>
                    </div>
                </div>

                {/* <div className="experienceHeading">
                    <h2>Experience</h2>
                </div>

                <div className="experience">
                    <span className="sentence">What I've done.</span>
                    <div className="panel">
                        <div className="placement">
                            <h3>2021</h3>
                            <h4>John Monash Science School</h4>
                            <p>Currently studying at JMSS.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}