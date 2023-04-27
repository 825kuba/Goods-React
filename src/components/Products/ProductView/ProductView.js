import React from 'react';

import classes from './ProductView.module.scss';

import CloseBtn from '../../UI/CloseBtn';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductForm from './ProductForm';

const ProductView = props => {
  return (
    <React.Fragment>
      <CloseBtn
        aria-label="Close product view"
        onClick={props.onCloseProduct}
      />
      <div className={classes.productView}>
        <ProductGallery product={props.product} />
        <div className={classes.productView__main}>
          <ProductInfo product={props.product} />
          <ProductForm product={props.product} />
          <p className={classes.productView__descr}>
            {props.product.description}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductView;
