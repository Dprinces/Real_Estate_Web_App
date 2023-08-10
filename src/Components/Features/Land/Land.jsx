import React, {useState} from "react";
import "./Land.css";
import { estateFeatures } from "../../../Pages/EstatePage/Data/EstateFeatures";
import { Link as ScrollLink } from "react-scroll";
import { estateLand } from "./Data/EstateLands";
import Navbar from "../../Common/Header/Navbar";
import Footer from "../../Common/Footer/Footer";

export default function Land() {

  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    tel: "",
    noofplots: "",
    paymentplans: "",
    preferredContactMethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      Name: "",
      email: "",
      tel: "",
      noofplots: "",
      paymentplans: "",
      preferredContactMethod: "",
    });
    // Display styled alert pop-up
    const alertContainer = document.createElement("div");
    alertContainer.classList.add("alert");

    const alertMessage = document.createElement("p");
    alertMessage.classList.add("alert-message");
    alertMessage.textContent = "Form submitted successfully. Kindly proceed to fill the schedule inspection form!";

    const closeButton = document.createElement("button");
    closeButton.classList.add("alert-button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
      document.body.removeChild(alertContainer);
    });

    alertContainer.appendChild(alertMessage);
    alertContainer.appendChild(closeButton);
    document.body.appendChild(alertContainer);
  };

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

                <ScrollLink
                  activeClass="active"
                  to="targetSection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <button className="booking-btn-one">
                    {" "}
                    Make a Reservation
                  </button>
                </ScrollLink>
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
          <div className="est-wrapper">
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
      </div>
      <div class="more-info-wrapper">
        <div className="more-info-title">
          <h2>View More</h2>
        </div>
        <div className="two-lands">
          <img src="/images/eveperf-land.png" alt="Image 1" />
          <img src="/images/greenways-land.png" alt="Image 2" />
        </div>
      </div>
      <div className="prefer-wrapper" id="targetSection">
        <div className="form-container">
          <div className="text-left">
            <div>
              Let's Help you <br />
              Priotize your <br />
              preferences
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />

            <label>Tel.</label>
            <input
              type="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />

            <label>No. of Plots</label>
            <select
              name="noofplots"
              value={formData.noofplots}
              onChange={handleChange}
              required
              className="select-one"
            >
              <option value="" disabled>
                Select the number of plots
              </option>
              <option value="house">1</option>
              <option value="apartment">2</option>
              <option value="condo">3</option>
            </select>

            <label>Payment Plans</label>
            <select
              name="paymentplans"
              value={formData.paymentplans}
              onChange={handleChange}
              required
              className="select-one"
            >
              <option value="" disabled>
                Select the payment plan
              </option>
              <option value="house">Outright</option>
              <option value="apartment">6 Months</option>
              <option value="condo">12 Months</option>
              <option value="condo">18 Months</option>
              <option value="condo">24 Months</option>
              <option value="condo">38 Months</option>
            </select>

            <label>Select a Preferred Contact Method</label>
            <select
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
              className="select-one"
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>
            <button type="submit" className="btn-prefer">
              Submit
            </button>
          </form>
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
