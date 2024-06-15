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

      <div className="bottom-container">
        <div className="left-container">
          <div className="text-wrapper">
            <p>
              I help businesses flourish online! I craft engaging social media
              content and manage winning strategies to amplify your brand voice
              and reach. Let's turn followers into loyal customers.
            </p>
          </div>
          <ContactNowBTN />
        </div>
        <div className="right-container">
          <div className="logo-container">
            <img src={require("../assets/elements/1.png")} alt="logo" />
          </div>
          <div className="badge-container">
            <img src={require("../assets/elements/4.png")} alt="logo" />
          </div>
          <div className="elem1-container">
            <img src={require("../assets/elements/3.png")} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
