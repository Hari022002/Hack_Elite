import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Adhiyamaan College Of Engineering</h3>
          <p>Hosur, TamilNadu</p>
        </div>

        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/Ace-Hosur/pfbid029HWgGRUAhqBXTBhevXR2QHtr5ngyWqtgBjTTx57oWqBRDu2zhgS9wqQ8uea9HWZPl/?ref=ig_profile_ac" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href=" https://x.com/AceHosur" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/adhiyamaancollegeofengineering/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href=" linkedin.com/in/adhiyamaan-college-of-engineering-hosur-34841825b" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} By MCA Department.</p>
      </div>
    </footer>
  );
};

export default Footer;
