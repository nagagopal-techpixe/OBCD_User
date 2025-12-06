import React, { useState, useEffect } from "react";
import "../styles/ImagesSlide.css";
import PopupModal from "./PopupModal";
import { useNavigate } from "react-router-dom";

export default function ImagesSlide() {
  const [media, setMedia] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMedia() {
      try {
        const res = await fetch("https://bteam11.com/api/auth/media/");
        const data = await res.json();
        setMedia(data);
      } catch (err) {
        console.log("Frontend fetch error:", err);
      }
    }

    loadMedia();
  }, []);

  return (
    <>
      <div className="imageslide-wrapper">
        <div className="imageslide">
          <div className="section-title">
            <p className="section-title-p font-bold">MORE PROMPT LIBRARIES</p>
          </div>

          <div className="scroll-container">
            <div
              className={`scroll-content ${
                selectedMedia ? "stop-scroll" : ""
              }`}
            >
              {media.map((item, i) => (
                <div key={i} onClick={() => setSelectedMedia(item)}>
                  {/* IMAGE */}
                  {item.media_type === "IMAGE" && (
                    <img
                      src={item.media_url}
                      className="scroll-img"
                      alt="img"
                    />
                  )}

                  {/* VIDEO */}
                  {item.media_type === "VIDEO" && (
                    <video
                      className="scroll-img"
                      src={item.media_url}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <p
            className="view-btn"
            onClick={() => navigate("/all-posts", { state: { media } })}
          >
            View All Posts
          </p>
        </div>

        {selectedMedia && (
          <PopupModal
            selectedMedia={selectedMedia}
            onClose={() => setSelectedMedia(null)}
          />
        )}
      </div>
    </>
  );
}
