import React, { useContext, useEffect, useState } from 'react';

import classes from './Cart.module.scss';

import CloseBtn from '../UI/CloseBtn';
import BigBtn from '../UI/BigBtn';
import CartItem from './CartItem';

import CartContext from '../../store/cart-context';

import { MdDone } from 'react-icons/md';

const Cart = props => {
  const cartCtx = useContext(CartContext);

  // cart updated message
  const [cartUpdated, setCartUpdated] = useState(false);

  // show cart upated message for 1 second after the cart context items change
  useEffect(() => {
    if (cartCtx.items.length === 0) return;

    setCartUpdated(true);

    const timer = setTimeout(() => {
      setCartUpdated(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.totalAmount]);

  const cartContent = (
    <React.Fragment>
      <div className={classes.cart__head}>
        <h2 className={classes.cart__heading}>Shopping Cart</h2>
        <p className={classes.cart__quantity}>Quantity</p>
        <p className={classes.cart__total}>Total</p>
      </div>
      <div className={classes.cart__content}>
        <div className={classes.cart__container}>
          {cartCtx.items.map((item, index) => (
            <CartItem
              product={item}
              key={index}
              onClick={props.onClickProduct}
            />
          ))}
        </div>
      </div>
      <div className={classes.cart__summary}>
        <form className={classes.cart__form} action="">
          <label htmlFor="instructions">Special instructions for seller</label>
          <textarea
            name="instructions"
            id="instructions"
            cols="30"
            rows="4"
          ></textarea>
        </form>
        <div className={classes.cart__checkout}>
          <div className={classes.cart__subtotal}>
            <h3>Subtotal</h3>
            <h3>${Math.abs(cartCtx.totalAmount).toFixed(2)}</h3>
          </div>
          <p>Taxes and shipping calculated at checkout</p>
          <BigBtn className="checkout-btn" aria-label="Continue to checkout">
            Check out
          </BigBtn>
        </div>
      </div>
    </React.Fragment>
  );

  // message wjen there are no items in cart
  const cartEmptyMsg = (
    <p className={classes.cartEmpty}>Your cart is currently empty.</p>
  );

  // classes for cart updated message
  const updatedMsgClasses = `${classes.cart__message} ${
    cartUpdated ? classes.show : ''
  }`;

  return (
    <div className={classes.cart}>
      <div className={classes.cart__wrapper}>
        <CloseBtn aria-label="Close cart" onClick={props.onCloseCart} />
        {cartCtx.items.length === 0 ? cartEmptyMsg : cartContent}
      </div>
      <div className={updatedMsgClasses}>
        <MdDone />
      </div>
    </div>
  );
};

export default Cart;
