import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms and Condition</a>
            </li>
          </ul>
        </div>
        <div className="footer-flex-end">
        <div className="footer-contact">
          <p>123 Main Street, Cityville, Country</p>
          <p>Telephone: +1 (555) 123-4567</p>
        </div>
        <ul className="footer-social-media">
          <li>
            <a href="#" target="_blank">
              <img src="/images/facebook-icon.png" alt="Facebook icon" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="/images/twitter-icon.png" alt="Twitter icon" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="/images/instagram-icon.png" alt="Instagram" />
            </a>
          </li>
        </ul>
        <p>
          &copy; {new Date().getFullYear()} HomeofHonour. All rights reserved.
        </p>
        </div>
      </div>
    </div>
  );
};

