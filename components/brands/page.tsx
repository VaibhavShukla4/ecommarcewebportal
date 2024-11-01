/** @format */

import React, { useRef } from 'react';
import './index.css';
import Zara from '@/app/assets/arrivals/compressed/zara.png';
import Verse from '@/app/assets/arrivals/compressed/verse.png';
import Klein from '@/app/assets/arrivals/compressed/klein.png';
import Prada from '@/app/assets/arrivals/compressed/prada.png';
import Gucci from '@/app/assets/arrivals/compressed/gucci.png';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const brandsRef = useRef([]);

  brandsRef.current = [];

  const addToRefs = (el) => {
    if (el && !brandsRef.current.includes(el)) {
      brandsRef.current.push(el);
    }
  };

  useGSAP(() => {
    brandsRef.current.forEach((el) => {
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
    <section className="brands-section">
      <span>
        <Image
          src={Verse.src}
          alt=""
          width={Verse.width}
          height={Verse.height}
          loading="lazy"
        />
      </span>
      <span>
        <Image
          src={Zara.src}
          alt=""
          style={{ width: '120px', height: '30px' }}
          width={Zara.width}
          height={Zara.height}
        />
      </span>
      <span>
        <Image
          src={Gucci.src}
          alt=""
          width={Gucci.width}
          height={Gucci.height}
          loading="lazy"
        />
      </span>
      <span>
        <Image
          src={Prada.src}
          alt=""
          width={Prada.width}
          height={Prada.height}
          loading="lazy"
        />
      </span>
      <span>
        <Image
          src={Klein.src}
          alt=""
          width={Klein.width}
          height={Klein.height}
          loading="lazy"
        />
      </span>
    </section>
  );
};

export default Page;
