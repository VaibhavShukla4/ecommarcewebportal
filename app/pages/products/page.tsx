/** @format */
'use client';
import { useEffect, useState } from 'react';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/product');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setData(responseData.data); // Update state with fetched data
      console.log(responseData); // Logging fetched data for debugging
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Compony</th>
            <th>Color</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th>{item.name}</th>
              <th>{item.price}</th>
              <th>{item.compony}</th>
              <th>{item.color}</th>
              <th>{item.category}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
