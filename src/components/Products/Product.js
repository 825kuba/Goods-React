import classes from './Product.module.scss';

const Product = props => {
  const clickProductHandler = () => {
    props.onClick(props.product.id);
  };

  return (
    <article className={classes.product} onClick={clickProductHandler}>
      {props.product.sale ? <span className={classes.badge}>on sale</span> : ''}

      <img src={props.product.image} alt={props.product.title} />
      <h3>{props.product.title}</h3>

      <div className={classes.price}>
        <span className={classes['price--now']}>
          ${(+props.product.price).toFixed(2)}
        </span>
        {props.product.sale ? (
          <span className={classes['price--before']}>
            ${(+props.product.price * 1.25).toFixed(2)}
          </span>
        ) : (
          ''
        )}
      </div>
    </article>
  );
};

export default Product;
