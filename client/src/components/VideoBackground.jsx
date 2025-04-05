import React from "react";
import "./VideoBackground.css"; // Make sure this CSS file exists and is linked

const VideoBackground = () => {
  return (
    <div className="video-container">
      <video className="video-bg" autoPlay loop muted playsInline>
        <source src="/video/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
