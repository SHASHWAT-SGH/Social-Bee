import React from "react";
import "../css/AboutMe.css";

function AboutMe() {
  return (
    <>
      <section className="about-me-container">
        <img
          src={require("../assets/PC_Be E Social_GA_Logo Rev3-08.png")}
          alt="logo"
          className="bee"
        />
        <aside className="left">
          <div className="wrapper">
            <div className="about-me">
              <h1>About Me</h1>
              <p>I ignite social media magic for your brand!</p>
              <p>
                With over 3 years of experience and a proven track record of
                success for 40+ brands across diverse industries, I'm your
                one-stop shop for captivating social media strategies. I don't
                just manage accounts, I craft engaging content that resonates
                with your target audience, amplifies your brand voice, and
                drives real results.
              </p>
              <p>
                Imagine turning casual followers into loyal customers, boosting
                brand awareness, and achieving your social media goals. That's
                the power I bring to the table. Let's chat about how I can help
                your business thrive online!
              </p>
            </div>
            <div className="contact-now-container">
              <span className="btn">
                <span>Contact Now!!!</span>
              </span>
            </div>
          </div>
        </aside>
        <aside className="right">
          <img
            src={require("../assets/website pic.png")}
            alt="udit"
            className="image"
          />
        </aside>
      </section>
    </>
  );
}

export default AboutMe;
