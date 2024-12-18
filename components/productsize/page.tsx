/** @format */

import React, { useState } from 'react';
import './index.css';
import BigImage from '@/app/assets/arrivals/compressed/shirtbig.png';
// import FirstImage from '@/app/assets/arrivals/compressed/shirtbig.png';
import SecondImage from '@/app/assets/arrivals/compressed/shirtblacklogo.png';
import ThreeImage from '@/app/assets/arrivals/compressed/shirtbrown.png';
// import Left from '@/app/assets/icons/left-arrow.svg';
// import Right from '@/app/assets/icons/right-arrow.svg';
import GreenCheck from '@/app/assets/icons/green-check.svg';
import Filter from '@/app/assets/productsize/svg/filter.svg';
import FullStar from '@/app/assets/arrivals/Full-star.svg';
import HalfStar from '@/app/assets/arrivals/Half-star.svg';
import Minus from '@/app/assets/icons/minus.svg';
import Plus from '@/app/assets/icons/plus.svg';
import Image from 'next/image';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { IoIosArrowDown } from "react-icons/io";
import TopSelling from "@/components/topSelling/page"
const imageList = [
  BigImage,
  ThreeImage,
  SecondImage,
];

type MouseEventWithTarget = React.MouseEvent<HTMLDivElement, MouseEvent>;

const Page = () => {
  const [isChecked] = useState(false);

  const colors = ['#00FF00', '#FF0000', '#FFFF00'];

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState(imageList[0]);
  const [transform, setTransform] = useState({
    scale: 1,
    translateX: 0,
    translateY: 0,
  });

    const totalItems = 6; // Total number of items in the carousel
  const cardWidth = 320; // Width of each card
  const [virtualIndex, setVirtualIndex] = useState(0);

  // const handlePrev = () => {
  //   setVirtualIndex((prevIndex) =>
  //     prevIndex === 0 ? totalItems - 1 : prevIndex - 1,
  //   );
  // };

  // const handleNext = () => {
  //   setVirtualIndex((prevIndex) =>
  //     prevIndex === totalItems - 1 ? 0 : prevIndex + 1,
  //   );
  // };

  // const translateX = -virtualIndex * cardWidth;

  const handleMouseMove = (e: MouseEventWithTarget) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const translateX = ((rect.width / 2 - x) / rect.width) * 100;
    const translateY = ((rect.height / 2 - y) / rect.height) * 100;

    setTransform({ scale: 3, translateX, translateY });
  };

  const resetTransform = () => {
    setTransform({ scale: 1, translateX: 0, translateY: 0 });
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  console.log(isChecked);
  return (
    <section className="max-w-[1300px] mx-auto max-[1200px]:px-[10px]">
      <div className="filters my-5"></div>
      <div className="flex items-center mb-[20px] gap-2 max-[767px]:text-[12px]">
        <span className="text-[#00000099] max-[767px]:text-[12px]">Home</span>
        <MdOutlineArrowForwardIos
          fontSize={15}
          className="max-[767px]:text-[12px]"
        />
        Casual
      </div>
      <div className="product-details">
        <div className="w-full max-w-[650px] flex max-[667px]:flex-col-reverse gap-2">
          <div className="flex flex-col max-[667px]:flex-row max-[667px]:mx-auto gap-4">
            {imageList.map((image, index) => (
              <div
                key={index}
                className={`max-w-[203px] w-full aspect-[1/1] overflow-hidden rounded-md cursor-pointer border-2 ${
                  selectedImage === image
                    ? 'border-gray-800'
                    : 'border-transparent'
                } transition-all`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover"
                  width={203} // Add appropriate dimensions
                  height={203}
                />
              </div>
            ))}
          </div>
          <div
            className="w-full aspect-[1/1] max-h-[fit-content] max-w-[500px] mx-auto rounded-lg overflow-hidden bg-gray-200 relative cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
          >
            <Image
              src={selectedImage}
              alt="Main Image"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{
                transform: `scale(${transform.scale}) translate(${transform.translateX}%, ${transform.translateY}%)`,
                transition:
                  transform.scale === 1 ? 'transform 0.3s ease-out' : 'none',
              }}
              width={500} // Example dimensions
              height={500}
            />
          </div>
        </div>
        <div className="product-details-section">
          <h3 className="mb-2">One Life Graphic T-shirt</h3>
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
            <span className="satoshi text-[#000000] font-bold text-[20px]">
              $120
            </span>
            <span className="satoshi text-[#0000004D] font-bold text-[20px] line-through">
              $300
            </span>
            <span className="satoshi text-[#FF3333] bg-[#FF33331A] font-bold text-[12px] px-[15px] py-[7px] rounded-full">
              -20%
            </span>
          </div>
          <p className="satoshi text-[#00000099]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="break-line"></div>
          <span className="satoshi text-[#00000099]">Select Colors</span>
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
          <span className="satoshi text-[#00000099]">Choose Size</span>
          <div className="size-btn">
            <span className="satoshi">Small</span>
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
              <span className="satoshi font-semibold">1</span>
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
      <div className="flex w-full py-5">
        <div className="text-[#00000099] text-[18px] satoshi font-normal w-[-webkit-fill-available] text-center py-5 cursor-pointer border-bottom-light">
          Product Details
        </div>
        <div className="text-[#000000] text-[18px] satoshi font-[500] w-[-webkit-fill-available] text-center py-5 cursor-pointer border-bottom-dark">
          Rating & Reviews
        </div>
        <div className="text-[#00000099] text-[18px] satoshi font-normal w-[-webkit-fill-available] text-center py-5 cursor-pointer border-bottom-light">FAQs</div>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-2 mx-auto">
        <div className="flex gap-2 items-center">
          <span className='text-[#000000] font-bold satoshi text-[20px]'>All Reviews</span>
          <span className='text-[#00000099] font-normal satoshi'>(451)</span>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <span className='bg-[#F0F0F0] w-[fit-content] block px-4 py-4 rounded-full'>
          <Image
            src={Filter.src}
            alt=""
            width={Filter.width}
            height={Filter.height}
            />
            </span>
            <span className='bg-[#F0F0F0] flex items-center gap-4 w-[fit-content] px-8 py-4 rounded-full'>
              <span className='satoshi font-[500]'>Latest</span>
              <IoIosArrowDown />
            </span>
            <span className='bg-black text-white px-8 py-4 rounded-full satoshi'>Write a Review</span>
        </div>
      </div>
     
        <div className="grid grid-cols-2 gap-4 mt-5 max-[676px]:grid-cols-1">
        {[...Array(totalItems * 2)].map((_, index) => (
              <div
                key={index}
                className={`card max-w-[700px!important] ${index === totalItems - 1 ? 'active' : ''}`}
              >
                <div className="star-rating flex my-2">
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
                <span className='satoshi font-bold flex items-center text-[20px] my-2'>
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
                </span>
                <p className='text-[#00000099] satoshi font-normal'>
                  &quot;I&apos;m blown away by the quality and style of the
                  clothes I received from Shop.co. From casual wear to elegant
                  dresses, every piece I&apos;ve bought has exceeded my
                  expectations.&rdquo;
                </p>
                <p className='satoshi font-[500] text-[#00000099] text-[18px]'>Posted on August 18, 2023</p>
              </div>
            ))}</div>
            <div className="view-btn-container"><button >Load More Reviews</button></div>
            <TopSelling />
    </section>
  );
};

export default Page;
