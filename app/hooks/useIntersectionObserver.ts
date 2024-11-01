import { useEffect, useRef } from 'react';

// Define types for the callback and options parameters
const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<Element | null>(null);

  useEffect(() => {
    // Check if IntersectionObserver is supported
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
