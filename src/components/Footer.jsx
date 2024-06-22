import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="left">
          <span>© 2024 Social Bee • All Rights Reserved</span>
        </div>
        <div className="middle">
          <span>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <a href="mailto:beesocialwithudit@gmail.com">
              beesocialwithudit@gmail.com
            </a>
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <a href="tel:+918840234936">+91 8840234936</a>
          </span>
        </div>
        <div className="right">
          <a
            href="https://www.instagram.com/socialbeewithudit?igsh=Nmk2em94Zjd1dmti"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a
            href="https://www.facebook.com/socialbeewithudit?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
