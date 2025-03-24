import React from "react";
import "./Navbar.css";
import codingclub from "./assets/coding_club_logo.png";


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo_1">
                <img src={codingclub} alt="Coding Club Logo" />
            </div>
            <div className="logo_2">
                <img src={codingclub} alt="Coding Club Logo" />
            </div>
            <div className="logo_3">
                <img src={codingclub} alt="Coding Club Logo" />
            </div>
            <div className="logo_4">
                <img src={codingclub} alt="Coding Club Logo" />
            </div>

        </nav>
    );
};

export default Navbar;
