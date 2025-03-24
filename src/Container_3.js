import React from "react";
import "./Container_3.css";

const Track1 = () => {
  const problems = [
    {
      title: "Telemedicine Platform for Rural Areas",
      description:
        "Develop a secure telemedicine app that allows rural patients to consult doctors remotely, share medical records, and receive prescriptions with multilingual support and offline mode."
    },
    {
      title: "Job Matching Platform for Skilled Workers",
      description:
        "Build an app that matches skilled workers with job opportunities based on location, skill level, and availability, with a rating and review system."
    },
    {
      title: "Disaster Management & Emergency Response App",
      description:
        "Create an app that provides real-time disaster alerts, allows people to mark themselves as safe, and facilitates communication between rescue teams and affected individuals."
    },
    {
      title: "Open Innovation",
      description:
        "Participants are free to propose and develop any innovative solution that addresses a real-world problem, focusing on creativity, technical implementation, and social impact."
    }
  ];

  return (
    <div>
      <h2>Track1: Web & Mobile Applications</h2>
      <ul>
        {problems.map((problem, index) => (
          <li key={index}>
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Track1;
