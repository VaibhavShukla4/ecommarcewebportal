/** @format */
'use client';
import React, { useState } from 'react';
import Left from '@/app/assets/icons/left-arrow.svg';
import Right from '@/app/assets/icons/right-arrow.svg';
import FullStar from '@/app/assets/arrivals/Full-star.svg';
import GreenCheck from '@/app/assets/icons/green-check.svg';
import './index.css';
import Image from 'next/image';

const Page = () => {
  const totalItems = 6; // Total number of items in the carousel
  const cardWidth = 320; // Width of each card
  const [virtualIndex, setVirtualIndex] = useState(0);

  const handlePrev = () => {
    setVirtualIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setVirtualIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1,
    );
  };

  const translateX = -virtualIndex * cardWidth;

  return (
    <section>
      <div className="new-arrivals two-div">
        <span>OUR HAPPY CUSTOMERS</span>
        <div className="arrow-btn">
          <span onClick={handlePrev}>
            <Image
              src={Left.src}
              alt="Previous"
              width={Left.width}
              height={Left.height}
              loading="lazy"
            />
          </span>
          <span onClick={handleNext}>
            <Image
              src={Right.src}
              alt="Next"
              width={Right.width}
              height={Right.height}
              loading="lazy"
            />
          </span>
        </div>
      </div>
      <div className="blur-point flex">
        <div className="left-blur"></div>
        <div className="row">
          <div
            className="cardss"
            style={{
              display: 'flex',
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.5s ease',
            }}
          >
            {[...Array(totalItems * 2)].map((_, index) => (
              <div
                key={index}
                className={`card ${index === totalItems - 1 ? 'active' : ''}`}
              >
                <div className="star-rating flex">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex}>
                      <Image
                        src={FullStar.src}
                        alt="Star"
                        width={FullStar.width}
                        height={FullStar.height}
                        loading="lazy"
                      />
                    </span>
                  ))}
                </div>
                <h3>
                  Sarah M. &nbsp;
                  <span>
                    <Image
                      src={GreenCheck.src}
                      alt="Verified"
                      width={GreenCheck.width}
                      height={GreenCheck.height}
                      loading="lazy"
                    />
                  </span>
                </h3>
                <p>
                  &quot;I&apos;m blown away by the quality and style of the
                  clothes I received from Shop.co. From casual wear to elegant
                  dresses, every piece I&apos;ve bought has exceeded my
                  expectations.&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="right-blur"></div>
      </div>
    </section>
  );
};

export default Page;
