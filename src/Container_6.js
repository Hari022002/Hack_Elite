import React from "react";
import "./Container_6.css";
import codingclub from "./assets/im_3.png";

const Container_6 = () => {
  return (
    <div className="track-container">
      <div className="header">
        <img src={codingclub} alt="Coding Club Logo" className="logo" />
        <h2>HackElite 2025 - IoT & Smart Devices</h2>
      </div>

      <div className="tracks">
        <div className="problem-card">
          <h3>Smart Agriculture Monitoring System</h3>
          <p>
          Develop an IoT-based solution to monitor soil moisture, weather conditions, and crop health, providing real-time insights and automated irrigation control.          </p>
        </div>

        <div className="problem-card">
          <h3>Health Monitoring Wearable</h3>
          <p>
          Create a smart wearable device that tracks vital signs (heart rate, temperature, blood pressure) and alerts users and healthcare providers in case of anomalies.
          </p>
        </div>

        <div className="problem-card">
          <h3>Smart Home Automation</h3>
          <p>
          Design an IoT-based home automation system that allows users to control lighting, temperature, and security remotely using a mobile app and voice commands.
          </p>
        </div>

        <div className="problem-card">
          <h3>Open Innovation</h3>
          <p>
          Participants are free to propose and develop any IoT-based solution that enhances automation, real-time monitoring, or smart decision-making in daily life or industrial settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container_6;
