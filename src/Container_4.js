import React from "react";
import "./Container_4.css";
import codingclub from "./assets/im_5.png";

const Container_3 = () => {
  return (
    <div className="track-container">
      <div className="header">
        <img src={codingclub} alt="Coding Club Logo" className="logo" />
        <h2>HackElite 2025 - AI & Data Science</h2>
      </div>

      <div className="tracks">
        <div className="problem-card">
          <h3>Healthcare Diagnosis Prediction</h3>
          <p>
          Develop an AI model that predicts diseases like diabetes, heart disease, or cancer based on patient health records and lifestyle data, providing early warnings and recommendations.
          </p>
        </div>

        <div className="problem-card">
          <h3>Fraud Detection in Financial Transactions</h3>
          <p>
          Create a machine learning model to detect and prevent fraudulent activities in real-time by analyzing transaction patterns and user behavior.
          </p>
        </div>

        <div className="problem-card">
          <h3>Personalized Learning Platform</h3>
          <p>
          Build an AI-driven platform that analyzes students' learning patterns and provides personalized study plans and recommendations to improve learning outcomes.
          </p>
        </div>

        <div className="problem-card">
          <h3>Open Innovation</h3>
          <p>
          Participants are free to propose and develop any AI or data science solution that addresses a real-world challenge, focusing on creativity, data accuracy, and model performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container_3;
