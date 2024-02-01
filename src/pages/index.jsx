import './index.css'

import ButtonLink  from "../../components/button"
import ProjectWrapper from '../../components/project'

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
                        <ButtonLink link="https://github.com/lochyj/" name="Github"/>
                        <ButtonLink link="mailto://lachlan@jowett.net.au" name="Email"/>
                        <ButtonLink link="https://au.linkedin.com/in/lachlan-jowett-15b213281" name="LinkedIn"/>
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

                    <div className="panel">
                        I'm a class of 2025 highschool student at John Monash Science School.<br></br>
                    </div>
                    <div className="panel">
                        I began programming a long time ago and it has stuck with me since.
                        I spend quite a lot of my free time programming and experimenting with different programs and technologies.
                        This love of programming and learning about how computers work has lead me to investigate networking,
                        operating system design and development, web design and development,
                        and many other aspects of computing and technology.
                    </div>
                    <div className="panel">
                        I love all things open source, free and Linux. I have daily driven Fedora Linux for over a year now and
                        I've really enjoyed it. I mostly contribute to personal project. However, I have contributed to a few FOSS
                        projects in the past, either with issues, code or feature requests.
                    </div>
                    <div className="panel">
                        Recently, I worked at the 2024 Australian Open as a Technical Support Analyst. This was an amazing experience
                        where I learned a lot about the inner workings of such a massive event and the extent that they rely on technology.
                        Additionally, I learnt the basics of technical support and developed skills to handle people and their
                        organisation-specific technical needs.
                    </div>
                </div>

                <div className="projectsHeading">
                    <h2>Projects</h2>
                </div>

                <div className="projects">
                    <div className="panel">
                        I have worked on countless unfinished personal projects, here is the list of those that I am most proud of.
                    </div>

                    <div className="project">
                        <ProjectWrapper
                            title={"Blinkos"}
                            description={"Blinkos is my custom operating system that I am writing from scratch in C and x86 assembly for the 80386 processor."}
                            links={[
                                {link: "https://github.com/lochyj/blinkos", title: "Github"}
                            ]}
                        />

                        <ProjectWrapper
                            title={"UNLE"}
                            description={"UNLE is a force directed node layout engine for visualising very large highly connected node graphs."}
                            links={[
                                {link: "https://github.com/lochyj/UNLE", title: "Github"},
                                {link: "https://unle.js.org", title: "Docs"},
                                {link: "https://rotaryviper.github.io/UNLE/", title: "Example"}
                            ]}
                        />

                        <ProjectWrapper
                            title={"LachlanJowett.com"}
                            description={"This website!"}
                            links={[
                                {link: "https://github.com/lochyj/lachanjowett.com", title: "Github"},
                                {link: "https://lachlanjowett.com", title: "Site"}
                            ]}
                        />

                        <ProjectWrapper
                            title={"Arithmos"}
                            description={"A simple graph theory learning and visualisation tool."}
                            links={[
                                {link: "https://github.com/lochyj/Arithmos", title: "Github"},
                                {link: "https://lochyj.github.io/Arithmos", title: "Site"}
                            ]}
                        />

                        <ProjectWrapper
                            title={"Authentication"}
                            description={"A simple authentication api and proof of concept."}
                            links={[
                                {link: "https://github.com/lochyj/Authentication", title: "Github"}
                            ]}
                        />

                        <ProjectWrapper
                            title={"Physics Engine"}
                            description={"A simple physics engine written in c++ using the SFML graphics library."}
                            links={[
                                {link: "https://github.com/lochyj/cpp-physics-engine", title: "Github"}
                            ]}
                        />

                        <ProjectWrapper
                            title={"Volunteer"}
                            description={"An online volunteering and volunteer management system. This was created for a competition."}
                            links={[
                                {link: "https://github.com/lochyj/Volunteer", title: "Github"}
                            ]}
                        />

                        <ProjectWrapper
                            title={"School Projects"}
                            description={"A git repository that holds all of the code I produce for school projects."}
                            links={[
                                {link: "https://github.com/lochyj/School-Projects", title: "Github"}
                            ]}
                        />

                        <ProjectWrapper
                            title={"Pixel World Gen"}
                            description={"A simple pixel art world generator written in python."}
                            links={[
                                {link: "https://github.com/lochyj/pixel-world-gen", title: "Github"}
                            ]}
                        />

                        <ProjectWrapper
                            title={"Makefile Tools Vulnerability"}
                            description={"A proof of concept for a simple code execution vulnerability in the makefile tools vscode extension written by microsoft."}
                            links={[
                                {link: "https://github.com/lochyj/makefile-tools-vulnerability", title: "Github"}
                            ]}
                        />

                        <ProjectWrapper
                            title={"iDevice Toolbox"}
                            description={"A utility interface application to interact with hidden settings and data on your iPhone and iPad."}
                            links={[
                                {link: "https://github.com/Mushrrom/idevice-toolbox", title: "Github"}
                            ]}
                        />

                        <ProjectWrapper
                            title={"And More To Come!"}
                            description={"I am constantly creating, designing and building applications and improving projects. Checkout my github for more up-to-date info!"}
                            links={[
                                {link: "https://github.com/lochyj", title: "Github"}
                            ]}
                        />

                        {/*https://github.com/lochyj/blinkos*/}
                        {/*https://github.com/lochyj/UNLE*/}
                        {/*https://github.com/lochyj/lachanjowett.com*/}
                        {/*https://github.com/lochyj/Arithmos*/}
                        {/*https://github.com/lochyj/Authentication*/}
                        {/*https://github.com/lochyj/cpp-physics-engine*/}
                        {/*https://github.com/lochyj/Volunteer*/}
                        {/*https://github.com/lochyj/School-Projects*/}
                        {/*https://github.com/lochyj/pixel-world-gen*/}
                        {/*https://github.com/lochyj/makefile-tools-vulnerability*/}

                        {/*https://github.com/Mushrrom/idevice-toolbox*/}

                    </div>
                </div>

            </div>
        </div>
    )
}