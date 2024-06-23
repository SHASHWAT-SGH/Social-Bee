import React, { useEffect, useState } from "react";
import "../css/countdown.css";

function CountDown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025/12/25 00:00:00");
    const currentDate = new Date();
    const diff = (targetDate - currentDate) / 1000;

    const timeLeft = {
      days: Math.floor(diff / (24 * 60 * 60)),
      hours: Math.floor((diff % (24 * 60 * 60)) / (60 * 60)),
      minutes: Math.floor((diff % (60 * 60)) / 60),
      seconds: Math.floor(diff % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <ul id="countdown">
      {/* <li id="days">
        <div className="number">
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <div className="label">Days</div>
      </li> */}
      <li id="hours">
        <div className="number">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className="label">HR.</div>
      </li>
      <li id="minutes">
        <div className="number">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className="label">Min.</div>
      </li>
      <li id="seconds">
        <div className="number">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className="label">Sec</div>
      </li>
    </ul>
  );
}

export default CountDown;
