import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button() {
  return (
    <Link to="signup">
      <button className="btn">My Property</button>
    </Link>
  );
}

export default Button;
