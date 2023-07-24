import React from "react";
import "./HeroSection.css";

export default function HerSection() {
  return (
    <div className="hero-container">
      <div className="content-wrapper">
        <h1 className="hero-title">
          Why rent?<br />When you can own.
        </h1>
        <button className="cta-button">EXPLORE</button>
      </div>
    </div>
  );
}
