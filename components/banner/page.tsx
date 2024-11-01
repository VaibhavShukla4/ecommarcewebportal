/** @format */

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';
import SkeletonLoader from './../SkeletonLoader/page';
import BannerImageSmall from '@/app/assets/arrivals/compressed/BannerImageSmall.webp'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import BigStar from '@/app/assets/banner/bigStar';
import SmallStar from '@/app/assets/banner/smallStar';
const ShopNowBtn = dynamic(() => import('./../ShopNowBtn/page'), {
  ssr: true,
  loading: () => <SkeletonLoader />,
});
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const textRef = useRef(null);
  const bigStarRef = useRef(null);
  const smallStarRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          once: true,
        },
      },
    );
    gsap.fromTo(
      bigStarRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: bigStarRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          once: true,
        },
      },
    );
    gsap.fromTo(
      smallStarRef.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: smallStarRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          once: true,
        },
      },
    );
  }, []);

  return (
    <React.Fragment>
      <section className="banner-container">
        <section className="text-section">
          <section className="heading">
            <p className="animatedText">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
          </section>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <ShopNowBtn className="shop-now-btn" />

          <div className="points-section">
            <section className="brands">
              <h3>200 +</h3>
              <span>International Brands</span>
            </section>
            <section className="brands">
              <h3>2,000 +</h3>
              <span>High-Quality Products</span>
            </section>
            <section className="brands">
              <h3>30,000 +</h3>
              <span>Happy Customers</span>
            </section>
          </div>
        </section>
        <div className="photo-section">
          <div className="image-section">
            <Image
              src={BannerImageSmall.src}
              alt="Banner Image"
              width={BannerImageSmall.width} // Ensure this width matches the actual display size
              height={BannerImageSmall.height} // Adjust height according to the aspect ratio
              layout="responsive"
            />
            <span id="big-star">
              <BigStar />
            </span>
            <span id="small-star">
              <SmallStar />
            </span>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Page;
