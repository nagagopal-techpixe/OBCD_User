import React, { useState, useEffect } from "react";
import "../styles/PopupModal.css";

export default function PopupModal() {
  const [matchedMedia, setMatchedMedia] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(true);

  // Fetch matched media from backend
  useEffect(() => {
    fetch("https://bteam11.com/api/auth/instagram/comments")
      .then((res) => res.json())
      .then((data) => setMatchedMedia(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = async (e, mediaId) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
 const response = await fetch("https://bteam11.com/auth/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        mediaId, // send mediaId instead of media_url
      }),
    });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Subscribed successfully!");
        setEmail("");
      } else {
        setMessage(data.message || "Subscription failed!");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* Close Button */}
        <button className="close-btn" onClick={() => setShowPopup(false)}>✕</button>

        {/* Left side: Form */}
        <div className="popup-left">
          <div className="popup-left-text">
            <h1 className="popup-title">Want Exclusive Updates?</h1>
            <p className="popup-text">
              Drop your email and get access to our latest posts, insights,
              and creative drops — straight to your inbox.
            </p>
          </div>

        <form className="popup-form" onSubmit={(e) => handleSubmit(e, matchedMedia[0]?.mediaId)}>

            <input
              type="email"
              placeholder="Enter Email*"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="SubmitPOP" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
          {message && <p style={{ marginTop: "10px" }}>{message}</p>}
        </div>

        {/* Right side: Show all media from backend */}
        <div className="popup-right" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {matchedMedia.map((media) => (
            <div key={media.mediaId} style={{ flex: "1 1 200px" }}>
              {/* IMAGE */}
              {media.image && <img src={media.image} alt="media" style={{ width: "100%" }} />}
              {/* VIDEO */}
              {media.video && <video src={media.video} autoPlay controls style={{ width: "100%" }} />}
              {/* <p>{media.caption}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
