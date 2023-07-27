import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>123 Main Street, Cityville, Country</p>
        <p>Telephone: +1 (555) 123-4567</p>
        <ul className="footer-social-media">
          <li>
            <a href="#" target="_blank">
              <img src="" alt="Facebook icon" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="" alt="Twitter icon" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img src="" alt="Instagram" />
            </a>
          </li>
        </ul>
        <ul className="footer-links">
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
        <p>
          &copy; {new Date().getFullYear()} HomeofHonour. All rights reserved.
        </p>
      </div>
    </div>
  );
}
