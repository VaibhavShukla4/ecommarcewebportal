/** @format */
'use client';
import { useEffect, useState } from 'react';

interface Product {
  name: string;
  price: number;
  compony: string; // Assuming `compony` is the intended spelling; change to `company` if needed
  color: string;
  category: string;
}

const Page: React.FC = () => {
  const [data, setData] = useState<Product[]>([]); // Apply Product[] type to data state

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
      console.error('Error fetching data:', error);
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
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.compony}</td>
              <td>{item.color}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
