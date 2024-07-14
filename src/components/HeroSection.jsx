import React from "react";
import ContactNowBTN from "./ContactNowBTN";
import "../css/heroSection.css";
import { ReactTyped } from "react-typed";
import Reveal from "./Reveal";
import SlideIn from "./SlideIn";

export default function HeroSection() {
  return (
    <section className="heroSection">
      <div className="top-container">
        <div className="heading-container">
          <Reveal>
            <div className="heading-1">I'm Udit</div>
          </Reveal>
          <Reveal>
            <div className="heading-2">
              <ReactTyped
                strings={["Your Partner To Grow Your Brand Online"]}
                typeSpeed={40}
                backSpeed={40}
                loop
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="bottom">
        <img src={require("../assets/logo.png")} alt="logo" className="img" />
        <div className="wrapper">
          <Reveal>
            <p>
              I help businesses flourish online! I craft engaging social media
              content and manage winning strategies to amplify your brand voice
              and reach. Let's turn followers into loyal customers.
            </p>
          </Reveal>
          <div className="btn">
            <Reveal>
              <ContactNowBTN />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
