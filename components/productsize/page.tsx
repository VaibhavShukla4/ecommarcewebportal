/** @format */

import React, {  useState } from 'react';
import './index.css';
import BigImage from '@/app/assets/arrivals/compressed/shirtbig.png';
import FirstImage from '@/app/assets/arrivals/compressed/shirtbig.png';
import SecondImage from '@/app/assets/arrivals/compressed/shirtblacklogo.png';
import ThreeImage from '@/app/assets/arrivals/compressed/shirtbrown.png';
import FullStar from '@/app/assets/arrivals/Full-star.svg';
import HalfStar from '@/app/assets/arrivals/Half-star.svg';
import Minus from '@/app/assets/icons/minus.svg';
import Plus from '@/app/assets/icons/plus.svg';
import Image from 'next/image';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
const Page = () => {
  const [isChecked] = useState(false);

  // const handleCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
  //   setIsChecked(e.target.checked);
  // };

    const colors = [
    '#00FF00', // Green
    '#FF0000', // Red
    '#FFFF00', // Yellow
    ];

  const [selectedColor, setSelectedColor] = useState('');
  const handleColorSelect = (color: React.SetStateAction<string>) => {
    setSelectedColor(color);
  };
  console.log(isChecked);
  return (
    <section className="max-w-[1200px] mx-auto max-[1200px]:px-[10px]">
      <div className="filters my-5"></div>
      <div className="flex items-center mb-[20px] gap-2 max-[767px]:text-[12px]">
        <span className="text-[#00000099] max-[767px]:text-[12px]">Home</span>
        <MdOutlineArrowForwardIos fontSize={15} className='max-[767px]:text-[12px]' />
        Casual
      </div>
      <div className="product-details">
      
      <div className="product-image-section">
        <div className="three-image">
          <Image
            src={FirstImage.src}
            alt=""
            width={FirstImage.width}
            height={FirstImage.height}
          />
          <Image
            src={SecondImage.src}
            alt=""
            width={SecondImage.width}
            height={SecondImage.height}
          />
          <Image
            src={ThreeImage.src}
            alt=""
            width={ThreeImage.width}
            height={ThreeImage.height}
          />
        </div>
        <div className="big-image">
          <Image
            src={BigImage.src}
            alt=""
            width={BigImage.width}
            height={BigImage.height}
            className="large-img"
            style={{
              maxWidth: '-webkit-fill-available',
              objectFit: 'contain',
              height: 'fit-content',
            }}
          />
        </div>
      </div>
      <div className="product-details-section">
        <h3 className='mb-2'>One Life Graphic T-shirt</h3>
        <div className="star-rating flex mb-2">
          <span>
            <Image
              src={FullStar.src}
              alt=""
              width={FullStar.width}
              height={FullStar.height}
            />
          </span>
          <span>
            <Image
              src={FullStar.src}
              alt=""
              width={FullStar.width}
              height={FullStar.height}
            />
          </span>
          <span>
            <Image
              src={FullStar.src}
              alt=""
              width={FullStar.width}
              height={FullStar.height}
            />
          </span>
          <span>
            <Image
              src={FullStar.src}
              alt=""
              width={FullStar.width}
              height={FullStar.height}
            />
          </span>
          <span>
            <Image
              src={HalfStar.src}
              alt=""
              width={HalfStar.width}
              height={HalfStar.height}
            />
          </span>
          &nbsp;&nbsp;&nbsp;
          <p>4.5/5</p>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className='satoshi text-[#000000] font-bold text-[20px]'>$120</span>
          <span className='satoshi text-[#0000004D] font-bold text-[20px] line-through'>$300</span>
          <span className='satoshi text-[#FF3333] bg-[#FF33331A] font-bold text-[12px] px-[15px] py-[7px] rounded-full'>-20%</span>
        </div>
        <p className='satoshi text-[#00000099]'>
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="break-line"></div>
        <span className='satoshi text-[#00000099]'>Select Colors</span>
         <div className="flex gap-2 mt-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className={`h-10 w-10 rounded-full cursor-pointer border-2 flex items-center justify-center ${
                  selectedColor === color
                    ? 'border-blue-500'
                    : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
                onClick={() => handleColorSelect(color)}
              >
                {selectedColor === color && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="white"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        <div className="break-line"></div>
        <span className='satoshi text-[#00000099]'>Choose Size</span>
        <div className="size-btn">
          <span className='satoshi' >Small</span>
          <span>Medium</span>
          <span>Large</span>
          <span>X-Large</span>
        </div>
        <div className="break-line"></div>
        <div className="size-btn max-w-[-webkit-fill-available!important]">
          <div className="quantity">
            <span>
              <Image
                src={Minus.src}
                width={Minus.width}
                height={Minus.height}
                alt=""
              />
            </span>
            <span>1</span>
            <span>
              <Image
                src={Plus.src}
                width={Plus.width}
                height={Plus.height}
                alt=""
              />
            </span>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default Page;
