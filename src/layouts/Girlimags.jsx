import React, { useEffect, useRef, useState } from "react";
import "../styles/Girlimags.css";
import imgLeft from "../assets/images/imgleft.png";
import imgRight from "../assets/images/imgtop.png";
import imgMiddle from "../assets/images/imgright.png";

function Girlimags() {
  const [showImages, setShowImages] = useState(false);
  const triggerRef = useRef(null);
  const scrolledToGallery = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !scrolledToGallery.current) {
          scrolledToGallery.current = true;
          setShowImages(true);

        }
      },
      { threshold: 0.3 }
    );

    if (triggerRef.current) observer.observe(triggerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery-scroll-wrapper" ref={triggerRef}>
      <div className="gallery-container">

        <img
          className={`side-card left-card ${showImages ? "show" : ""}`}
          src={imgLeft}
          alt="left"
        />

        <div className="center-card">
          <img
            className={`${showImages ? "show" : ""}`}
            src={imgRight}
            alt="center"
          />
        </div>

        <img
          className={`side-card right-card ${showImages ? "show" : ""}`}
          src={imgMiddle}
          alt="right"
        />

      </div>
    </div>
  );
}

export default Girlimags;
