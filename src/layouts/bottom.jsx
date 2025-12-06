import React from "react";
import "../styles/bottom.css";
import logo from "../assets/images/logo.png";


const LogoLinks = () => {
  return (
    <div className="main-container">
      <div className="section">
            <div className="logo-section">
      
        <img src={logo} alt="Logo" className="main-logo" />
      </div>

      <div className="links-section">
        <a href="https://www.instagram.com/djbildt/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com/in/djbildt/?originalSubdomain=se" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://www.youtube.com/@djbildt" target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>
</div>
<div className="copyright">
      <p className="copyright-content">
        © All rights reserved
      </p></div>
    
    </div>
  );
};

export default LogoLinks;
