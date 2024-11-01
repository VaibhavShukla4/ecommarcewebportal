/** @format */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

import Shirt from '@/app/assets/arrivals/compressed/t-shirt-black.png';
import Jeans from '@/app/assets/arrivals/compressed/blue-jeans.png';
import Check from '@/app/assets/arrivals/compressed/check-shirt.png';
import Sleeve from '@/app/assets/arrivals/compressed/sleeve-less-shirt.png';
import FullStar from '@/app/assets/arrivals/Full-star.svg';
import HalfStar from '@/app/assets/arrivals/Half-star.svg';
import Image from 'next/image';

const Page = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger once

    cardsRef.current.forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: '+=100',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section className="new-arrivals">
      <span className={`font-bold text-[20px] mx-auto `}>TOP SELLING</span>
      <div className="row">
        <div className="col cards">
          <Image
            src={Shirt.src}
            alt="T-shirt with Tape Details"
            width={Shirt.width}
            height={Shirt.height}
            loading="lazy"
          />
          <h5>T-shirt with Tape Details</h5>
          <div className="star-rating flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                <Image
                  src={index < 4 ? FullStar.src : HalfStar.src}
                  alt={index < 4 ? 'Full Star' : 'Half Star'}
                  width={index < 4 ? FullStar.width : HalfStar.width}
                  height={index < 4 ? FullStar.height : HalfStar.height}
                  loading="lazy"
                />
              </span>
            ))}
            &nbsp;&nbsp;&nbsp;
            <p>4.5/5</p>
          </div>
          <div className="price">
            <h3>$120</h3>
            <h3 id="discount">$120</h3>
            <span>-20%</span>
          </div>
        </div>
        <div className="col cards">
          <Image
            src={Jeans.src}
            alt="Skinny Fit Jeans"
            width={Jeans.width}
            height={Jeans.height}
            loading="lazy"
          />
          <h5>Skinny Fit Jeans</h5>
          <div className="star-rating flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                <Image
                  src={index < 3 ? FullStar.src : HalfStar.src}
                  alt={index < 3 ? 'Full Star' : 'Half Star'}
                  width={index < 3 ? FullStar.width : HalfStar.width}
                  height={index < 3 ? FullStar.height : HalfStar.height}
                  loading="lazy"
                />
              </span>
            ))}
            &nbsp;&nbsp;&nbsp;
            <p>3.5/5</p>
          </div>
          <div className="price">
            <h3>$120</h3>
          </div>
        </div>
        <div className="col cards">
          <Image
            src={Check.src}
            alt="Checkered Shirt"
            width={Check.width}
            height={Check.height}
            loading="lazy"
          />
          <h5>Checkered Shirt</h5>
          <div className="star-rating flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                <Image
                  src={index < 4 ? FullStar.src : HalfStar.src}
                  alt={index < 4 ? 'Full Star' : 'Half Star'}
                  width={index < 4 ? FullStar.width : HalfStar.width}
                  height={index < 4 ? FullStar.height : HalfStar.height}
                  loading="lazy"
                />
              </span>
            ))}
            &nbsp;&nbsp;&nbsp;
            <p>4.5/5</p>
          </div>
          <div className="price">
            <h3>$120</h3>
          </div>
        </div>
        <div className="col cards">
          <Image
            src={Sleeve.src}
            alt="Sleeve Striped T-shirt"
            width={Sleeve.width}
            height={Sleeve.height}
            loading="lazy"
          />
          <h5>Sleeve Striped T-shirt</h5>
          <div className="star-rating flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                <Image
                  src={index < 4 ? FullStar.src : HalfStar.src}
                  alt={index < 4 ? 'Full Star' : 'Half Star'}
                  width={index < 4 ? FullStar.width : HalfStar.width}
                  height={index < 4 ? FullStar.height : HalfStar.height}
                  loading="lazy"
                />
              </span>
            ))}
            &nbsp;&nbsp;&nbsp;
            <p>4.5/5</p>
          </div>
          <div className="price">
            <h3>$120</h3>
          </div>
        </div>
      </div>
      <div className="view-btn-container">
        <button>View All</button>
      </div>
    </section>
  );
};

export default Page;
