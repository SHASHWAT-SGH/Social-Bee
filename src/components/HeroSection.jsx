import React from "react";
import ContactNowBTN from "./ContactNowBTN";
import "../css/heroSection.css";

export default function HeroSection() {
  return (
    <section className="heroSection">
      <div className="top-container">
        <div className="heading-container">
          <div className="heading-1">I'm Udit</div>
          <div className="heading-2">
            Your Partner To Grow Your Brand Online
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
