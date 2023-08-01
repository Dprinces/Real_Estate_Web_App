import React, { useState } from 'react';
import Navbar from '../Common/Header/Navbar'
import Footer from '../Common/Footer/Footer';
import './ScheduleInspection.css'
 

export default function ScheduleInspection() {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    tel: '',
    properties: '',
    preferredContactMethod: '',
    inspectionDate: '',
    inspectionTime: '',
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
   };   
  

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero-section">
          <h1>Schedule An Inspection</h1>
          <p>
            Take the first step towards a secure and profitable investment. We
            understand that seeing is believing and our sales team is on hand to
            give you a tour. All you need to do is fill in the form below and
            specify your preferred date and time. Our sales team will be in
            contact with you shortly.
          </p>
        </div>
        <div className="form-container">
          <div className="image-container">
            <img src="../images/customer-service.png" alt="Female Customer Service" />
          </div>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
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

            <label>Properties</label>
            <select
              name="properties"
              value={formData.properties}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select the type of property
              </option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              {/* Add more property types as needed */}
            </select>

            <label>Select a Prefer Contact Method</label>
            <select
              name="preferredContactMethod"
              value={formData.preferredContactMethod}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </select>

            <label>Date</label>
            <input
              type="date"
              name="inspectionDate"
              value={formData.inspectionDate}
              onChange={handleChange}
              placeholder="Select the inspection date"
              required
            />

            <label>Time</label>
            <input
              type="time"
              name="inspectionTime"
              value={formData.inspectionTime}
              onChange={handleChange}
              placeholder="Select the inspection time"
              required
            />

            <button type="submit">Schedule Inspection</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};


