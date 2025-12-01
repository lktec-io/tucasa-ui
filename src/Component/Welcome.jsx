import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import logo from "./pcm.png"; // replace with your logo image

export default function Welcome() {
  const navigate = useNavigate();

  return (
    
    <div className="welcome-page">
         <div className="top-title">TUCASA TIA MBEYA
         </div>
        <img src={logo} alt="Zoom Workplace" className="welcome-logo" />
      <div className="welcome-card"> 
        <h2 className="welcome-title">Welcome</h2> 
        <p className="welcome-subtitle">Get started with Tucasa tia!</p>
        <div className="welcome-buttons">
          <button className="join-btn" onClick={() => navigate("/intro")}>
            Register  here!
          </button>
          <button className="plain-btn" onClick={() => navigate("/intro")}>Sign up</button>
        </div>
      </div>
      <div className="welcome-settings">
        <span className="gear-icon">⚙️</span>
      </div>
       <div className="bgi-animation">
        <img src="./gether.jpg" alt="bg1" />
        <img src="./tucasa.jpg" alt="bg2" />
        <img src="./pendo.jpg" alt="bg1" />
      </div>
    </div>
    
  );
}
