import "./index.css";

import ButtonLink from "../../components/button";

export default function Index() {
  return (
    <div>
      <div className="pageWrapper">
        <div className="landing">
          <div className="logo">
            <div className="logoWrapper">
              <img src="/avatar.png" alt="" />
            </div>
          </div>
          <div className="quickInfo">
            <h2 className="titleText">Hi, I'm Lachlan.</h2>
            <div className="spacer"></div>
            <ButtonLink link="mailto://lachlan@jowett.net.au" name="Email" />
            <ButtonLink link="https://github.com/lochyj/" name="Github" />
            <ButtonLink
              link="https://au.linkedin.com/in/lachlan-jowett-15b213281"
              name="LinkedIn"
            />
          </div>
        </div>
        <div className="secondary">
          <h2>A little about me</h2>
          <div className="panel">
            I began programming many years ago and it has become one of the main
            things that I do in my free time. This love of programming and
            learning about how computers work has lead me to investigate
            networking, operating system design and development, web design and
            development, and many other aspects of computing and technology. I
            love all things open source and free. I daily drive Fedora Linux and
            I really enjoy it.
          </div>
        </div>
      </div>
    </div>
  );
}
