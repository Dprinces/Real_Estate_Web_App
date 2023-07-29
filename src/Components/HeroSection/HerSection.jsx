import React from "react";
import Stats from "../Stats/Stats";
import "./HeroSection.css";

export default function HerSection() {
  return (
    <>
      <div className="hero-container">
        <div className="content-wrapper">
          <h1 className="hero-title">
            Why rent?
            <br />
            When you can own.
          </h1>
          <p class="hero-text">
            Owning a home is not just about four walls, <br /> it's about
            building memories.
          </p>
          <div className="search-bar">
            <input type="text" placeholder="You are one search away..." />
            <button className="search-button">SEARCH</button>
          </div>
        </div>
      </div>

      <Stats />
    </>
  );
}

