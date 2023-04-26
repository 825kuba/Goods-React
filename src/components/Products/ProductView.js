import React from 'react';

import classes from './ProductView.module.scss';

import CloseBtn from '../UI/CloseBtn';

const ProductView = props => {
  return (
    <React.Fragment>
      <CloseBtn
        aria-label="Close product view"
        onClick={props.onCloseProduct}
      />
      <div className={classes.productView}>
        <div className={classes.productView__gallery}>
          <h3>Product gallery here</h3>
        </div>
        <div className={classes.productView__info}>
          <h3>Product info here</h3>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductView;
