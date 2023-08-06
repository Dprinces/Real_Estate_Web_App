import React from 'react'
import Navbar from "../Common/Header/Navbar";
import HeroSection from '../HeroSection/HerSection';
import Features from "../Features/Features";
import OurFocus from '../Common/OurFocus/OurFocus';
import ReviewSection from '../ReviewSection/ReviewSection';
import Stats from '../Stats/Stats';
import Footer from '../Common/Footer/Footer';
import { FaQuoteLeft } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      
      <OurFocus />
      <ReviewSection />
      <Stats />
      <Footer />
    </>
  );
}
