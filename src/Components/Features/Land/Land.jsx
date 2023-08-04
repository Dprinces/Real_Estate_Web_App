import React from "react";
import "./Land.css";
import { estateFeatures } from "../../../Pages/EstatePage/Data/EstateFeatures";
import Navbar from "../../Common/Header/Navbar";
import Footer from "../../Common/Footer/Footer";

export default function Land() {
  return (
    <>
      <Navbar />
      <div className="land-wrapper">
        <div className="container">
          <div className="heading">
            <h1 className="heading-main-title">FAJUYI ESTATE</h1>
            <h2 className="heading-sub-title">Eco-Friendly Land</h2>
            <p className="para-text">
              "The vast expanse of rolling green fields embraced by the golden
              rays of the sun creates <br />a breathtaking tapestry that
              celebrates the beauty and abundance of our precious land."
            </p>
            <button className="booking-btn"> Reserve a Plot</button>
          </div>
          <div className="lands-container">
            <div className="prop-details">
              <p>
                This prime piece of land offers a harmonious blend of
                tranquillity, natural beauty, and endless possibilities
              </p>
              <p className="sub-para">
                Price: N7M <br /> Type: Service Estate
              </p>
            </div>
            <div className="land-image">
              <img src="/images/land-image.png" alt="Land Image" />
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
      <Footer />
    </>
  );
}
