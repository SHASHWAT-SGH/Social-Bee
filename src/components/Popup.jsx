import React, { useCallback, useEffect, useState } from "react";
import "../css/popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import redirectToWhatsapp from "../helper/redirectToWhatsapp";
import CountDown from "./CountDown";

function Popup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0 && !isVisible) {
      setIsClosing(false);
      setTimeout(() => {
        setIsVisible(true);
      }, 1200);
    }
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, handleScroll]);

  useEffect(() => {
    const tm = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      clearTimeout(tm);
    };
  }, []);

  return (
    isVisible && (
      <div className={`popup-container ${isClosing ? "closing" : ""}`}>
        <FontAwesomeIcon
          icon={faXmark}
          className="icon"
          onClick={() => {
            setIsClosing(true);
            setTimeout(() => {
              setIsVisible(false);
            }, 2000);
          }}
        />
        <div className="left">
          <img src={require("../assets/Bee-03.png")} alt="" className="img" />
        </div>
        <div className="right">
          <span className="heading">Book Your Free consultaion now</span>
          <div className="timer-container">
            <div className="tag">⚡️ Offer ends in</div>
            <div className="wrapper">
              <CountDown />
            </div>
          </div>
          <div className="price">
            <span className="new">₹0</span>
            <span className="old">₹299</span>
          </div>
          <button className="book-now" onClick={redirectToWhatsapp}>
            Book Now
          </button>
        </div>
      </div>
    )
  );
}

export default Popup;
