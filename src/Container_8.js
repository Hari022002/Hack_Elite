import React from "react";
import "./Container_8.css";
import { FaMedal, FaUsers, FaTrophy } from "react-icons/fa"; // Install react-icons if needed

const WhyJoin = () => {
  return (
    <section className="why-join-section">
      <h2 className="why-join-title">
        WHY <span>/ JOIN?</span>
      </h2>

      <div className="cards-container">
        {/* Card 1 */}
        <div className="card">
          <FaMedal className="card-icon" />
          <h3 className="card-title">DIVINE PRIZES</h3>
          <p className="card-description">
            Win the biggest and most exclusive prizes ever!
          </p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <FaUsers className="card-icon" />
          <h3 className="card-title">COMMUNITY PARTY</h3>
          <p className="card-description">
            Meet the most fun, skilled, and interactive hacking community. Become one of us and have fun while learning!
          </p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <FaTrophy className="card-icon" />
          <h3 className="card-title">BE THE CHAMPION</h3>
          <p className="card-description">
            Are you ready to achieve eternal glory? Push, burn through your battles, and dominate the scoreboard!
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
