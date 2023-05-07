import { useState, useRef, useEffect } from 'react';

const useGalleryObserver = (
  // default category and options (root is always galleryRef in this case)
  category = null,
  threshold = 1,
  rootMargin = '0px'
) => {
  // first img in gallery
  const firstComponentRef = useRef();
  //last img in gallery
  const lastComponentRef = useRef();
  const galleryRef = useRef();

  const [firstComponentIsIntersecting, setFirstComponentIsIntersecting] =
    useState(false);
  const [lastComponentIsIntersecting, setLastComponentIsIntersecting] =
    useState(false);

  useEffect(() => {
    // jewelery products only have one img
    if (category === 'jewelery') return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // check for when first or last img are intersecting and set state
          if (entry.target === firstComponentRef.current)
            setFirstComponentIsIntersecting(entry.isIntersecting);
          if (entry.target === lastComponentRef.current)
            setLastComponentIsIntersecting(entry.isIntersecting);
        });
      },
      {
        root: galleryRef.current,
        threshold: 1,
        rootMargin: '0px',
      }
    );

    [firstComponentRef, lastComponentRef].forEach(comp =>
      observer.observe(comp.current)
    );

    return () => observer.disconnect();
  }, [firstComponentRef, lastComponentRef, galleryRef]);

  return [
    firstComponentRef,
    lastComponentRef,
    galleryRef,
    firstComponentIsIntersecting,
    lastComponentIsIntersecting,
  ];
};

export default useGalleryObserver;
