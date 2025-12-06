import { useState } from "react";
import { useLocation } from "react-router-dom";
import PopupModal from "./PopupModal";
import "../styles/AllPosts.css";

export default function AllPosts() {
  const location = useLocation();
  const { media } = location.state || { media: [] };

  const [selectedMedia, setSelectedMedia] = useState(null);

  // when user clicks a post
  const handleClick = (item) => {
    setSelectedMedia(item);
  };

  const closePopup = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="allposts-wrapper">
      <h1 className="title">All Posts</h1>

      <div className="posts-grid">
        {media.map((item, i) => (
          <div className="post-card" key={i} onClick={() => handleClick(item)}>
            {item.media_type === "IMAGE" && (
              <img src={item.media_url} className="post-media" alt="post" />
            )}

            {item.media_type === "VIDEO" && (
              <video
                src={item.media_url}
                className="post-media"
                controls
                playsInline
              />
            )}


            {item.media_type === "CAROUSEL_ALBUM" && (
              <img
                src={item.children?.[0]?.media_url}
                className="post-media"
                alt="carousel"
              />
            )}
          </div>
        ))}
      </div>

      {/* POPUP when clicked */}
      {selectedMedia && (
        <PopupModal selectedMedia={selectedMedia} onClose={closePopup} />
      )}
    </div>
  );
}
