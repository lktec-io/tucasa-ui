import { useState } from "react";
import "./Home.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        {/* Left side: Logo + Name */}
        <div className="logo">
          <img src="pcm.png" alt="" className="logo-img" />
          <span>TUCASA TIA - PCM</span>
        </div>

        {/* Right side: Menu */}
        <div className={`menu ${isOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#register">Register</a>
          <a href="#news">News & Gallery</a>
          <a href="#articles">Articles</a>
          <a href="#about">About Us</a>
          <a href="#donate" className="donate">Donate</a>
        </div>

        {/* Hamburger menu (mobile) */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Welcome to TUCASA TIA - PCM</h1>
          <p>We are one in the family of God!</p>
          <a href="#register" className="btn">Join Us</a>
        </div>
      </section>
    </div>
  );
}

export default App;
