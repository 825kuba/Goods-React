import { useState, useContext } from 'react';

import CartContext from '../../store/cart-context';

import classes from './CartItem.module.scss';

import placeholder from '../../assets/placeholder.jpg';

import useScrollObserver from '../../hooks/use-scrollObserver';

const CartItem = props => {
  const [isIntersecting, componentRef] = useScrollObserver();

  // quantity state
  const [productQty, setProductQty] = useState(props.product.qty);
  // cart context
  const cartCtx = useContext(CartContext);

  // open product modal when cart item clicked
  const clickProductHandler = () => {
    props.onClick(props.product);
  };

  // + btn clicked
  const increaseQtyHandler = () => {
    // only allow qty of 10
    if (productQty >= 10) return;
    // increase qty state by 1
    setProductQty(prevState => prevState + 1);
    // add new item with qty of 1 to ctx
    const newProduct = { ...props.product, qty: 1 };
    cartCtx.addItem(newProduct);
  };

  // - btn clicked
  const decreaseQtyHandler = () => {
    // decrease qty state by 1
    setProductQty(prevState => prevState - 1);
    // deduct 1 from item qty in ctx
    cartCtx.removeItem(props.product);
  };

  // remove btn clicked
  const deleteProductHandler = () => {
    // remove item from ctx
    cartCtx.deleteItem(props.product);
  };

  return (
    <div className={classes['cart-item']}>
      <img
        src={isIntersecting ? props.product.image : placeholder}
        data-color={props.product.color}
        ref={componentRef}
      />
      <div className={classes.text}>
        <a
          href="#"
          className={classes.title}
          aria-label={`Go to ${props.product.title}`}
          onClick={clickProductHandler}
        >
          {props.product.title}
        </a>
        <p className={classes.size}>
          {props.product.size} /{' '}
          {props.product.color === 'Natural'
            ? 'Natural'
            : `Color ${props.product.color}`}
        </p>
      </div>
      <p className={classes.price}>
        $<span>{props.product.price.toFixed(2)}</span>
      </p>
      <form className={classes.qty}>
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
            step="1"
            value={productQty}
            readOnly
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
      </form>

      <button
        className={classes['remove-item']}
        aria-label={`Remove ${props.product.title} from cart`}
        onClick={deleteProductHandler}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
