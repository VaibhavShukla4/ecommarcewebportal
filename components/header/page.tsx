/** @format */
'use client';
import './index.css';
import DownArrow from '@/app/assets/header/DownArrow';
import SearchIcon from '@/app/assets/header/SearchIcon';
import Cart from '@/app/assets/header/cart';
import Profile from '@/app/assets/header/profile';
import Menu from '@/app/assets/header/menu';
import Close from '@/app/assets/header/close';
import { useState } from 'react';

const Page : React.FC= () => {
  const [showHeader, setShowHeader] = useState(false);
  console.log(showHeader);

  return (
    <header>
      <section className="big-header">
        <div className="logo">
          <h3>SHOP.CO</h3>
        </div>
        <div className="navigation">
          <span className="flex ">
            Shop &nbsp;
            <span className="flex items-center">
              <DownArrow />
            </span>
          </span>
          <span>On Sale</span>
          <span>New Arrivals</span>
          <span>Brands</span>
        </div>
        <div className="search-bar">
          <span>
            <SearchIcon />
          </span>
          <input type="text" placeholder="Search for products..." />
        </div>
        <div className="profile-cart-section">
          <span>
            <Cart />
          </span>
          <span>
            <Profile />
          </span>
        </div>
      </section>
      <section className="small-header">
        <div className="logo flex items-center">
          <span onClick={() => setShowHeader(true)}>
            <Menu />
          </span>
          <h3>SHOP.CO</h3>
        </div>

        <div className="profile-cart-section">
          <span>
            <Cart />
          </span>
          <span>
            <Profile />
          </span>
        </div>
      </section>
      {showHeader && (
        <section className="entire-header">
          <div className="logo flex justify-between items-center">
            <h3 style={{ paddingInline: '30px' }}>SHOP.CO</h3>
            <span onClick={() => setShowHeader(false)}>
              <Close />
            </span>
          </div>
          <div className="flex justify-center">
            <div className="search-bar">
              <span>
                <SearchIcon />
              </span>
              <input type="text" placeholder="Search for products..." />
            </div>
          </div>
          <div className="navigation">
            <span className="flex ">
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
            <span>
              <Cart />
            </span>
            <span>
              <Profile />
            </span>
          </div>
        </section>
      )}
    </header>
  );
};

export default Page;
