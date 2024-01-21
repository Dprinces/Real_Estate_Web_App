import React, { useState } from "react";
import Navbar from "../../Common/Header/Navbar";
import Footer from "../../Common/Footer/Footer";
import { estateFeatures } from "../../../Pages/EstatePage/Data/EstateFeatures";
import "./House.css";

export default function House() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    tel: "",
    numberOfPlot: "",
    paymentPlans: "",
    SelectAPreferContactMethod: "",
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
    const confirmation = window.confirm("Are you sure you want to submit?");
    if (confirmation) {
      console.log(formData);
    } else {
      console.log("Submission canceled.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="house-container">
        <div className="house-wrapper">
          <h1 className="house-title">
            Your New <br /> House Address
          </h1>
          <p className="hero-text">
            The perfect destination to live in harmony, a haven of tranquility
            set within a picturesque lush landscape. Welcome to nature's
            pride... <br />
            Welcome to Fajuyi Estate.
          </p>
        </div>
      </div>
      <div className="est-wrapper">
        <section className="estate-features">
          <h2>Estate Features</h2>
          <div className="estate-features-container">
            {estateFeatures.map(({ id, img, features }) => (
              <div key={id} className="estate-feature">
                <div className="icons">
                  <img src={img} alt="Estate Features Icons" />
                </div>
                <div className="icons-text">{features}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="bedroom-ter-wrapper">
        <div>
          <img
            src="../../../../images/HouseDes1.png"
            className="bedroom-building"
            alt="A duplex"
          />
        </div>

        <div className="description1">
          <div className="flex-">
            <div className="description-heading">
              <h1> 4 Bedroom Terrace</h1>
            </div>
            <div>
              <h2>
                Price: N80M <br /> Type: Service Estate
              </h2>
            </div>
          </div>

          <ul>
            <li>
              <input
                type="checkbox"
                id="check"
                name="feature"
                value="Fitted Kitchen cabinets and counter tops, refrigerator, cooker, hob, and microwave"
              />
              <label htmlFor="kitchen">
                Fitted Kitchen cabinets and counter tops, refrigerator, cooker,
                hob, and microwave
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="balconies"
                name="feature"
                value="Balconies wherever applicable as per unit plan"
                class="custom-checkbox"
              />
              <label for="balconies">
                Balconies wherever applicable as per unit plan
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="wardrobes"
                name="feature"
                value="Wardrobes in the bedroom"
                class="custom-checkbox"
              />
              <label for="wardrobes">Wardrobes in the bedroom</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="bathrooms"
                name="feature"
                value="Fully tiled bathrooms ensuite and guest toilet"
              />
              <label for="bathrooms">
                Fully tiled bathrooms ensuite and guest toilet
              </label>
            </li>

            <li>
              <input
                type="checkbox"
                id="shaver"
                name="feature"
                value="Electrical shaver point with mirror in bathroom"
              />
              <label for="shaver" class="custom-checkbox-label">
                Electrical shaver point with mirror in bathroom
              </label>
            </li>

            <li>
              <input
                type="checkbox"
                id="heater"
                name="feature"
                value="Water Heater"
              />
              <label for="heater">Water Heater</label>
            </li>

            <li>
              <input
                type="checkbox"
                id="windows"
                name="feature"
                value="Tall windows"
              />
              <label for="windows">Tall windows</label>
            </li>
          </ul>
        </div>
      </div>

      <section className="bedroom-display">
        <div>
          <img src="../../../../images/Bedroom1.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom2.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom3.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom4.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom5.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom6.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom7.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom8.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom9.png" alt="Location icon" />
        </div>
      </section>

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

      <div className="bedroom-ter-wrapper">
        <div>
          <img src="../../../../images/HouseDes2.png" alt="Location icon" />
        </div>

        <div className="description1">
          <div className="flex-">
            <div className="description-heading">
              <h1> 3 Bedroom Terrace</h1>
            </div>
            <div>
              <h2>
                Price: N80M <br /> Type: Service Estate
              </h2>
            </div>
          </div>

          <ul>
            <li>
              <input
                type="checkbox"
                id="check"
                name="feature"
                value="Fitted Kitchen cabinets and counter tops, refrigerator, cooker, hob, and microwave"
              />
              <label htmlFor="kitchen">
                Fitted Kitchen cabinets and counter tops, refrigerator, cooker,
                hob, and microwave
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="balconies"
                name="feature"
                value="Balconies wherever applicable as per unit plan"
                class="custom-checkbox"
              />
              <label for="balconies">
                Balconies wherever applicable as per unit plan
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="wardrobes"
                name="feature"
                value="Wardrobes in the bedroom"
                class="custom-checkbox"
              />
              <label for="wardrobes">Wardrobes in the bedroom</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="bathrooms"
                name="feature"
                value="Fully tiled bathrooms ensuite and guest toilet"
              />
              <label for="bathrooms">
                Fully tiled bathrooms ensuite and guest toilet
              </label>
            </li>

            <li>
              <input
                type="checkbox"
                id="shaver"
                name="feature"
                value="Electrical shaver point with mirror in bathroom"
              />
              <label for="shaver" class="custom-checkbox-label">
                Electrical shaver point with mirror in bathroom
              </label>
            </li>

            <li>
              <input
                type="checkbox"
                id="heater"
                name="feature"
                value="Water Heater"
              />
              <label for="heater">Water Heater</label>
            </li>

            <li>
              <input
                type="checkbox"
                id="windows"
                name="feature"
                value="Tall windows"
              />
              <label for="windows">Tall windows</label>
            </li>
          </ul>
        </div>
      </div>

      <section className="bedroom-display">
        <div>
          <img src="../../../../images/Bedroom10.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom11.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom12.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/bedroom13.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom14.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom15.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom16.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom17.png" alt="Location icon" />
        </div>
        <div>
          <img src="../../../../images/Bedroom18.png" alt="Location icon" />
        </div>
      </section>
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

      <section className="prefer-wrapper">
        <div className="form-container">
          <div className="text-left">
            <div>Register Your Interest Today</div>
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

            <label>Payment Plans</label>
            <select
              name="paymentPlans"
              value={formData.paymentPlans}
              onChange={handleChange}
              required
              className="select-one"
            >
              <option value="" disabled>
                Payment Plans
              </option>
              <option value="outright">Outright</option>
              <option value="6months">6 Months</option>
              <option value="12months">12 Months</option>
              <option value="18months">18 Months</option>
              <option value="24months">24 Months</option>
              <option value="36months">36 Months</option>
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
      </section>

      <div className="r-wrapper">
        <div className="quick-r-btn">
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
