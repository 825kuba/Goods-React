import React, { useState, useRef, useContext } from 'react';

import CartContext from '../../../store/cart-context';

import classes from './ProductForm.module.scss';

import BigBtn from '../../UI/BigBtn';

const ProductForm = props => {
  // form refs
  const sizeRef = useRef();
  const colorRef = useRef();
  const qtyRef = useRef();

  // input field error state
  const [qtyError, setQtyError] = useState(false);

  // cart context
  const cartCtx = useContext(CartContext);

  // + btn clicked
  const increaseQtyHandler = () => {
    // only allow max qty of 10
    if (+qtyRef.current.value >= 10) return;
    // if user left input field empty, show error and return
    if (qtyRef.current.value === '') {
      setQtyError(true);
      return;
    }
    // increase ref value by 1
    qtyRef.current.value++;
    // hide error
    setQtyError(false);
  };

  // - btn clicked
  const decreaseQtyHandler = () => {
    // only allow min qty of 1
    if (+qtyRef.current.value <= 1) return;
    // if user left input field empty, show error and return
    if (qtyRef.current.value === '') {
      setQtyError(true);
      return;
    }
    // decrease ref value by 1
    qtyRef.current.value--;
    // hide error
    setQtyError(false);
  };

  // when input field blured
  const blurQtyInputHandler = () => {
    // if user left input field empty throw error
    if (qtyRef.current.value === '' || +qtyRef.current.value <= 0)
      setQtyError(true);
    // else hide error
    else setQtyError(false);
  };

  const submitFormHandler = e => {
    e.preventDefault();
    // if user left input field empty, show error and return
    if (qtyRef.current.value === '') {
      setQtyError(true);
      return;
    }
    // create obj and add form values to it, also create unique cartId
    const newProduct = {
      ...props.product,
      size: sizeRef.current.value,
      color: colorRef.current.value,
      qty: +qtyRef.current.value,
      cartId: `${props.product.id}_${sizeRef.current.value}_${colorRef.current.value}`,
    };
    // add item to cart
    cartCtx.addItem(newProduct);
    // hide erorr
    setQtyError(false);
    // close product and show cart
    props.onToggleCart();
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
            className={`${qtyError ? classes.error : ''}`}
            type="number"
            min="1"
            max="10"
            defaultValue="1"
            ref={qtyRef}
            onBlur={blurQtyInputHandler}
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

      {qtyError && (
        <p className={classes.qtyErrorMsg}>Please enter valid quantity.</p>
      )}

      <BigBtn aria-label={`Add ${props.product.title} to cart`}>
        Add to cart
      </BigBtn>
    </form>
  );
};

export default ProductForm;
