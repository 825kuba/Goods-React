import React, { useState, useRef } from 'react';

import classes from './ProductForm.module.scss';

import BigBtn from '../../UI/BigBtn';

const ProductForm = props => {
  const sizeRef = useRef();
  const colorRef = useRef();
  const qtyRef = useRef();

  const increaseQtyHandler = () => {
    if (+qtyRef.current.value === 10) return;
    qtyRef.current.value++;
  };

  const decreaseQtyHandler = () => {
    if (+qtyRef.current.value === 1) return;
    qtyRef.current.value--;
  };

  const submitFormHandler = e => {
    e.preventDefault();
    console.log(sizeRef.current.value);
    console.log(colorRef.current.value);
    console.log(qtyRef.current.value);
  };

  // SIZE OPTIONS JSX
  let sizeOptions;

  if (props.product.id === 1 || props.product.category === 'electronics')
    sizeOptions = <option value="OS">OS</option>;
  else
    sizeOptions = (
      <React.Fragment>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
        <option value="X-large">X-Large</option>
      </React.Fragment>
    );

  // COLOR OPTIONS JSX
  let colorOptions;

  if (props.product.category === 'jewelery')
    colorOptions = <option value="Natural">Natural</option>;
  else
    colorOptions = (
      <React.Fragment>
        <option value="1">Color 1</option>
        <option value="2">Color 2</option>
        <option value="3">Color 3</option>
        <option value="4">Color 4</option>
      </React.Fragment>
    );

  return (
    <form className={classes.productView__form} onSubmit={submitFormHandler}>
      <div className={classes['select-wrap']}>
        <select
          name="size"
          id="size"
          className={classes['select--size']}
          aria-label="Product size"
          ref={sizeRef}
        >
          {sizeOptions}
        </select>
      </div>
      <div className={classes['select-wrap']}>
        <select
          name="color"
          id="color"
          className={classes['select--color']}
          aria-label="Product color"
          ref={colorRef}
        >
          {colorOptions}
        </select>
      </div>

      <div className={classes['qty-wrap']}>
        <label htmlFor="qty" aria-label="Product quantity">
          Qty
        </label>
        <div className={classes['input-wrap']}>
          <button
            type="button"
            aria-label="Decrease product quantity"
            onClick={decreaseQtyHandler}
          >
            -
          </button>
          <input
            type="number"
            min="1"
            max="10"
            defaultValue="1"
            ref={qtyRef}
            step="1"
            id="qty"
            aria-label="Enter product quantity"
          />

          <button
            type="button"
            aria-label="Increase product quantity"
            onClick={increaseQtyHandler}
          >
            +
          </button>
        </div>
      </div>

      <BigBtn aria-label={`Add ${props.product.title} to cart`}>
        Add to cart
      </BigBtn>
    </form>
  );
};

export default ProductForm;
