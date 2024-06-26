import React from "react";
import redirectToWhatsApp from "../helper/redirectToWhatsapp";

export default function ContactNowBTN() {
  return (
    <div
      style={{
        width: "17rem",
        overflow: "hidden",
      }}
      className="contact-now-hero-section"
    >
      <img
        src={require("../assets/elements/2.png")}
        alt="btn"
        className="hero-section-btn"
        style={{
          width: "100%",
          borderRadius: "3rem",
        }}
        onClick={redirectToWhatsApp}
      />
    </div>
  );
}
