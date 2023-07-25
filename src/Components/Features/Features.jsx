import React from 'react'
import './Features.css'


export default function Features() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-one">
          <p>
            Our major aim is to provide you an affordable property without having
            to break the bank.
          </p>
        </div>
        <div className='grid-two'>
            <img src="/images/Land.png" alt="Land pics" />
        </div>
        <div className="grid-three">
            <img src="/images/House.png" alt="House pics" />

        </div>
      </div>
    </>
  );
}
