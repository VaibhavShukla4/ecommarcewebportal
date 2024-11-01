/** @format */
'use client';
import './index.css';
import dynamic from 'next/dynamic';
import { useState, useCallback } from 'react';
import useIntersectionObserver from '@/app/hooks/useIntersectionObserver'; // adjust the path

const SkeletonLoader = dynamic(() => import('./../../../components/SkeletonLoader/page'), {
  ssr: true,
});

const BannerComponent = dynamic(() => import('./../../../components/banner/page'), {
  ssr: true,
  loading: () => <SkeletonLoader />,
});

const BrandsComponent = dynamic(() => import('./../../../components/brands/page'), {
  ssr: true,
  loading: () => <SkeletonLoader />,
});

const NewArrivals = dynamic(() => import('./../../../components/newArrivals/page'), {
  ssr: true,
  loading: () => <SkeletonLoader />,
});

const TopSelling = dynamic(() => import('./../../../components/topSelling/page'), {
  ssr: true,
  loading: () => <SkeletonLoader />,
});

const Browse = dynamic(() => import('./../../../components/browse/page'), {
  ssr: true,
  loading: () => <SkeletonLoader />,
});

const HappyCustomer = dynamic(() => import('./../../../components/happycustomer/page'), {
  ssr: true,
  loading: () => <SkeletonLoader />,
});

const Page: React.FC = () => {
  const [isBannerVisible, setBannerVisible] = useState(false);
  const [isBrandsVisible, setBrandsVisible] = useState(false);
  const [isNewArrivalsVisible, setNewArrivalsVisible] = useState(false);
  const [isTopSellingVisible, setTopSellingVisible] = useState(false);
  const [isBrowseVisible, setBrowseVisible] = useState(false);
  const [isHappyCustomerVisible, setHappyCustomerVisible] = useState(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case 'banner':
            setBannerVisible(true);
            break;
          case 'brands':
            setBrandsVisible(true);
            break;
          case 'newArrivals':
            setNewArrivalsVisible(true);
            break;
          case 'topSelling':
            setTopSellingVisible(true);
            break;
          case 'browse':
            setBrowseVisible(true);
            break;
          case 'happyCustomer':
            setHappyCustomerVisible(true);
            break;
          default:
            break;
        }
      }
    });
  }, []);

  const observerOptions = {
    threshold: 0.1,
  };

  const bannerRef = useIntersectionObserver(handleIntersection, observerOptions);
  const brandsRef = useIntersectionObserver(handleIntersection, observerOptions);
  const newArrivalsRef = useIntersectionObserver(handleIntersection, observerOptions);
  const topSellingRef = useIntersectionObserver(handleIntersection, observerOptions);
  const browseRef = useIntersectionObserver(handleIntersection, observerOptions);
  const happyCustomerRef = useIntersectionObserver(handleIntersection, observerOptions);

  return (
    <section>
      <div id="banner" ref={bannerRef}>
        {isBannerVisible && <BannerComponent />}
      </div>
      <div id="brands" ref={brandsRef}>
        {isBrandsVisible && <BrandsComponent />}
      </div>
      <div id="newArrivals" ref={newArrivalsRef}>
        {isNewArrivalsVisible && <NewArrivals />}
      </div>
      <div id="topSelling" ref={topSellingRef}>
        {isTopSellingVisible && <TopSelling />}
      </div>
      <div id="browse" ref={browseRef}>
        {isBrowseVisible && <Browse />}
      </div>
      <div id="happyCustomer" ref={happyCustomerRef}>
        {isHappyCustomerVisible && <HappyCustomer />}
      </div>
    </section>
  );
};

export default Page;
