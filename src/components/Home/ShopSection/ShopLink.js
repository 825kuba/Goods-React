import React, { useRef } from 'react';

import classes from './ShopLink.module.scss';

const ShopLink = props => {
  const imgRef = useRef();

  const setImgWidthHandler = () => {
    props.onSetImgWidth(imgRef.current.clientWidth);
  };

  const clickLinkHandler = () => {
    props.onChooseCategory(props.linkName);
  };

  const linkNameShort = props.linkName.replace(`'s clothing`, '');

  return (
    <a className={classes.shopLink} onClick={clickLinkHandler}>
      <div className={classes.filling}></div>
      <img src={props.src} ref={imgRef} onLoad={setImgWidthHandler}></img>
      <h3>{linkNameShort}</h3>
    </a>
  );
};

export default ShopLink;
