import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import girlimage from "../assets/images/imgtop.png";
import Girlimags from "./Girlimags"
import "../styles/MainLayout.css";
import ImagesSlide from "./ImagesSlide";
import LogoLinks from "./bottom"
import PopupModal from "./PopupModal";
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import video1 from "../assets/images/02.mp4"
import { motion } from 'framer-motion'
import banner from "../assets/images/banner.png"
// import banner from "/banner.png"

function MainLayout() {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div className="page-wrapper">
      <div className="page-content1">
        <div className="page-content2">
      <div className="hero-container">
        <div className="motiondiv">

          <motion.div
            className="absolute inset-0"
            initial={{ backgroundPositionY: "100%" }}
            animate={{ backgroundPositionY: "0%" }}
            transition={{
              duration: 8, ease: "easeOut", repeat: Infinity,
              repeatType: "loop"
            }}
            style={{
              backgroundImage: `url(${banner})`,
              
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100% 120%",
        
            }}
          />
        </div>

        <img src={logo} alt="Logo" className="logo" />
        <div className="hero-sub ">
          <div>
            <h1 className="hero-title font-hel ">
              GET YOUR <br />
              SUPER <br />
              PROMPTS
            </h1>
            <div className="hero-subtitle">
              <p className="hero-subtitle-text">
                Replace your photographer, lights and studio with AI
              </p>
            </div>
          </div>
          <div className="hero-button">
<p className="hero-button-text">
  <a
    href="https://www.instagram.com/djbildt/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Follow me on Instagram
  </a>
</p>

          </div>
        </div>
         </div>
</div>
      </div>
      <div className="threecomponents">
        <Girlimags/>
        <ImagesSlide />

        <LogoLinks />

      </div>
    </div>

  );
}

export default MainLayout;
