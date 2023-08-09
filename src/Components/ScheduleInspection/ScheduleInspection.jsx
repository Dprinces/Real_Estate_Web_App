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
    inspectionHour: '12',
    inspectionMinute: '00',
    inspectionAMPM: 'AM',
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
       properties: "",
       preferredContactMethod: "",
       inspectionDate: "",
       inspectionHour: "12",
       inspectionMinute: "00",
       inspectionAMPM: "AM",
     });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero-section">
          <h1 className="sch-insp">Schedule An Inspection</h1>
          <p className="sch-insp-para">
            Take the first step towards a secure and profitable investment. We
            understand that seeing is believing and our sales team is on hand to
            give you a tour. All you need to do is fill in the form below and
            specify your preferred date and time. Our sales team will be in
            contact with you shortly.
          </p>
        </div>
        <div className="form-container">
          <div className="image-container">
            <img src="../images/clip-art.png" alt="Clip Art" />
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

            <label>Properties</label>
            <select
              name="properties"
              value={formData.properties}
              onChange={handleChange}
              required
              className="select-one"
            >
              <option value="" disabled>
                Select the type of property
              </option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              {/* Add more property types as needed */}
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
            <div className="time-container">
              <div className="time-dropdown">
                <select
                  name="inspectionHour"
                  value={formData.inspectionHour}
                  onChange={handleChange}
                  className="select-two"
                  required
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                    <option key={hour} value={hour.toString().padStart(2, "0")}>
                      {hour.toString().padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
              <span className="time-separator">:</span>
              <div className="time-dropdown">
                <select
                  name="inspectionMinute"
                  value={formData.inspectionMinute}
                  onChange={handleChange}
                  className="select-two"
                  required
                >
                  {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
                    <option
                      key={minute}
                      value={minute.toString().padStart(2, "0")}
                    >
                      {minute.toString().padStart(2, "0")}
                    </option>
                  ))}
                </select>
              </div>
              <div className="time-dropdown">
                <select
                  name="inspectionAMPM"
                  value={formData.inspectionAMPM}
                  onChange={handleChange}
                  className="select-two"
                  required
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>

            <button type="submit" className='btn-primary'>Submit</button>
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


