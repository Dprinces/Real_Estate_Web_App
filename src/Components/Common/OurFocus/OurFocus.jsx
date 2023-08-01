import React from "react";
import "./OurFocus.css";

export default function OurFocus() {
  return (
    <div className="icon-container">
      <div className="icon">
        <img
          src="/icons/handshake.png"
          alt="handshake icon"
          className="handshake-icon"
        />
        <div className="text">INTEGRITY</div>
      </div>

      <div className="icon">
        <img
          src="/icons/teamwork.png"
          alt="Teamwork icon"
          className="teamwork-icon"
        />
        <div className="text">TEAMWORK</div>
      </div>

      <div className="icon">
        <img src="/icons/Avatar.png" alt="Avatar" className="avatar-icon" />
        <div className="text">
          CUSTOMER <br /> FOCUS
        </div>
      </div>

      <div className="icon">
        <img src="/icons/cions.png" alt="Coins" className="coins-icon" />{" "}
        <div className="text">AFFORDABILITY</div>
      </div>

      <div className="icon">
        <img
          src="/icons/people-carry.png"
          alt="Two people holding something"
          className="people-icon"
        />
        <div className="text">RESPONSIBILITY</div>
      </div>
    </div>
  );
}
