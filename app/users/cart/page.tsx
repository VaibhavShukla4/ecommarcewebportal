/** @format */
'use client';
import React, { useState } from 'react';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { LuTag } from 'react-icons/lu';
import { FaArrowRight } from 'react-icons/fa6';
import PriceSlider from '@/components/PriceSlider/page';
import Shirt from '@/app/assets/arrivals/compressed/t-shirt-black.png';
import Minus from '@/app/assets/icons/minus.svg';
import Plus from '@/app/assets/icons/plus.svg';
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
        <MdOutlineArrowForwardIos
          fontSize={15}
          className="max-[767px]:text-[12px]"
        />
        Cart
      </div>
      <span className="integral_cf font-bold text-[30px]">Your cart</span>
      <div className="flex max-[991px]:flex-col gap-4 w-full mt-2">
        <div className="filters w-[740px] max-[991px]:w-[-webkit-fill-available] rounded-[20px]  p-5  h-[500px] overflow-y-scroll scrollbar-thin max-[991px]:mx-auto ">
          <div className="flex items-center gap-4 max-[667px]:flex-wrap">
            <Image
              src={Shirt.src}
              alt="T-shirt with Tape Details"
              width={Shirt.width}
              height={Shirt.height}
              loading="lazy"
              className="w-[20%] max-[667px]:w-[50%] max-[425px]:w-[75%] max-[375px]:w-[90%] max-[667px]:mx-auto"
            />
            <div className="flex justify-between gap-2 w-[-webkit-fill-available]">
              <div className="flex flex-col">
                <span className="font-bold satoshi text-[20px]">
                  Gradient Graphic T-shirt
                </span>
                <span className="satoshi font-normal text-[18px]">
                  Size:
                  <span className="satoshi font-normal text-[18px] text-[#00000099]">
                    Large
                  </span>
                </span>
                <span className="satoshi font-normal text-[18px]">
                  Color:
                  <span className="satoshi font-normal text-[18px] text-[#00000099]">
                    White
                  </span>
                </span>
                <span className="font-bold satoshi text-[20px] mt-3">$145</span>
              </div>
              <div className="flex flex-col items-end justify-between">
                <RiDeleteBin6Fill
                  fontSize={20}
                  color="red"
                  className="items-end"
                />
                <div className="bg-[#f0f0f0] px-[25px] py-[15px] flex justify-between w-[155px] rounded-full items-center">
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
              </div>
            </div>
          </div>
          <div className="filters my-5"></div>
          <div className="flex items-center gap-4 max-[667px]:flex-wrap">
            <Image
              src={Shirt.src}
              alt="T-shirt with Tape Details"
              width={Shirt.width}
              height={Shirt.height}
              loading="lazy"
              className="w-[20%] max-[667px]:w-[50%] max-[425px]:w-[75%] max-[375px]:w-[90%] max-[667px]:mx-auto"
            />
            <div className="flex justify-between gap-2 w-[-webkit-fill-available]">
              <div className="flex flex-col">
                <span className="font-bold satoshi text-[20px]">
                  Gradient Graphic T-shirt
                </span>
                <span className="satoshi font-normal text-[18px]">
                  Size:
                  <span className="satoshi font-normal text-[18px] text-[#00000099]">
                    Large
                  </span>
                </span>
                <span className="satoshi font-normal text-[18px]">
                  Color:
                  <span className="satoshi font-normal text-[18px] text-[#00000099]">
                    White
                  </span>
                </span>
                <span className="font-bold satoshi text-[20px] mt-3">$145</span>
              </div>
              <div className="flex flex-col items-end justify-between">
                <RiDeleteBin6Fill
                  fontSize={20}
                  color="red"
                  className="items-end"
                />
                <div className="bg-[#f0f0f0] px-[25px] py-[15px] flex justify-between w-[155px] rounded-full items-center">
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
              </div>
            </div>
          </div>
          <div className="filters my-5"></div>
          <div className="flex items-center gap-4 max-[667px]:flex-wrap">
            <Image
              src={Shirt.src}
              alt="T-shirt with Tape Details"
              width={Shirt.width}
              height={Shirt.height}
              loading="lazy"
              className="w-[20%] max-[667px]:w-[50%] max-[425px]:w-[75%] max-[375px]:w-[90%] max-[667px]:mx-auto"
            />
            <div className="flex justify-between gap-2 w-[-webkit-fill-available]">
              <div className="flex flex-col">
                <span className="font-bold satoshi text-[20px]">
                  Gradient Graphic T-shirt
                </span>
                <span className="satoshi font-normal text-[18px]">
                  Size:
                  <span className="satoshi font-normal text-[18px] text-[#00000099]">
                    Large
                  </span>
                </span>
                <span className="satoshi font-normal text-[18px]">
                  Color:
                  <span className="satoshi font-normal text-[18px] text-[#00000099]">
                    White
                  </span>
                </span>
                <span className="font-bold satoshi text-[20px] mt-3">$145</span>
              </div>
              <div className="flex flex-col items-end justify-between">
                <RiDeleteBin6Fill
                  fontSize={20}
                  color="red"
                  className="items-end"
                />
                <div className="bg-[#f0f0f0] px-[25px] py-[15px] flex justify-between w-[155px] rounded-full items-center">
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
              </div>
            </div>
          </div>
          <div className="filters my-5"></div>
          <div className="flex items-center gap-4 max-[667px]:flex-wrap">
            <Image
              src={Shirt.src}
              alt="T-shirt with Tape Details"
              width={Shirt.width}
              height={Shirt.height}
              loading="lazy"
              className="w-[20%] max-[667px]:w-[50%] max-[425px]:w-[75%] max-[375px]:w-[90%] max-[667px]:mx-auto"
            />
            <div className="flex justify-between gap-2 w-[-webkit-fill-available]">
              <div className="flex flex-col">
                <span className="font-bold satoshi text-[20px]">
                  Gradient Graphic T-shirt
                </span>
                <span className="satoshi font-normal text-[18px]">
                  Size:
                  <span className="satoshi font-normal text-[18px] text-[#00000099]">
                    Large
                  </span>
                </span>
                <span className="satoshi font-normal text-[18px]">
                  Color:
                  <span className="satoshi font-normal text-[18px] text-[#00000099]">
                    White
                  </span>
                </span>
                <span className="font-bold satoshi text-[20px] mt-3">$145</span>
              </div>
              <div className="flex flex-col items-end justify-between">
                <RiDeleteBin6Fill
                  fontSize={20}
                  color="red"
                  className="items-end"
                />
                <div className="bg-[#f0f0f0] px-[25px] py-[15px] flex justify-between w-[155px] rounded-full items-center">
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
              </div>
            </div>
          </div>
        </div>
        <div className="filters w-[740px] max-[991px]:w-[-webkit-fill-available] rounded-[20px]  p-5  h-[max-content] max-[991px]:mx-auto ">
          <span className="satoshi font-bold text-[25px] ">Order Summary</span>
          <div className="flex justify-between gap-2 w-[-webkit-fill-available] mt-3">
            <span className="satoshi font-normal text-[#00000099] text-[20px]">
              Subtotal
            </span>
            <span className="satoshi font-bold text-[22px]">$565</span>
          </div>
          <div className="flex justify-between gap-2 w-[-webkit-fill-available] mt-3">
            <span className="satoshi font-normal text-[#00000099] text-[20px]">
              Discount (-20%)
            </span>
            <span className="satoshi font-bold text-[22px] text-[#FF3333]">
              -$113
            </span>
          </div>
          <div className="flex justify-between gap-2 w-[-webkit-fill-available] mt-3">
            <span className="satoshi font-normal text-[#00000099] text-[20px]">
              Delivery Fee
            </span>
            <span className="satoshi font-bold text-[22px]">$15</span>
          </div>
          <div className="filters my-5"></div>
          <div className="flex justify-between gap-2 w-[-webkit-fill-available] mt-3">
            <span className="satoshi font-normal text-[20px]">Total</span>
            <span className="satoshi font-bold text-[26px]">$467</span>
          </div>
          <div className="flex max-[425px]:flex-wrap gap-2 max-[425px]:gap-8 justify-between mt-3">
            <div className="bg-[#F0F0F0] max-[425px]:mx-auto rounded-full flex items-center gap-3 px-[20px] py-[14px] w-[65%] max-[425px]:w-full">
              <LuTag color="#00000066" fontSize={20} />
              <span className="text-[#00000066] satoshi text-[18px]">
                Add promo code
              </span>
            </div>
            <span className="bg-[#000000] max-[425px]:mx-auto text-white satoshi px-[20px] py-[14px] rounded-full w-[33%] text-center max-[425px]:w-[70%]">
              Apply
            </span>
          </div>
          <div className="size-btn max-w-[-webkit-fill-available!important] mt-5">
            <button className="w-[-webkit-fill-available] max-w-[-webkit-fill-available!important] flex items-center justify-center gap-2">
              <span className="">Go to Checkout</span>
              <FaArrowRight fontSize={22} />
            </button>
          </div>
        </div>
        {showFilter && (
          <div className="bg-[#00000033] h-[100vh] fixed top-0 left-0 w-[-webkit-fill-available]">
            <div className="filters rounded-[20px] p-5 w-[-webkit-fill-available] fixed h-[-webkit-fill-available] left-[10px] right-[10px]  top-[90px] z-10 bg-white overflow-auto">
              <div className="flex items-center justify-between">
                <span className="satoshi font-[700] text-[#00000] text-[18px]">
                  Filters
                </span>
                <IoClose
                  fontSize={30}
                  color="#00000066"
                  onClick={() => setShowFilter(false)}
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
                Apply Filter
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
