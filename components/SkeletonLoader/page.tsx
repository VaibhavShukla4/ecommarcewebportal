/** @format */

// SkeletonLoader.tsx
import React from 'react';
import './index.css'; // Import any styling

interface SkeletonLoaderProps {
  height?: string;
  width?: string;
}

const Page: React.FC<SkeletonLoaderProps> = ({ height = '100px', width = '100%' }) => {
  return (
    <div
      className="skeleton-loader"
      style={{ height, width }}
    ></div>
  );
};

export default Page;
