/** @format */

import React from 'react';
import dynamic from 'next/dynamic';
import Home from '@/app/users/home/page';
import Layout from '@/app/users/layout';


const page = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default page;
