import classes from './CartBtn.module.scss';

import { useContext } from 'react';

import CartContext from '../../store/cart-context';

const CartBtn = props => {
  const cartCtx = useContext(CartContext);

  return (
    <button className={classes.cartBtn} onClick={props.onClick}>
      Cart ({cartCtx.items.length})
    </button>
  );
};

export default CartBtn;
