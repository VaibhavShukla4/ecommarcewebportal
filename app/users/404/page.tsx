import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[400px] '>
      <h1 className="satoshi font-bold text-[80px] max-[580px]:text-[40px]">404 Not Found</h1>
      <p className="satoshi max-[580px]:text-[10px]">Your visited page not found. You may go home page.</p>
      <Link href={'/'} className='bg-black max-w-[300px] w-full text-white aspect-[4.5/1] rounded-lg mt-16 flex justify-center items-center'>Back to home page</Link>
    </div>
  )
}

export default Page