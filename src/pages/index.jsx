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
                        <span>Keep Scrolling</span>
                        <img src="/arrow.svg" alt=""/>
                    </div>
                </div>
                <div className="content">

                </div>
            </div>
        </div>
    )
}