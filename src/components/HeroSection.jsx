import React from "react";
import ContactNowBTN from "./ContactNowBTN";
import "../css/heroSection.css";
import { ReactTyped } from "react-typed";

export default function HeroSection() {
  return (
    <section className="heroSection">
      <div className="top-container">
        <div className="heading-container">
          <div className="heading-1">I'm Udit</div>
          <div className="heading-2">
            <ReactTyped
              strings={["Your Partner To Grow Your Brand Online"]}
              typeSpeed={40}
              backSpeed={40}
              loop
            />
          </div>
        </div>
      </div>

      <div className="bottom">
        <img src={require("../assets/logo.png")} alt="logo" className="img" />
        <div className="wrapper">
          <p>
            I help businesses flourish online! I craft engaging social media
            content and manage winning strategies to amplify your brand voice
            and reach. Let's turn followers into loyal customers.
          </p>
          <div className="btn">
            <ContactNowBTN />
          </div>
        </div>
      </div>
    </section>
  );
}
