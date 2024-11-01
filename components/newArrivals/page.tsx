/** @format */

import React, { useRef } from 'react';
import './index.css';
import Shirt from '@/app/assets/arrivals/compressed/t-shirt-black.png';
import Jeans from '@/app/assets/arrivals/compressed/blue-jeans.png';
import Check from '@/app/assets/arrivals/compressed/check-shirt.png';
import Sleeve from '@/app/assets/arrivals/compressed/sleeve-less-shirt.png';
import FullStar from '@/app/assets/arrivals/Full-star.svg';
import HalfStar from '@/app/assets/arrivals/Half-star.svg';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const cardsRef = useRef([]);

  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useGSAP(() => {
    cardsRef.current.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });
    });
  });

  return (
    <section className="new-arrivals">
      <span>NEW ARRIVALS</span>
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
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={HalfStar.src}
                alt="Half Star"
                width={HalfStar.width}
                height={HalfStar.height}
                loading="lazy"
              />
            </span>
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
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={HalfStar.src}
                alt="Half Star"
                width={HalfStar.width}
                height={HalfStar.height}
                loading="lazy"
              />
            </span>
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
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={HalfStar.src}
                alt="Half Star"
                width={HalfStar.width}
                height={HalfStar.height}
                loading="lazy"
              />
            </span>
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
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={FullStar.src}
                alt="Full Star"
                width={FullStar.width}
                height={FullStar.height}
                loading="lazy"
              />
            </span>
            <span>
              <Image
                src={HalfStar.src}
                alt="Half Star"
                width={HalfStar.width}
                height={HalfStar.height}
                loading="lazy"
              />
            </span>
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
