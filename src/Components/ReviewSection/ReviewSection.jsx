import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { reviews } from "./Data/Reviews";
import "./ReviewSection.css";

export default function () {
  return (
    <div className="review-wrapper">
      <div className="review-title">
        <h2>
          Client<span className="span-title"> Reviews</span>
        </h2>
        <div className="border-bottom"></div>
      </div>
      <div className="review-container">
         {/* <div className="client-container">
          <div className="client-pic">
            <img src="/images/client1.png" alt="A couple's picture" />
          </div>
          <div className="client-info">
            <h3>Mr & Mrs Olatunbosun</h3>
          </div>
          <p>
            <span className="quote-left">
              <FaQuoteLeft />
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ut
            ducimus ullam praesentium reprehenderit debitis, voluptate autem eos
            eligendi odio explicabo, quibusdam soluta similique quidem ratione
            quis non, libero corporis qui suscipit. Esse, soluta laboriosam quam
            culpa voluptatibus iusto quasi iure dolorem, eaque blanditiis
            dignissimos amet pariatur sapiente natus consequuntur!
            <span className="quote-right">
              <FaQuoteRight />
            </span>
          </p>
        </div>
        <div className="client-container">
          <div className="client-pic">
            <img src="" alt="" />
          </div>
          <div className="client-info">
            <h3>Mr & Mrs Olatunbosun</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ut ducimus ullam praesentium reprehenderit debitis, voluptate
              autem eos eligendi odio explicabo, quibusdam soluta similique
              quidem ratione quis non, libero corporis qui suscipit. Esse,
              soluta laboriosam quam culpa voluptatibus iusto quasi iure
              dolorem, eaque blanditiis dignissimos amet pariatur sapiente natus
              consequuntur!
            </p>
          </div>
        </div>
        <div className="client-container">
          <div className="client-pic">
            <img src="" alt="" />
          </div>
          <div className="client-info">
            <h3>Mr & Mrs Olatunbosun</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ut ducimus ullam praesentium reprehenderit debitis, voluptate
              autem eos eligendi odio explicabo, quibusdam soluta similique
              quidem ratione quis non, libero corporis qui suscipit. Esse,
              soluta laboriosam quam culpa voluptatibus iusto quasi iure
              dolorem, eaque blanditiis dignissimos amet pariatur sapiente natus
              consequuntur!
            </p>
          </div>
        </div>
        <div className="client-container">
          <div className="client-pic">
            <img src="" alt="" />
          </div>
          <div className="client-info">
            <h3>Mr & Mrs Olatunbosun</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ut ducimus ullam praesentium reprehenderit debitis, voluptate
              autem eos eligendi odio explicabo, quibusdam soluta similique
              quidem ratione quis non, libero corporis qui suscipit. Esse,
              soluta laboriosam quam culpa voluptatibus iusto quasi iure
              dolorem, eaque blanditiis dignissimos amet pariatur sapiente natus
              consequuntur!
            </p>
          </div>
        </div>
        <div className="client-container">
          <div className="client-pic">
            <img src="" alt="" />
          </div>
          <div className="client-info">
            <h3>Mr & Mrs Olatunbosun</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              ut ducimus ullam praesentium reprehenderit debitis, voluptate
              autem eos eligendi odio explicabo, quibusdam soluta similique
              quidem ratione quis non, libero corporis qui suscipit. Esse,
              soluta laboriosam quam culpa voluptatibus iusto quasi iure
              dolorem, eaque blanditiis dignissimos amet pariatur sapiente natus
              consequuntur!
            </p>
          </div>
        </div>  */}

        {reviews.map(({ id, img, reviewerName, review }) => (
          <div key={id} className="client-container">
            <div className="client-pic">
              <img src={img} alt="A couple's picture" />
            </div>
            <div className="client-info">
              <h3>{reviewerName}</h3>
            </div>
            <p>
              <span className="quote-left">
                <FaQuoteLeft />
              </span>
              {review}
              <span className="quote-right">
                <FaQuoteRight />
              </span>
            </p>
          </div>
        ))} 
      </div>
    </div>
  );
}
