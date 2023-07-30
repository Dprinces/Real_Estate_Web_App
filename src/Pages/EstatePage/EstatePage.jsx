import React from 'react';
import Navbar from '../../Components/Common/Header/Navbar';
import ImageSlider from './ImageSlider';
import "./EstatePage.css";

export default function EstatePage() {

  const estateFeatures = [
    'Good Road',
    'Sport Centre',
    'Power Supply',
    'Perimeter Fencing',
    'Maximum Security',
  ];

  return (
    <div>
      <Navbar />

      <main>
        <div className="heading">
          <h1>Fajuyi Estate</h1>
        </div>
        <div className="location">
          <img
            src="/images/location-marker.png"
            alt="Location icon"
            style={{ width: "3.125rem", height: "3.125rem" }}
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
            <p>
              FAJUYI is an estate beautifully designed with a blend of serenity,
              comfort, recreation & wholesome family life. It is a dynamic
              landscape where opportunities for investment and growth abound.
              The estate is located in the beautiful community of oke-baale
              along Iworoko Road, Ado, Ekiti State..
            </p>

            <button>View Map</button>
          </div>
        </div>

        <div className="buttons">
          <button>Reserve a plot</button>
          <button>Own a house</button>
        </div>

        <section className="estate-features">
          <h2>Estate Features</h2>
          <ul>
            {estateFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="map">
          <button>Quick Response</button>
        </section>
      </main>
      <footer />
    </div>
  );
};
