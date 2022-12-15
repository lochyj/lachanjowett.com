import './index.css'

export default function Index() {
    return (
        <div>
            <div className="header">
                <div className="box">
                    <img className="avatar" src="./avatar.png" alt="My avatar, A bonsai in pixel art form"></img>
                </div>
                <div>
                    <h1>Lachlan Jowett</h1>
                    <h2>
                        <picture>
                            <source srcSet="/github-mark-white.svg" media="(prefers-color-scheme: dark)"></source>
                            <img src="/github-mark.svg" alt="Github logo" style={{verticalAlign: "middle"}} className="img"/>
                        </picture>
                        <a href="https://github.com/lochyj">@Lochyj</a>
                    </h2>
                    <h2>
                        <picture>
                            <source srcSet="/mail-white.svg" media="(prefers-color-scheme: dark)"></source>
                            <img src="/mail.svg" alt="Github logo" style={{verticalAlign: "middle"}} className="img"/>
                        </picture>
                        <a href="mailto:lachlan@jowett.net.au">@Email</a>
                    </h2>
                </div>           
            </div>
            <div className="content">
                <div className="separator">
                    <h2>- About me -</h2>
                    <p>
                        Hi, I'm Lachlan, or Lochyj. I'm a passionate developer that enjoys making, creating, programming, designing and playing with everything tech and electronics. I'm currently a student. I love low level programming, design and learning more about how operating systems and kernels work. Additionally, I want to learn more about compilers, interpreters, mobile app design, web development, styling, 3D modeling, game design and electrical engineering!
                    </p>
                </div>
                <div className="separator">
                    <h2>- Projects -</h2>
                    <h2>
                        OS Dev
                    </h2>
                    <p>
                        I recently did some research into os development, which has lead me to create a simple boot-loader and kernel in C and x86 ASM. I'm currently working on a simple shell and a file system.
                    </p>
                    <a href="https://github.com/lochyj/os">@Github</a>
                    <h2>
                        Mathematica PlotF
                    </h2>
                    <p>
                        When I started using Mathematica it seemed super unintuitive to plot mathematical functions. So i made a simple function that plots functions in a simple way and allows me to simply edit and change the graph.
                    </p>
                    <a href="https://github.com/lochyj/Mathematica-Utils">@Github</a>
                    <h2>
                        Auth Project
                    </h2>
                    <p>
                        To help me learn more about networking, security, and web development, I started to create a simple authentication system. It's currently unfinished and I hope to get some free time to finish it.
                    </p>
                    <a href="https://github.com/lochyj/Auth-project">@Github</a>
                </div>
            </div>
        </div>
    )
}