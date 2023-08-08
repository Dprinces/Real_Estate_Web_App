import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";

export default function Features() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-one">
          <p className="primary">
            Our primary goal is to facilitate your journey towards becoming one
            of our highly satisfied owners, with minimal stress and hassle.
          </p>
        </div>
        <div className="grid-two">
          <Link to="/fajuyiLand">
            <img src="/images/Land.png" alt="Land pics" />
          </Link>
        </div>
        <div className="grid-three">
          <Link to="/fajuyiHouse">
            <img src="/images/House.png" alt="House pics" />
          </Link>
        </div>
      </div>
    </>
  );
}
