/** @format */

import React from 'react';
import { TbPhone } from 'react-icons/tb';
import { HiOutlineEnvelope } from "react-icons/hi2";

const Page = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 max-w-[1200px] mx-auto mt-16 max-[1200px]:mt-10">
      <div className="min-w-[200px] w-[30%] px-5 mx-auto max-[991px]:w-[50%] max-[667px]:w-[80%]">
        <div className="flex gap-2 items-center">
          <span className="bg-black p-2 text-white rounded-full">
            <TbPhone />
          </span>
          <span className="font-semibold text-[17px] satoshi">Call To Us</span>
        </div>
        <p className="satoshi tex-[10px] ">
          We are available 24/7, 7 days a week.
        </p>
        <p className="satoshi tex-[10px]">Phone: +8801611112222</p>
        <div className="filters my-5"></div>
        <div className="flex gap-2 items-center">
          <span className="bg-black p-2 text-white rounded-full">
            <HiOutlineEnvelope />
          </span>
          <span className="font-semibold text-[17px] satoshi">Write To US</span>
        </div>
        <p className="satoshi tex-[10px] ">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p className="satoshi tex-[10px]">Emails: customer@exclusive.com</p>
        <p className="satoshi tex-[10px]">Emails: support@exclusive.com</p>
      </div>
      <div className="min-w-[200px] w-[69%] px-5 mx-auto max-[991px]:w-[100%]">
        <div className="flex max-[667px]:flex-col  gap-3 items-center ">
          <input type="text" className="bg-[#F5F5F5] aspect-[4.5/1] outline-none w-[32.3%] pl-4 rounded-md satoshi max-[667px]:w-[50%] max-[667px]:aspect-[6/1] max-[580px]:w-[70%] max-[425px]:w-[90%] max-[375px]:w-[100%]" placeholder='Your Name *' />
          <input type="text" className="bg-[#F5F5F5] aspect-[4.5/1] outline-none w-[32.3%] pl-4 rounded-md satoshi max-[667px]:w-[50%] max-[667px]:aspect-[6/1] max-[580px]:w-[70%] max-[425px]:w-[90%] max-[375px]:w-[100%]"  placeholder='Your Email *'/>
          <input type="text" className="bg-[#F5F5F5] aspect-[4.5/1] outline-none w-[32.3%] pl-4 rounded-md satoshi max-[667px]:w-[50%] max-[667px]:aspect-[6/1] max-[580px]:w-[70%] max-[425px]:w-[90%] max-[375px]:w-[100%]" placeholder='Your Phone *'/>
        </div>
        <textarea name="" id="" className="bg-[#F5F5F5] aspect-[4/1] outline-none w-full pt-3 pl-4 rounded-md satoshi my-5 " placeholder='Your Massage '></textarea>
        <span className="bg-black text-white rounded-md satoshi aspect-[4/1] max-w-[200px] w-full flex justify-center items-center float-end ">Send Massage</span>
      </div>
    </div>
  );
};

export default Page;
