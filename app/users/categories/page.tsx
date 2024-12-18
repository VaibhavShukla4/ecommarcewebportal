  /** @format */
  'use client';
  import React, { useState } from 'react';
  import { MdOutlineArrowForwardIos } from 'react-icons/md';
  import Filter from '@/app/assets/categories/filter.svg';
  import RoundFill from '@/app/assets/categories/round-filter.svg';
  import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';import { IoClose } from "react-icons/io5";

  import PriceSlider from '@/components/PriceSlider/page';
  import Shirt from '@/app/assets/arrivals/compressed/t-shirt-black.png';
  // import Jeans from '@/app/assets/arrivals/compressed/blue-jeans.png';
  // import Check from '@/app/assets/arrivals/compressed/check-shirt.png';
  // import Sleeve from '@/app/assets/arrivals/compressed/sleeve-less-shirt.png';
  import FullStar from '@/app/assets/arrivals/Full-star.svg';
  import HalfStar from '@/app/assets/arrivals/Half-star.svg';
  import Image from 'next/image';
  const Page = () => {
    const colors = [
      '#00FF00', // Green
      '#FF0000', // Red
      '#FFFF00', // Yellow
      '#FFA500', // Orange
      '#00FFFF', // Cyan
      '#0000FF', // Blue
      '#800080', // Purple
      '#FF00FF', // Magenta
      '#FFFFFF', // White
      '#000000', // Black
    ];

  const [selectedColor, setSelectedColor] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const handleColorSelect = (color: React.SetStateAction<string>) => {
    setSelectedColor(color);
  };

  
  return (
    <section className="max-w-[1200px] mx-auto max-[1200px]:px-[10px]">
      <div className="filters my-5"></div>
      <div className="flex items-center mb-[20px] gap-2 max-[767px]:text-[12px]">
        <span className="text-[#00000099] max-[767px]:text-[12px]">Home</span>
        <MdOutlineArrowForwardIos fontSize={15} className='max-[767px]:text-[12px]' />
        Casual
      </div>
      <div className="flex gap-4 w-full">
        <div className="filters w-[340px] rounded-[20px]  p-5 max-[767px]:hidden">
          <div className="flex items-center justify-between">
            <span className="satoshi font-[700] text-[#00000] text-[18px]">
              Filters
            </span>
            <Image
              src={Filter.src}
              width={Filter.width}
              height={Filter.height}
              alt=""
            />
          </div>
          <div className="filters my-5"></div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">T-shirts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Shorts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Shirts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Hoodie</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Jeans</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
          </div>
          <div className="filters my-5"></div>
          <div className="flex items-center justify-between">
            <span className="satoshi font-[700] text-[#00000] text-[18px]">
              Price
            </span>
            <IoIosArrowUp />
          </div>
          <PriceSlider />
          <div className="filters my-5"></div>
          <div className="flex items-center justify-between">
            <span className="satoshi font-[700] text-[#00000] text-[18px]">
              Colors
            </span>
            <IoIosArrowUp />
          </div>
          <div className="grid grid-cols-5 gap-4 mt-4">
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
          <div className="filters my-5"></div>
          <div className="flex items-center justify-between">
            <span className="satoshi font-[700] text-[#00000] text-[18px]">
              Size
            </span>
            <IoIosArrowUp />
          </div>
          <div className="mt-[20px] flex flex-wrap gap-2">
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              XX-Small
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              X-Small
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              Small
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              Medium
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              Large
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              X-Large
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              XX-Large
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              3X-Large
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              4X-Large
            </span>
          </div>
          <div className="filters my-5"></div>
          <div className="flex items-center justify-between">
            <span className="satoshi font-[700] text-[#00000] text-[18px]">
              Dress Style
            </span>
            <IoIosArrowUp />
          </div>
          <div className="flex flex-col gap-4 my-[20px]">
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">T-shirts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Shorts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Shirts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Hoodie</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Jeans</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
          </div>
          <button className="bg-[#000000] text-white rounded-full py-[12px] w-full">
            Apply Filter{' '}
          </button>
        </div>
        <div className="w-full relative">
          <div className="flex justify-between items-center w-full flex-wrap">
            <span className="satoshi text-black text-[30px] font-bold max-[767px]:text-[20px]">
              Casual
            </span>
            <div className="flex gap-2 items-center">
              <p className="text-[#00000099] satoshi max-[767px]:text-[12px]"> 
                Showing 1-10 of 100 Products
              </p>
              <div className="flex items-center gap-2 max-[767px]:hidden">
                <span className="text-[#00000099] satoshi max-[767px]:text-[12px]">Sort by: </span>{' '}
                <span className="text-black flex gap-2 items-center satoshi max-[767px]:text-[12px] ">
                  Most Popular <IoIosArrowDown />
                </span>
              </div>
              <Image onClick={()=>setShowFilter(true)} className='hidden max-[767px]:block' src={RoundFill.src} width={RoundFill.width} height={RoundFill.height} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-3 max-[520px]:grid-cols-1 max-[767px]:grid-cols-2 max-[767px]:mx-auto  max-[991px]:grid-cols-2 max-[1200px]:grid-cols-3 gap-6 py-4">
            <a href='/users/productdetails' className="col cards mx-auto">
              <Image
                src={Shirt.src}
                alt="T-shirt with Tape Details"
                width={Shirt.width}
                height={Shirt.height}
                loading="lazy"
              />
              <h5>T-shirt with Tape Details</h5>
              <div className="flex gap-[1px] items-center">
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
                <span className="rating">
                  4.5/<span className="text-[#747171]">5</span>
                </span>
              </div>
              <span className='satoshi font-bold text-[22px] mt-2'>$145  </span>
            </a>

            <div className="col cards mx-auto">
              <Image
                src={Shirt.src}
                alt="T-shirt with Tape Details"
                width={Shirt.width}
                height={Shirt.height}
                loading="lazy"
              />
              <h5>T-shirt with Tape Details</h5>
              <div className="flex gap-[1px] items-center">
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
                <span className="rating">
                  4.5/<span className="text-[#747171]">5</span>
                </span>
              </div>
              <span className='satoshi font-bold text-[22px] mt-2'>$145  </span>
            </div>

            <div className="col cards mx-auto">
              <Image
                src={Shirt.src}
                alt="T-shirt with Tape Details"
                width={Shirt.width}
                height={Shirt.height}
                loading="lazy"
              />
              <h5>T-shirt with Tape Details</h5>
              <div className="flex gap-[1px] items-center">
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
                <span className="rating">
                  4.5/<span className="text-[#747171]">5</span>
                </span>
              </div>
              <span className='satoshi font-bold text-[22px] mt-2'>$145  </span>
            </div>

            <div className="col cards mx-auto">
              <Image
                src={Shirt.src}
                alt="T-shirt with Tape Details"
                width={Shirt.width}
                height={Shirt.height}
                loading="lazy"
              />
              <h5>T-shirt with Tape Details</h5>
              <div className="flex gap-[1px] items-center">
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
                <span className="rating">
                  4.5/<span className="text-[#747171]">5</span>
                </span>
              </div>
              <span className='satoshi font-bold text-[22px] mt-2'>$145  </span>
            </div>
             <div className="col cards mx-auto">
              <Image
                src={Shirt.src}
                alt="T-shirt with Tape Details"
                width={Shirt.width}
                height={Shirt.height}
                loading="lazy"
              />
              <h5>T-shirt with Tape Details</h5>
              <div className="flex gap-[1px] items-center">
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
                <span className="rating">
                  4.5/<span className="text-[#747171]">5</span>
                </span>
              </div>
              <span className='satoshi font-bold text-[22px] mt-2'>$145  </span>
            </div>

            <div className="col cards mx-auto">
              <Image
                src={Shirt.src}
                alt="T-shirt with Tape Details"
                width={Shirt.width}
                height={Shirt.height}
                loading="lazy"
              />
              <h5>T-shirt with Tape Details</h5>
              <div className="flex gap-[1px] items-center">
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
                <span className="rating">
                  4.5/<span className="text-[#747171]">5</span>
                </span>
              </div>
              <span className='satoshi font-bold text-[22px] mt-2'>$145  </span>
            </div>

            <div className="col cards mx-auto">
              <Image
                src={Shirt.src}
                alt="T-shirt with Tape Details"
                width={Shirt.width}
                height={Shirt.height}
                loading="lazy"
              />
              <h5>T-shirt with Tape Details</h5>
              <div className="flex gap-[1px] items-center">
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
                <span className="rating">
                  4.5/<span className="text-[#747171]">5</span>
                </span>
              </div>
              <span className='satoshi font-bold text-[22px] mt-2'>$145  </span>
            </div>

            <div className="col cards mx-auto">
              <Image
                src={Shirt.src}
                alt="T-shirt with Tape Details"
                width={Shirt.width}
                height={Shirt.height}
                loading="lazy"
              />
              <h5>T-shirt with Tape Details</h5>
              <div className="flex gap-[1px] items-center">
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
                <span className="rating">
                  4.5/<span className="text-[#747171]">5</span>
                </span>
              </div>
              <span className='satoshi font-bold text-[22px] mt-2'>$145  </span>
            </div>
          </div>
        </div>
        {showFilter && <div className="bg-[#00000033] h-[100vh] fixed top-0 left-0 w-[-webkit-fill-available]">
        <div className="filters rounded-[20px] p-5 w-[-webkit-fill-available] fixed h-[-webkit-fill-available] left-[10px] right-[10px]  top-[90px] z-10 bg-white overflow-auto">
          <div className="flex items-center justify-between">
            <span className="satoshi font-[700] text-[#00000] text-[18px]">
              Filters
            </span>
            <IoClose  fontSize={30} color='#00000066' onClick={()=>setShowFilter(false)} />
          </div>
          <div className="filters my-5"></div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">T-shirts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Shorts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Shirts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Hoodie</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Jeans</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
          </div>
          <div className="filters my-5"></div>
          <div className="flex items-center justify-between">
            <span className="satoshi font-[700] text-[#00000] text-[18px]">
              Price
            </span>
            <IoIosArrowUp />
          </div>
          <PriceSlider />
          <div className="filters my-5"></div>
          <div className="flex items-center justify-between">
            <span className="satoshi font-[700] text-[#00000] text-[18px]">
              Colors
            </span>
            <IoIosArrowUp />
          </div>
          <div className="grid grid-cols-5 gap-4 mt-4">
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
          <div className="filters my-5"></div>
          <div className="flex items-center justify-between">
            <span className="satoshi font-[700] text-[#00000] text-[18px]">
              Size
            </span>
            <IoIosArrowUp />
          </div>
          <div className="mt-[20px] flex flex-wrap gap-2">
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              XX-Small
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              X-Small
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              Small
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              Medium
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              Large
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              X-Large
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              XX-Large
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              3X-Large
            </span>
            <span className="text-[#00000099] bg-[#F0F0F0] px-[20px] py-[12px] rounded-full">
              4X-Large
            </span>
          </div>
          <div className="filters my-5"></div>
          
          <div className="flex flex-col gap-4 mb-[20px]">
            <div className="flex items-center justify-between">
            <span className="satoshi font-[700] text-[#00000] text-[18px]">
              Dress Style
            </span>
            <IoIosArrowUp />
          </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">T-shirts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Shorts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Shirts</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Hoodie</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#00000099] satoshi">Jeans</span>
              <MdOutlineArrowForwardIos
                fontSize={15}
                className="text-[#00000099]"
              />
            </div>
          </div>
          <button className="bg-[#000000] text-white rounded-full py-[12px] w-full">
            Apply Filter{' '}
          </button>
        </div></div>}
      </div>
    </section>
  );
};

export default Page;
