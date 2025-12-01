import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./videointro.css";

export default function VideoIntro() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/register");
    }, 5000); // video ita-play sekunde 5

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="video-container">
      <video autoPlay playsInline muted className="intro-video">
        <source src="/intro.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
