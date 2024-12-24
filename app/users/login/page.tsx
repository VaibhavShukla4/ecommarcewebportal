"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Cart from '@/app/assets/login/cart.webp'
import Google from '@/app/assets/login/google.svg'
const Page = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='flex max-w-[1280px] mx-auto mt-16 max-[767px]:mt-10'>
      <Image src={Cart.src} alt='Cart' width={Cart.width} height={Cart.height} className='w-[50%] block max-[991px]:hidden rounded-md' />
      <div className="flex justify-center w-[50%] max-[991px]:w-[70%] max-[767px]:w-[90%] max-[667px]:w-[95%] mx-auto">
       {show ? <div className="flex flex-col w-[60%] justify-center max-[767px]:w-[75%] max-[425px]:w-[90%]">
         <span className='satoshi text-[28px] my-2 font-bold'>Create an account</span>
        <span className='text-[14px] satoshi'>Enter your details below</span>
        <div className=" flex flex-col gap-5 py-3">
          <input type="text" placeholder='Name' className='border-bottom outline-none w-full aspect-[7/1]' />
          <input type="text" placeholder='Email or Phone Number' className='border-bottom outline-none w-full aspect-[7/1]'/>
          <input type="text" placeholder='Password'className='border-bottom outline-none w-full aspect-[7/1]'/>
          <button className='border border-[gray] bg-black text-white satoshi aspect-[7/1] rounded-md'>Create Account</button>
          <button className='border border-[gray]  satoshi aspect-[7/1] rounded-md flex justify-center items-center gap-2 bg-white'><Image src={Google.src} alt='Google' width={Google.width} height={Google.height} /> Sign up with Google</button>
          <div className="flex justify-center items-center gap-2"><span className='text-[#5e5c5c] satoshi'>Already have account?</span><span className='text-[#302f2f] satoshi font-semibold cursor-pointer' onClick={()=>setShow(false)}>Log in</span></div>
        </div>
       </div>:
       <div className="flex flex-col w-[60%] justify-center max-[767px]:w-[75%] max-[425px]:w-[90%]">
         <span className='satoshi text-[28px] my-2 font-bold'>Log in to Exclusive</span>
        <span className='text-[14px] satoshi'>Enter your details below</span>
        <div className=" flex flex-col gap-5 py-3">
          <input type="text" placeholder='Email or Phone Number' className='border-bottom outline-none w-full aspect-[7/1]'/>
          <input type="text" placeholder='Password'className='border-bottom outline-none w-full aspect-[7/1]'/>
          <div className="flex items-center gap-3"><button className='border border-[gray] bg-black text-white satoshi aspect-[3/1] rounded-md w-[50%] '>Create Account</button><span className="text-[#DB4444] mx-auto">Forget Password?</span></div>
           <div className="flex justify-center items-center gap-2"><span className='text-[#5e5c5c] satoshi'>Don't have account?</span><span className='text-[#302f2f] satoshi font-semibold cursor-pointer' onClick={()=>setShow(true)}>Sign up</span></div>
        </div>
       </div>}
      </div>
    </div>
  )
}

export default Page