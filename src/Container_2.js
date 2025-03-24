import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Container_2.css";

function Container_2() {
  return (
    <div className="section">
      <div className="date">
        <FaCalendarAlt className="icon" />
        <span>April 23, 2025</span>
      </div>
      <div className="address">
        <FaMapMarkerAlt className="icon" />
        <span>Adhiyamaan College Of Engineering, Hosur, TamilNadu</span>
      </div>
    </div>
  );
}

export default Container_2;
