import React from "react";
import Navbar from "../../Components/Common/Header/Navbar";
import { estateFeatures } from "./Data/EstateFeatures";
import ImageSlider from "./ImageSlider";
import "./EstatePage.css";

export default function EstatePage() {
//   const estateFeatures = [
//     "Good Road",
//     "Sport Centre",
//     "Power Supply",
//     "Perimeter Fencing",
//     "Maximum Security",
//   ];

  return (
    <div>
      <Navbar />

      <main>
        <div className="headings">
          <h1 className="h1-title">Fajuyi Estate</h1>
        </div>
        <div className="location">
          <img
            src="/images/location-marker.png"
            alt="Location icon"
            style={{ width: "2.87rem", height: "2.8rem" }}
          />
          <div className="para-text">
            <p>Eksuth Road, Adebayo, Ado Ekiti.</p>
          </div>
        </div>
        <div className="wrapper">
          <div className="slides">
            <ImageSlider />
          </div>

          <div className="description">
            <p className="desc-para">
              FAJUYI is an estate beautifully designed with a blend of serenity,
              comfort, recreation & wholesome family life. It is a dynamic
              landscape where opportunities for investment and growth abound.
              The estate is located in the beautiful community of oke-baale
              along Iworoko Road, Ado, Ekiti State..
            </p>

            <button className="map-btn">View Map</button>
          </div>
        </div>

        <div className="btn-wrapper">
          <button className="booking-btn">Reserve a plot</button>
          <button className="booking-btn">Own a house</button>
        </div>

        <section className="estate-features">
          <h2>Estate Features</h2>
          <div className="estate-features-container">
            {estateFeatures.map(({ id, img, features }) => (
              <div>
                <div key={id} className="estate-feature">
                  <div className="icons">
                    <img src={img} alt="Estate Features Icons" />
                  </div>

                  <div className="icons-text">{features}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="map-wrapper">
          <div className="map">
            <img src="/images/map.png" alt="A map" />
          </div>
          <div className="quick-r-btn">
            
            <img src="/icons/whatsapp.png" alt="whatsapp" className="whatsapp-icon" />
            <button className="resp-btn"> Quick Response</button>
          </div>
        </section>
      </main>
      <footer />
    </div>
  );
}

//    <ul>
//      {estateFeatures.map((feature, index) => (
//        <li key={index}>{feature}</li>
//      ))}
//    </ul>;
