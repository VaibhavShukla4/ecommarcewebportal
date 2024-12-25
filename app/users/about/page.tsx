/** @format */
import Image from "next/image";
import React from "react";
import AboutShop from "@/app/assets/about/about-shop.webp";
import { CiShop, CiDollar } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbBasketDollar,TbTruckDelivery  } from "react-icons/tb";
import { RiCustomerServiceLine,RiShieldCheckLine  } from "react-icons/ri";

const Page = () => {
  return (
    <div>
      <div className="max-w-[1200px] w-full flex max-[767px]:flex-wrap items-center gap-8 mx-auto mt-16">
        <div className="w-[50%] px-14 max-[1200px]:px-5 max-[767px]:w-full">
          <span className="satoshi font-bold text-[35px]">Our Story</span>
          <p className="satoshi font-normal text-[14px] mb-5 mt-4">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a
            wide range of tailored marketing, data, and service solutions,
            Exclusive has 10,500 sellers and 300 brands and serves 3 million
            customers across the region.
          </p>
          <p className="satoshi font-normal text-[14px]">
            Exclusive has more than 1 Million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>
        <Image
          className="rounded-md w-[50%] max-[1200px]:px-5 max-[767px]:w-full"
          src={AboutShop.src}
          alt=""
          width={AboutShop.width}
          height={AboutShop.height}
        />
      </div>
      <div className="flex flex-wrap justify-center max-w-[1200px] w-full mx-auto gap-5 my-5">
        {[
          {
            icon: <CiShop fontSize={40} />,
            number: "10.5k",
            description: "Sellers active in our site",
          },
          {
            icon: <CiDollar fontSize={40} />,
            number: "33k",
            description: "Monthly Product Sale",
          },
          {
            icon: <IoBagHandleOutline fontSize={40} />,
            number: "45.5k",
            description: "Customers active on our site",
          },
          {
            icon: <TbBasketDollar fontSize={40} />,
            number: "25k",
            description: "Annual gross sale on our site",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group border-gray aspect-[1.2/1] max-w-[285px] w-full rounded-lg flex flex-col justify-center items-center bg-white hover:bg-[#DB4444] transition-all"
          >
            <span className="bg-[#d7d5dd] p-2 rounded-full w-[fit-content] block group-hover:bg-[#E07575]">
              <span className="bg-black p-2 rounded-full w-[fit-content] block group-hover:bg-white">
                <item.icon.type
                  fontSize={40}
                  className="text-white group-hover:text-black"
                />
              </span>
            </span>
            <span className="font-bold text-[28px] text-black group-hover:text-white">
              {item.number}
            </span>
            <p className="text-black satoshi group-hover:text-white">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center max-w-[1200px] w-full mx-auto gap-20 my-5">
        <div className="flex flex-col justify-center items-center">
          <span className="bg-[#d7d5dd] p-2 rounded-full w-[fit-content] block group-hover:bg-[#E07575]">
              <span className="bg-black p-2 rounded-full w-[fit-content] block group-hover:bg-white">
                <TbTruckDelivery  fontSize={40}
                  className="text-white group-hover:text-black"/>
              </span>
            </span>
            <span className="font-bold text-[18px] text-black group-hover:text-white">
              FREE AND FAST DELIVERY
            </span>
            <p className="text-black satoshi group-hover:text-white text-[12px]">
             Free delivery for all orders over $140
            </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="bg-[#d7d5dd] p-2 rounded-full w-[fit-content] block group-hover:bg-[#E07575]">
              <span className="bg-black p-2 rounded-full w-[fit-content] block group-hover:bg-white">
                <RiCustomerServiceLine  fontSize={40}
                  className="text-white group-hover:text-black"/>
              </span>
            </span> <span className="font-bold text-[18px] text-black group-hover:text-white">
              FREE AND FAST DELIVERY
            </span>
            <p className="text-black satoshi group-hover:text-white text-[12px]">
             Free delivery for all orders over $140
            </p>
        </div> <div className="flex flex-col justify-center items-center">
          <span className="bg-[#d7d5dd] p-2 rounded-full w-[fit-content] block group-hover:bg-[#E07575] ">
              <span className="bg-black p-2 rounded-full w-[fit-content] block group-hover:bg-white">
                <RiShieldCheckLine  fontSize={40}
                  className="text-white group-hover:text-black"/>
              </span>
            </span> <span className="font-bold text-[18px] text-black group-hover:text-white">
              FREE AND FAST DELIVERY
            </span>
            <p className="text-black satoshi group-hover:text-white text-[12px]">
             Free delivery for all orders over $140
            </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
