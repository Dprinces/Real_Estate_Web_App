import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <div className="btn-wrapper">
    <Link to="Login">
      <img
        src="/images/profile-icon.png"
        className="profile-icon"
        alt="Profile icon"
      />
      <button className="btn">My Property</button>
    </Link>
    </div>
  );
}

export default Button;
