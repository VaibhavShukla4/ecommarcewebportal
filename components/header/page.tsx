/** @format */
'use client';
import './index.css';
import DownArrow from '@/app/assets/header/DownArrow';
import SearchIcon from '@/app/assets/header/SearchIcon';
import Cart from '@/app/assets/header/cart';
import Profile from '@/app/assets/header/profile';
import Menu from '@/app/assets/header/menu';
import Close from '@/app/assets/header/close';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Page: React.FC = () => {
    const [showHeader, setShowHeader] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter()
    const handleOpenSidebar = () => {
        setIsAnimating(true); // Start animation
        setShowHeader(true); // Set to open state
    };

    const handleCloseSidebar = () => {
        setIsAnimating(true); // Start animation
        setShowHeader(false); // Set to close state
    };

    useEffect(() => {
        if (isAnimating) {
            const timeout = setTimeout(() => {
                setIsAnimating(false); // Stop animation after transition
            }, 400); // Match with CSS transition duration
            return () => clearTimeout(timeout);
        }
    }, [isAnimating]);

  console.log(showHeader);

  return (
    <header>
      <section className="big-header">
        <div className="logo">
          <h3 className='integral_cf cursor-pointer' onClick={() => router.push('/')}>SHOP.CO</h3>
        </div>
        <div className="navigation">
          <Link className="flex" href={'/users/comming'}>
            Shop &nbsp;
            <span className="flex items-center">
              <DownArrow />
            </span>
          </Link>
          <Link href={'/users/comming'}>On Sale</Link>
          <Link href={'/users/comming'}>New Arrivals</Link>
          <Link href={'/users/comming'}>Brands</Link>
        </div>
        <div className="search-bar">
          <span><SearchIcon /></span>
          <input type="text" placeholder="Search for products..." />
        </div>
        <div className="profile-cart-section">
          <span className='cursor-pointer' onClick={() => router.push('/users/cart')}><Cart /></span>
          <span><Profile /></span>
        </div>
      </section>

      <section className="small-header">
        <div className="logo flex items-center">
          <span onClick={handleOpenSidebar}>
            <Menu />
          </span>
          <h3 className='integral_cf'>SHOP.CO</h3>
        </div>
        <div className="profile-cart-section">
          <span><Cart /></span>
          <span><Profile /></span>
        </div>
      </section>

      <section className={`entire-header ${showHeader ? 'open' : 'close'}`}>
        <div className="logo flex justify-between items-center">
          <h3 style={{ paddingInline: '30px' }}>SHOP.CO</h3>
          <span onClick={handleCloseSidebar}>
            <Close />
          </span>
        </div>
        <div className="flex justify-center">
          <div className="search-bar">
            <span><SearchIcon /></span>
            <input type="text" placeholder="Search for products..." />
          </div>
        </div>
        <div className="navigation">
          <span className="flex">
            Shop &nbsp;
            <span className="flex items-center">
              <DownArrow />
            </span>
          </span>
          <span>On Sale</span>
          <span>New Arrivals</span>
          <span>Brands</span>
        </div>
        <div className="profile-cart-sections">
          <span><Cart /></span>
          <span><Profile /></span>
        </div>
      </section>
    </header>
  );
};

export default Page;
