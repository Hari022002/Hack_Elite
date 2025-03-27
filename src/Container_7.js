import React from "react";
import "./Container_7.css";
import codingclub from "./assets/im_2.png";

const Container_7 = () => {
  return (
    <div className="track-container">
      <div className="header">
        <img src={codingclub} alt="Coding Club Logo" className="logo" />
        <h2>HackElite 2025 - Accessibility & Assistive Tech</h2>
      </div>

      <div className="tracks">
        <div className="problem-card">
          <h3>Voice-Controlled Code Editor for Blind Programmers</h3>
          <p>
          Develop a code editor that allows blind programmers to write, compile, and debug code using voice commands and provides audio feedback for errors and outputs.</p>
        </div>

        <div className="problem-card">
          <h3>AI-Powered Sign Language Translator</h3>
          <p>
          Create an app that translates sign language into text or speech in real-time to improve communication for hearing-impaired individuals.
          </p>
        </div>

        <div className="problem-card">
          <h3>Navigation App for Visually Impaired</h3>
          <p>
          Develop an AI and GPS-based app that provides real-time audio navigation, obstacle detection, and route suggestions for visually impaired users.
          </p>
        </div>

        <div className="problem-card">
          <h3>Open Innovation</h3>
          <p>
          Participants are free to propose and develop any assistive technology solution that enhances accessibility and inclusiveness for individuals with disabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container_7;
