import React, { forwardRef } from 'react';

import classes from './ShopLink.module.scss';

const ShopLink = forwardRef((props, ref) => {
  const clickLinkHandler = () => {
    props.onChooseCategory(props.linkName);
  };

  const linkNameShort = props.linkName.replace(`'s clothing`, '');

  return (
    <a className={classes.shopLink} onClick={clickLinkHandler}>
      <div className={classes.filling}></div>
      <img src={props.src} ref={ref}></img>
      <h3>{linkNameShort}</h3>
    </a>
  );
});

export default ShopLink;
