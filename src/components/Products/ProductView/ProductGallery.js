import { useRef, useState, useEffect } from 'react';

import classes from './ProductGallery.module.scss';

import GalleryBtns from '../../UI/GalleryBtns';

const ProductGallery = props => {
  const imgRef = useRef();

  const [selectedImg, setSelectedImg] = useState('1');

  const clickImgHandler = e => {
    setSelectedImg(e.target.dataset.color);
  };

  const galleryRef = useRef();

  const scrollGalleryHandler = dir => {
    galleryRef.current.scrollLeft += imgRef.current.clientWidth * dir;
  };

  let imagesJSX;

  if (props.product.category === 'jewelery') {
    imagesJSX = (
      <img
        src={props.product.image}
        alt={props.product.title}
        className={`${classes.img} ${classes.selected} ${classes.solo}`}
        data-color="natural"
        ref={imgRef}
      />
    );
    // for regular products create this markup
  } else {
    imagesJSX = [...Array(4)].map((n, i) => (
      <img
        key={i}
        src={props.product.image}
        alt={props.product.title}
        className={`${classes.img} ${
          i + 1 == selectedImg ? classes.selected : ''
        }`}
        data-color={i + 1}
        ref={imgRef}
        onClick={clickImgHandler}
      />
    ));
  }

  return (
    <div className={classes.productView__gallery}>
      <div className={classes.images} ref={galleryRef}>
        {imagesJSX}
      </div>
      <img
        src={props.product.image}
        alt={props.product.title}
        className={`${classes.img} ${classes['img--big']}`}
        data-color={selectedImg}
      />
      {props.product.category !== 'jewelery' ? (
        <GalleryBtns onClickBtn={scrollGalleryHandler} />
      ) : (
        ''
      )}
    </div>
  );
};

export default ProductGallery;
