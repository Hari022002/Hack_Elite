import React from "react";
import "./Container_3.css";
// import codingclub from "./assets/coding_club_logo.png";
import Image_1 from "./assets/im_1.png";

const Container_3 = () => {
  return (
    <div className="track-container">
      <div className="header">
        <img src={Image_1} alt="image_1" className="logo" />
        <h2>HackElite 2025 - Web & Mobile Applications</h2>
      </div>

      <div className="tracks">
        <div className="problem-card">
          <h3>Telemedicine Platform for Rural Areas</h3>
          <p>
            Develop a secure telemedicine app that allows rural patients to
            consult doctors remotely, share medical records, and receive
            prescriptions with multilingual support and offline mode.
          </p>
        </div>

        <div className="problem-card">
          <h3>Job Matching Platform for Skilled Workers</h3>
          <p>
            Build an app that matches skilled workers with job opportunities
            based on location, skill level, and availability, with a rating and
            review system.
          </p>
        </div>

        <div className="problem-card">
          <h3>Disaster Management & Emergency Response App</h3>
          <p>
            Create an app that provides real-time disaster alerts, allows people
            to mark themselves as safe, and facilitates communication between
            rescue teams and affected individuals.
          </p>
        </div>

        <div className="problem-card">
          <h3>Open Innovation</h3>
          <p>
            Participants are free to propose and develop any innovative solution
            that addresses a real-world problem, focusing on creativity,
            technical implementation, and social impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container_3;
