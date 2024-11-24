/** @format */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger

import Casual from '@/app/assets/arrivals/compressed/casual.png';
import Formal from '@/app/assets/arrivals/compressed/formal.png';
import Party from '@/app/assets/arrivals/compressed/party.png';
import Gym from '@/app/assets/arrivals/compressed/gym.png';
import Image from 'next/image';
import './index.css'; // Ensure your CSS file is imported

const Page = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    imagesRef.current.forEach((image) => {
      gsap.from(image, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: image,
          start: 'top 80%',
          end: '+=100',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <section className="flex justify-center">
      <div className="browse">
        <span>BROWSE BY DRESS STYLE</span>
        <div className="browse-img">
          <div className="image-section">
            <div id="casual" className='w-[37%]'>
              <Image
                src={Casual.src}
                alt="Casual Style"
                layout="responsive"
                width={Casual.width}
                height={Casual.height}
                onLoad={() => ScrollTrigger.refresh()} // Refresh ScrollTrigger on image load
                loading="lazy"
              />
              <span>Casual</span>
            </div>
            <div id="formal" className='w-[max-content]'>
              <Image
              className='h-[-webkit-fill-available!important]'
                src={Formal.src}
                alt="Formal Style"
                layout="responsive"
                width={Formal.width}
                height={Formal.height}
                onLoad={() => ScrollTrigger.refresh()} // Refresh ScrollTrigger on image load
                loading="lazy"
              />
              <span>Formal</span>
            </div>
          </div>
          <div className="image-section">
            <div id="party">
              <Image
                src={Party.src}
                alt="Party Style"
                layout="responsive"
                width={Party.width}
                height={Party.height}
                onLoad={() => ScrollTrigger.refresh()} // Refresh ScrollTrigger on image load
                loading="lazy"
              />
              <span>Party</span>
            </div>
            <div  id="gym">
              <Image
                src={Gym.src}
                alt="Gym Style"
                layout="responsive"
                width={Gym.width}
                height={Gym.height}
                onLoad={() => ScrollTrigger.refresh()} // Refresh ScrollTrigger on image load
                loading="lazy"
              />
              <span>Gym</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
