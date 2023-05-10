import { useState, useEffect, useRef } from 'react';

const useScrollObserver = (
  // default options obj if none is passed to the hook
  options = {
    root: null,
    threshold: 0,
    rootMargin: '0px',
  }
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // when entry starts intersecting, set state and unobserve entry
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(componentRef.current);

    return () => observer.disconnect();
  }, [isIntersecting, componentRef, options]);

  return [isIntersecting, componentRef];
};

export default useScrollObserver;
