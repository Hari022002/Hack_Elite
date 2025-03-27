import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      id="particles-js"
      options={{
        background: {
          color: "#0a0f1a",
        },
        particles: {
          number: {
            value: 100,
            density: { enable: true, value_area: 1000 },
          },
          color: { value: "#36ff69" },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            random: true,
          },
          size: {
            value: 3,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesBackground;
