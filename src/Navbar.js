import React from "react";
import "./Navbar.css";
import codingclub from "./assets/coding_club_logo.png";
import adhiyamaan from "./assets/adhiyamaan.png";
import nba from "./assets/nba.png";
import naac from "./assets/naac.webp";
import young from "./assets/young.png";
import inc from "./assets/inc.png";
import aicte from "./assets/aicte.webp";


const Navbar = () => {
    return (
        <nav className="navbar">
             <div className="logo_1">
                <img src={adhiyamaan} alt="Coding Club Logo" />
            </div>
            <div className="logo_1">
                <img src={codingclub} alt="Coding Club Logo" />
            </div>
           
            <div className="logo_1">
                <img src={nba} alt="Coding Club Logo" />
            </div>
            <div className="logo_1">
                <img src={young} alt="Coding Club Logo" />
            </div>
            <div className="logo_1">
                <img src={aicte} alt="Coding Club Logo" />
            </div>
            <div className="logo_1">
                <img src={naac} alt="Coding Club Logo" />
            </div>
            <div className="logo_1">
                <img src={inc} alt="Coding Club Logo" />
            </div>
            
        </nav>
    );
};

export default Navbar;
