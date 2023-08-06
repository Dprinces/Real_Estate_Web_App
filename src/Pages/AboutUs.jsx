import React from "react";
import Navbar from "../Components/Common/Header/Navbar";
import Footer from "../Components/Common/Footer/Footer";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div>
        <img
          src="../../../../public/images/Bedroom1.png"
          alt="Location icon" />
      </div>
      <p>
        Home of Honour is a trusted and award winning real estate development company operating out of Lagos Nigeria, with over 14 real estate products across the Lagos Metropolitan Cities.
        With 4 branches across Lagos, 1 in Canada, over 1000 trained independent marketers, we have been able to help over 2000 Nigerians become property owners of over 2 million square metres of well documented and titled landed properties within the space of 4 years.
        Our Success story is not far-fetched: we are diligent and we keep our word.
        Our focus is to bring clarity to, and demystify the process of buying and selling real estate in Nigeria: especially in Lagos State. All our Properties are free from Government acquisitions, land-grabbers trouble or any other encumbrance whatsoever.
        We offer other value added services including but not limited to legal advice on property matters, architectural drawings etc.
        Under the leadership of our amiable chairman, Prince Dele Akinola, our mission is to render top-notch services to our numerous satisfied clients while maintaining the highest standards of integrity.
      </p>
      <section className='Awards'>
        <h3>
          Awards
        </h3>
        <p>
          Among several others, we have been honored with numerous awards such as:
        </p>
        <div className="grid-container">
        <div className="grid-one">
          <p>
            Our major aim is to provide you an affordable properties without
            having to break the bank.
          </p>
        </div>
        <div className="grid-two">
          <Link to="/land">
            <img src="/images/Land.png" alt="Land pics" />
          </Link>
        </div>
        <div className="grid-three">
          <Link to='/house'>
          <img src="/images/House.png" alt="House pics" />
          </Link>
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}
