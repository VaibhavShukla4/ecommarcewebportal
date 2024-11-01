/** @format */
'use client';

import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import SkeletonLoader from '../../components/SkeletonLoader/page';

const HeaderComponent = dynamic(() => import('../../components/header/page'), {
  loading: () => <SkeletonLoader />,
});

const FooterComponent = dynamic(() => import('../../components/footer/page'), {
  loading: () => <SkeletonLoader />,
});

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="root">
      <HeaderComponent />
      <div className="page-content">{children}</div>
      <FooterComponent />
    </div>
  );
};

export default Layout;
