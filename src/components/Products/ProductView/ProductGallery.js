import React, { useState, useRef } from 'react';

import classes from './ProductGallery.module.scss';

import GalleryBtns from '../../UI/GalleryBtns';

import placeholder from '../../../assets/placeholder.jpg';

import useGalleryObserver from '../../../hooks/use-galleryObserver';
import useScrollObserver from '../../../hooks/use-scrollObserver';

const ProductGallery = props => {
  // observers used to show and hide gallery btns
  const [
    firstComponentRef,
    lastComponentRef,
    galleryRef,
    firstComponentIsIntersecting,
    lastComponentIsIntersecting,
  ] = useGalleryObserver(props.product.category);

  // observer used to lazy load imgs - component ref is passed to a tiny div that sits on the top left of gallery, when it intersects (immideatelly afte rmodal opens) - it starts loading real product img
  const [isIntersecting, componentRef] = useScrollObserver();

  // used for desktop screen size gallery
  const [selectedImg, setSelectedImg] = useState('1');

  // switch img in desktop size gallery
  const clickImgHandler = e => {
    setSelectedImg(e.target.dataset.color);
  };

  // scroll the gallery by the img width in the correct direction
  const scrollGalleryHandler = dir => {
    galleryRef.current.scrollLeft +=
      firstComponentRef.current.clientWidth * dir;
  };

  // scroll gallery to left - used when first img is loaded
  const resetGalleryScrollHandler = () => {
    galleryRef.current.scrollLeft = 0;
  };

  let imagesJSX;

  // for jewelery only render one img
  if (props.product.category === 'jewelery') {
    imagesJSX = (
      <img
        src={isIntersecting ? props.product.image : placeholder}
        alt={props.product.title}
        className={`${classes.img} ${classes.selected} ${classes.solo}`}
        data-color="natural"
        ref={firstComponentRef}
      />
    );
    // for all other products create this markup
  } else {
    imagesJSX = [...Array(4)].map((n, i, arr) => {
      if (i === 0) {
        // give the first and last img their refs
        return (
          <img
            key={i}
            src={isIntersecting ? props.product.image : placeholder}
            alt={props.product.title}
            className={`${classes.img} ${
              i + 1 == selectedImg ? classes.selected : ''
            }`}
            data-color={i + 1}
            ref={firstComponentRef}
            onClick={clickImgHandler}
            onLoad={resetGalleryScrollHandler}
          />
        );
      } else if (i === arr.length - 1) {
        return (
          <img
            key={i}
            src={isIntersecting ? props.product.image : placeholder}
            alt={props.product.title}
            className={`${classes.img} ${
              i + 1 == selectedImg ? classes.selected : ''
            }`}
            data-color={i + 1}
            ref={lastComponentRef}
            onClick={clickImgHandler}
          />
        );
      } else {
        return (
          <img
            key={i}
            src={isIntersecting ? props.product.image : placeholder}
            alt={props.product.title}
            className={`${classes.img} ${
              i + 1 == selectedImg ? classes.selected : ''
            }`}
            data-color={i + 1}
            onClick={clickImgHandler}
          />
        );
      }
    });
  }

  return (
    <div className={classes.productView__gallery}>
      <div className={classes.images} ref={galleryRef}>
        {imagesJSX}
        <div ref={componentRef} className={classes.refEle}></div>
      </div>
      <img
        src={isIntersecting ? props.product.image : placeholder}
        alt={props.product.title}
        className={`${classes.img} ${classes['img--big']}`}
        data-color={selectedImg}
      />
      {props.product.category !== 'jewelery' ? (
        <GalleryBtns
          onClickBtn={scrollGalleryHandler}
          hideLeftBtn={firstComponentIsIntersecting}
          hideRightBtn={lastComponentIsIntersecting}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default ProductGallery;
