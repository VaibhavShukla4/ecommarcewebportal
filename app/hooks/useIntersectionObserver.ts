/** @format */

import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
  const ref = useRef(null);

  useEffect(() => {
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
