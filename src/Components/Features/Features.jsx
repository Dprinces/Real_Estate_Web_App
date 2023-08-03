import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";

export default function Features() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-one">
          <p>
            Our major aim is to provide you an affordable properties without
            having to break the bank.
          </p>
        </div>
        <div className="grid-two">
          <Link to="/land">
            <img src="/images/Land.png" alt="Land pics" />
          </Link>
        </div>
        <div className="grid-three">
          <Link to='/house'>
          <img src="/images/House.png" alt="House pics" />
          </Link>
        </div>
      </div>
    </>
  );
}
