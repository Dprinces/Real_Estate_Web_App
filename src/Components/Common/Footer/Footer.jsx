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
          <ul className="footer-social-media">
            <li>
              <a href="#" target="_blank">
                <img src="/images/facebook.png" alt="Facebook icon" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="/images/twitter.png"
                  alt="Twitter icon"
                  className="elipse"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="/images/instagram.png" alt="Instagram icon" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="/images/youtube.svg"
                  alt="Instagram icon"
                  className="elipse"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img src="/images/thread.png" alt="Thread icon" />
              </a>
            </li>
          </ul>
          <div className="footer-contact">
            <p>
             Plot 54 , New Iyin Road, Behind New CBN,
              <br /> Ado-Ekiti, Ekiti State, Nigeria.
            </p>
            <p> contact@homeofhonor.com </p>

            <p>+234 700 1234567</p>

            <hr />

            <p className="copyright">
              &copy; {new Date().getFullYear()} HomeofHonour. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

