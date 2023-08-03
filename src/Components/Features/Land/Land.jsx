import React from "react";
import "./Land.css";

export default function Land() {
  return (
    <div className="container">
      <div className="heading">
        <h1 className="heading-title">FAJUYI ESTATE</h1>
        <h2>Eco-Friendly Land</h2>
        <p className="para-text">
          "The vast expanse of rolling green fields embraced by the golden rays
          of the sun creates <br />a breathtaking tapestry that celebrates the beauty
          and abundance of our precious land."
        </p>
        <button className="booking-btn"> Reserve a Plot</button>
      </div>
      <div className="lands-container">
        <p>
          This prime piece of land offers a harmonious blend of tranquillity,
          natural beauty, and endless possibilities
        </p>
        <p>
          Price: N7M Type: <br /> Service Estate
        </p>
        <div className="land-image">
            <img src="/images/land.png" alt="Land Image" />
        </div>
      </div>
    </div>
  );
}
