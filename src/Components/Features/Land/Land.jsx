import React from "react";
import "./Land.css";
import { estateFeatures } from "../../../Pages/EstatePage/Data/EstateFeatures";
import { estateLand } from "./Data/EstateLands";
import Navbar from "../../Common/Header/Navbar";
import Footer from "../../Common/Footer/Footer";

export default function Land() {
  return (
    <>
      <Navbar />
      <div className="container-1">
        <div className="land-container">
          <div className="land-hero"></div>
          <div className="heading-main">
            <h1 className="heading-main-title">FAJUYI ESTATE</h1>
            <h2 className="heading-sub-title">Eco-Friendly Land</h2>
            <p className="para-text">
              "The vast expanse of rolling green fields embraced by the golden
              rays of the sun creates <br />a breathtaking tapestry that
              celebrates the beauty and abundance of our precious land."
            </p>
          </div>
          <div className="listing-container">
            <div className="lands-container">
              <div className="prop-details">
                <p>
                  This prime piece of land offers a harmonious blend of
                  tranquillity, natural beauty, and endless possibilities
                </p>
                <p className="sub-para">
                  Price: N7M <br /> Type: Service Estate
                </p>
                <button className="booking-btn"> Reserve a Plot</button>
              </div>
              <div className="land-image">
                <img src="/images/land-image.png" alt="Land Image" />
              </div>
            </div>
            <div className="plots-wrapper">
              <div className="current-plots">
                {estateLand.map(({ id, img }) => (
                  <div key={id} className="plot">
                    <img src={img} alt="Available Plots of Land" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="p-wrapper">
            <div className="p-payment-title">
              <h3>Our Payment Plan</h3>
            </div>
            <div className="payment-plan-container">
              <div className="payment-plan">
                <button>Outright</button>
                <button>6 Months</button>
                <button>12 Months</button>
                <button>18 Months</button>
                <button>24 Months</button>
                <button>38 Months</button>
              </div>
            </div>
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
        </div>
      </div>
      <div class="more-info-wrapper">
        <div className="more-info-title">
          <h2>See more</h2>
        </div>
        <div className="">
          <img src="/images/eveperf-land.png" alt="Image 1" />
          <img src="/images/greenways-land.png" alt="Image 2" />
        </div>
      </div>

      <div className="resp-wrapper">
        <div className="quick-resp-btn">
          <a href="https://wa.me/08136154917" target="_blank">
            <img
              src="/icons/whatsapp.png"
              alt="whatsapp"
              className="whatsapp-icon"
            />

            <button className="resp-btn"> Quick Response</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
