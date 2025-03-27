import React, { useState, useEffect } from "react";
import "./Container_1.css";
import Countdown from "./Countdown";
// import Image_1 from "./assets/im_1.png";


const Container_1 = () => {
  const calculateTimeLeft = (eventDate) => {
    const now = new Date();
    const difference = eventDate - now;

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

  const hackathonDate = new Date("2025-06-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(hackathonDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(hackathonDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);


  return (

    <div className="banner" >
      <div className="header">

      </div>
      <div className="title">
        <span className="highlight">CODING CLUB </span>

        <br></br>
        <span>Organize</span><br></br>
        <span className="highlight">HACK ELITE 2025</span>
      </div>

      <p className="subtitle">Challenge your creativity, solve real-world problems, and win exciting prizes!</p>
      <div>
        {/* <h1>Hackathon </h1> */}
      </div>
      <Countdown />

      <a href="https://forms.gle/uQZYnKvNwe4Sk9jA8" target="_blank" rel="noopener noreferrer">
        <button className="register-btn">Register Now</button>
      </a>    </div>

  );
};

export default Container_1;

// git remote add origin https://github.com/Hari022002/Hack-Elite
