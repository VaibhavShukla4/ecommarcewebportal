/** @format */
'use client';
import { useState } from 'react';
import './index.css';

const Page = () => {
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    // Update the state with new values from the input fields
    setLogin({
      ...login,
      [e.target.name]: e.target.value, // Use name attribute to identify the field
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted with:', login);
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            className="email"
            value={login.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="password"
            value={login.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Page;
