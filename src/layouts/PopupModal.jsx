import React, { useState } from "react";
import "../styles/PopupModal.css";

export default function PopupModal({ onClose, selectedMedia }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");

  // 1️⃣ Check if mediaId exists
  const mediaId = selectedMedia?.id || selectedMedia?.mediaId; // depends on your data
  console.log("Media ID being sent:", mediaId);

  if (!mediaId) {
    setMessage("Media ID is missing. Cannot subscribe.");
    setLoading(false);
    return;
  }

  try {
    const response = await fetch("https://bteam11.com/api/auth/subscribe", {
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
  } catch (error) {
    console.error(error);
    setMessage("Something went wrong. Try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="popup-overlay">
      <div className="popup-container">
        {/* CLOSE BUTTON */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* LEFT SIDE */}
        <div className="popup-left">
          <div className="popup-left-text">
            <h1 className="popup-title">Want Exclusive Updates?</h1>
            <p className="popup-text">
              Drop your email and get access to our latest posts, insights, and creative
              drops — straight to your inbox.
            </p>
          </div>

          <form className="popup-form" onSubmit={handleSubmit}>
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

        {/* RIGHT SIDE IMAGE / VIDEO / CAROUSEL */}
        <div className="popup-right">
          {/* IMAGE & CAROUSEL FIRST IMAGE */}
          {(selectedMedia.media_type === "IMAGE" ||
            selectedMedia.media_type === "CAROUSEL_ALBUM") && (
            <img
              src={selectedMedia.children?.[0]?.media_url || selectedMedia.media_url}
              alt="clicked"
            />
          )}

          {/* VIDEO */}
          {selectedMedia.media_type === "VIDEO" && (
            <video src={selectedMedia.media_url} autoPlay controls />
          )}
        </div>
      </div>
    </div>
  );
}
