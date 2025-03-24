import React, { useState, useEffect } from "react";
import "./Countdown.css";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="countdown-box">
          <span className="countdown-number">{timeLeft[interval]}</span>
          <span className="countdown-label">{interval}</span>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 24); // Set countdown target date (e.g., 12 days from now)

  return (
    <div className="app-container">
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export default App;