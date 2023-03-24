import classes from './CartBtn.module.scss';

const CartBtn = props => {
  return (
    <button className={classes.cartBtn} onClick={props.onClick}>
      Cart ({0})
    </button>
  );
};

export default CartBtn;
