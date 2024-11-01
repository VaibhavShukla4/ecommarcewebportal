/** @format */

import React, {  useState } from 'react';
import './index.css';
import BigImage from '@/app/assets/arrivals/compressed/shirtbig.png';
import FirstImage from '@/app/assets/arrivals/compressed/shirtbig.png';
import SecondImage from '@/app/assets/arrivals/compressed/shirtblacklogo.png';
import ThreeImage from '@/app/assets/arrivals/compressed/shirtbrown.png';
import FullStar from '@/app/assets/arrivals/Full-star.svg';
import HalfStar from '@/app/assets/arrivals/Half-star.svg';
import Minus from '@/app/assets/icons/minus.svg';
import Plus from '@/app/assets/icons/plus.svg';
import Image from 'next/image';
const page = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsChecked(e.target.checked);
  };

  console.log(isChecked);
  return (
    <section className="product-details">
      <div className="product-image-section">
        <div className="three-image">
          <Image
            src={FirstImage.src}
            alt=""
            width={FirstImage.width}
            height={FirstImage.height}
          />
          <Image
            src={SecondImage.src}
            alt=""
            width={SecondImage.width}
            height={SecondImage.height}
          />
          <Image
            src={ThreeImage.src}
            alt=""
            width={ThreeImage.width}
            height={ThreeImage.height}
          />
        </div>
        <div className="big-image">
          <Image
            src={BigImage.src}
            alt=""
            width={BigImage.width}
            height={BigImage.height}
            className="large-img"
            style={{
              maxWidth: '-webkit-fill-available',
              objectFit: 'contain',
              height: 'fit-content',
            }}
          />
        </div>
      </div>
      <div className="product-details-section">
        <h3>One Life Graphic T-shirt</h3>
        <div className="star-rating flex">
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
        <div className="price">
          <h3>$120</h3>
          <h3 id="discount">$120</h3>
          <span>-20%</span>
        </div>
        <p>
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="break-line"></div>
        <span>Select Colors</span>
        <div className="select-color">
          <div className="check-color">
            <label className="container">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <div
                className="checkmark"
                style={
                  isChecked
                    ? { backgroundColor: '#4F4631' }
                    : { backgroundColor: '#e8e8e8' }
                }
              ></div>
            </label>
          </div>
          <div className="check-color">
            <label className="container">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <div
                className="checkmark"
                style={
                  isChecked
                    ? { backgroundColor: '#31344F' }
                    : { backgroundColor: '#e8e8e8' }
                }
              ></div>
            </label>
          </div>
          <div className="check-color">
            <label className="container">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <div
                className="checkmark"
                style={
                  isChecked
                    ? { backgroundColor: '#31344F' }
                    : { backgroundColor: '#e8e8e8' }
                }
              ></div>
            </label>
          </div>
        </div>
        <div className="break-line"></div>
        <span>Choose Size</span>
        <div className="size-btn">
          <span>Small</span>
          <span>Medium</span>
          <span>Large</span>
          <span>X-Large</span>
        </div>
        <div className="break-line"></div>
        <div className="size-btn">
          <div className="quantity">
            <span>
              <Image
                src={Minus.src}
                width={Minus.width}
                height={Minus.height}
                alt=""
              />
            </span>
            <span>1</span>
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
    </section>
  );
};

export default page;
