import Image from 'next/image'
import React from 'react'
import AboutShop from '@/app/assets/about/about-shop.webp'
const Page = () => {
  return (
    <div>
      <div className="max-w-[1200px] w-full flex max-[767px]:flex-wrap items-center gap-8 mx-auto mt-16">
        <div className="w-[50%] px-14 max-[1200px]:px-5 max-[767px]:w-full">
          <span className="satoshi font-bold text-[35px]">Our Story</span>
          <p className="satoshi font-normal text-[14px] mb-5 mt-4">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className="satoshi font-normal text-[14px]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <Image className='rounded-md w-[50%] max-[1200px]:px-5  max-[767px]:w-full' src={AboutShop.src}  alt='' width={AboutShop.width} height={AboutShop.height}/>
      </div>
      <div className=""></div>
    </div>
  )
}

export default Page