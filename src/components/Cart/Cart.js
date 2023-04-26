import React from 'react';

import classes from './Cart.module.scss';

import CloseBtn from '../UI/CloseBtn';
import BigBtn from '../UI/BigBtn';

const Cart = props => {
  return (
    <div className={classes.cart}>
      <div className={classes.cart__wrapper}>
        <CloseBtn aria-label="Close cart" onClick={props.onCloseCart} />
        <div className={classes.cart__head}>
          <h2 className={classes.cart__heading}>Shopping Cart</h2>
          <p className={classes.cart__quantity}>Quantity</p>
          <p className={classes.cart__total}>Total</p>
        </div>
        <div className={classes.cart__content}>
          <div className={classes.cart__container}></div>
        </div>
        <div className={classes.cart__summary}>
          <form className={classes.cart__form} action="">
            <label htmlFor="instructions">
              Special instructions for seller
            </label>
            <textarea
              name="instructions"
              id="instructions"
              cols="30"
              rows="4"
            ></textarea>
          </form>
          <div className={classes.cart__checkout}>
            <div className={classes.cart__subtotal}>
              <h6>Subtotal</h6>
              <h5>
                $<span>0</span>
              </h5>
            </div>
            <p>Taxes and shipping calculated at checkout</p>
            <BigBtn className="checkout-btn" aria-label="Continue to checkout">
              Check out
            </BigBtn>
          </div>
        </div>
      </div>
      <div className={`${classes.cart__message} ${classes.hidden}`}>
        <p>Cart updated!</p>
      </div>
    </div>
  );
};

export default Cart;
