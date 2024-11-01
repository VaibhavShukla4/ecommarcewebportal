'use client'
import { useEffect, useRef } from 'react';

const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  // Specify HTMLDivElement to match the type expected in the component
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver is not supported in this browser.');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      callback(entries);
    }, options);

    const { current } = ref;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [callback, options]);

  return ref;
};

export default useIntersectionObserver;
