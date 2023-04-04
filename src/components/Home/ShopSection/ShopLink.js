import React, { useRef } from 'react';

import classes from './ShopLink.module.scss';

const ShopLink = props => {
  const imgRef = useRef();

  const setImgWidthHandler = () => {
    props.onSetImgWidth(imgRef.current.clientWidth);
  };

  window.addEventListener('resize', setImgWidthHandler);
  return (
    <a className={classes.shopLink}>
      <div className={classes.filling}></div>
      <img src={props.src} ref={imgRef} onLoad={setImgWidthHandler}></img>
      <h3>{props.linkName}</h3>
    </a>
  );
};

export default ShopLink;
