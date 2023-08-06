import React, { useState } from 'react';
import Navbar from '../../Common/Header/Navbar';
import Footer from '../../Common/Footer/Footer';
import { estateFeatures } from '../../../Pages/EstatePage/Data/EstateFeatures';
import './House.css';

export default function House() {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    tel: '',
    numberOfPlot: '',
    paymentPlans: '',
    SelectAPreferContactMethod: '',
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
            The perfect destination to live in harmony, a haven of tranquility set within a picturesque lush landscape. Welcome to nature's pride... <br />Welcome to Fajuyi Estate.
          </p>
        </div>

      </div>
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
      <div>
        <img
          src="../../../../public/images/HouseDes1.png"
          alt="Location icon" />
      </div>
      <div className="description1">
        <h1> 4 Bedroom Terrace</h1>
        <ul>
          <li>
            Fitted Kitchen cabinets and counter tops, refrigerator, cooker, hob and microwave
          </li>
          <li>
            Balconies wherever applicable as per unit plan
          </li>
          <li>
            Wardrobes in the bedroom
          </li>
          <li>
            Fully tiled bathrooms ensuite and guest toilet
          </li>
          <li>
            Electrical shaver point with mirror in bathroom
          </li><li>
            Water Heater
          </li><li>
            Tall windows
          </li>
        </ul>
        <h1>
          Price: N80M <br /> Type: Service Estate
        </h1>
        <section className='Bedroom-Display'>
          <div>
            <img
              src="../../../../public/images/Bedroom1.png"
              alt="Location icon" />
          </div>
          <div>
            <img
              src="../../../../public/images/Bedroom2.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom3.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom4.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom5.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom6.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom7.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom8.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom9.png"
              alt="Location icon" />
          </div>

          <h2>
            Our Payment Plans
          </h2>
          <h3> Outright </h3>
          <h3> 6 Months </h3>
          <h3> 12 Months </h3>
          <h3> 18 Months </h3>
          <h3> 24 Months </h3>
          <h3> 36 Months </h3>
        </section>
        <div>
          <img
            src="../../../../public/images/HouseDes2.png"
            alt="Location icon" />
        </div>
        <h1> 3 Bedroom Terrace</h1>
        <ul>
          <li>
            Fitted Kitchen cabinets and counter tops, refrigerator, cooker, hob and microwave
          </li>
          <li>
            Balconies wherever applicable as per unit plan
          </li>
          <li>
            Wardrobes in the bedroom
          </li>
          <li>
            Fully tiled bathrooms ensuite and guest toilet
          </li>
          <li>
            Electrical shaver point with mirror in bathroom
          </li><li>
            Water Heater
          </li><li>
            Tall windows
          </li>
        </ul>
        <h1>
          Price: N80M <br /> Type: Service Estate
        </h1>
        <section className='Bedroom-Display'>
          <div>
            <img
              src="../../../../public/images/Bedroom10.png"
              alt="Location icon" />
          </div>
          <div>
            <img
              src="../../../../public/images/Bedroom11.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom12.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom13.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom14.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom15.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom16.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom17.png"
              alt="Location icon" />
          </div><div>
            <img
              src="../../../../public/images/Bedroom18.png"
              alt="Location icon" />
          </div>
          <div>
            <img
              src="../../../../public/images/Bedroom19.png"
              alt="Location icon" />
          </div>
          <h2>
            Our Payment Plans
          </h2>
          <h3> Outright </h3>
          <h3> 6 Months </h3>
          <h3> 12 Months </h3>
          <h3> 18 Months </h3>
          <h3> 24 Months </h3>
          <h3> 36 Months </h3>
        </section>
        <section>
          <p>
            Register Your Interest Today
          </p>
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

            <button type="submit">Submit</button>
          </form>
          <div className="quick-r-btn">
            <img src="/icons/whatsapp.png" alt="whatsapp" className="whatsapp-icon" />
            <button> Quick Response</button>
          </div>
        </section>
      </div>


      <Footer />
    </>
  );
}
