import React, { useState } from 'react';
import Navbar from '../Common/Header/Navbar'
import './ScheduleInspection.css'
 

export default function ScheduleInspection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    typeOfProperty: '',
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
          <h1>Schedule Inspection</h1>
        </div>
        <div className="form-container">
          <div className="image-container">
            <img src="../images/clip-art.png" alt="Clip Art" />
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </label>
            <label>
              Type of Property:
              <input
                type="text"
                name="typeOfProperty"
                value={formData.typeOfProperty}
                onChange={handleChange}
                placeholder="Enter the type of property"
                required
              />
            </label>
            <label>
              Select Preferred Contact Method:
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
            </label>
            <label>
              Inspection Date:
              <input
                type="date"
                name="inspectionDate"
                value={formData.inspectionDate}
                onChange={handleChange}
                placeholder="Select the inspection date"
                required
              />
            </label>
            <label>
              Inspection Time:
              <input
                type="time"
                name="inspectionTime"
                value={formData.inspectionTime}
                onChange={handleChange}
                placeholder="Select the inspection time"
                required
              />
            </label>
            <button type="submit">Schedule Inspection</button>
          </form>
        </div>
      </div>
    </>
  );
};


