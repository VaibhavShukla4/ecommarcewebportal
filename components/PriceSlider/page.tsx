"use client"
import React, { useState } from "react";

const PriceRangeSlider = ({ min = 0, max = 1000 }) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

   const [products] = useState([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
    { id: 4, name: "Product D", price: 400 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
console.log(filteredProducts)
  const handleRangeChange = ([min, max]) => {
    const filtered = products.filter(
      (product) => product.price >= min && product.price <= max
    );
    setFilteredProducts(filtered);
  };
  const handleMinChange = (e: { target: { value: any; }; }) => {
    const value = Math.min(Number(e.target.value), maxValue - 1); // Ensure min is less than max
    setMinValue(value);
    handleRangeChange([value, maxValue]);
  };

  const handleMaxChange = (e: { target: { value: any; }; }) => {
    const value = Math.max(Number(e.target.value), minValue + 1); // Ensure max is greater than min
    setMaxValue(value);
    handleRangeChange([minValue, value]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3>Price</h3>
      <div style={{ position: "relative", height: "40px" }}>
        {/* Range Slider Track */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            width: "100%",
            height: "8px",
            background: "#ddd",
            borderRadius: "4px",
            transform: "translateY(-50%)",
          }}
        />
        {/* Highlighted Range */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: `${((minValue - min) / (max - min)) * 100}%`,
            width: `${((maxValue - minValue) / (max - min)) * 100}%`,
            height: "8px",
            background: "black",
            borderRadius: "4px",
            transform: "translateY(-50%)",
          }}
        />
        {/* Min Range Handle */}
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
            pointerEvents: "none",
            appearance: "none",
            background: "transparent",
            zIndex: 2,
          }}
        />
        {/* Max Range Handle */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
            pointerEvents: "none",
            appearance: "none",
            background: "transparent",
            zIndex: 3,
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>${minValue}</span>
        <span>${maxValue}</span>
      </div>
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          background: black;
          border-radius: 50%;
          cursor: pointer;
          pointer-events: auto;
        }
        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          background: black;
          border-radius: 50%;
          cursor: pointer;
        }
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
        }
      `}</style>
    </div>
  );
};

export default PriceRangeSlider;
