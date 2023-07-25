import React from 'react'
import Navbar from "../Common/Header/Navbar";
import HeroSection from '../HeroSection/HerSection';
import Features from "../Features/Features";
import ReviewSection from '../ReviewSection/ReviewSection';


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <ReviewSection />
    </>
  );
}
