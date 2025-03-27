import React from "react";
import "./Container_5.css";
import codingclub from "./assets/im_4.png";

const Container_5 = () => {
  return (
    <div className="track-container">
      <div className="header">
        <img src={codingclub} alt="Coding Club Logo" className="logo" />
        <h2>HackElite 2025 - Blockchain & Web 3.0</h2>
      </div>

      <div className="tracks">
        <div className="problem-card">
          <h3>Decentralized Voting System</h3>
          <p>
          Develop a secure and transparent blockchain-based voting platform to prevent fraud and ensure voter anonymity while maintaining transparency in election results.          </p>
        </div>

        <div className="problem-card">
          <h3>Digital Identity Verification</h3>
          <p>
          Create a blockchain-based system for secure identity verification that allows users to control and share their personal data with service providers without compromising privacy.
          </p>
        </div>

        <div className="problem-card">
          <h3>Supply Chain Transparency</h3>
          <p>
          Build a blockchain solution to track the movement of goods in a supply chain, ensuring authenticity, reducing fraud, and improving accountability.
          </p>
        </div>

        <div className="problem-card">
          <h3>Open Innovation</h3>
          <p>
          Participants are free to propose and develop any blockchain or Web 3.0 solution that enhances security, transparency, or decentralization in real-world applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container_5;
