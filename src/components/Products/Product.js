import classes from './Product.module.scss';

const Product = props => {
  const imgSrc = `${props.img}`;

  const clickProductHandler = () => {
    props.onClick(props.id);
  };

  return (
    <article className={classes.product} onClick={clickProductHandler}>
      {props.sale ? <span className={classes.badge}>on sale</span> : ''}

      {/* <img src={imgSrc} alt={props.title} /> */}
      <h3>{props.title}</h3>

      <div className={classes.price}>
        <span className={classes['price--now']}>
          ${(+props.price).toFixed(2)}
        </span>
        {props.sale ? (
          <span className={classes['price--before']}>
            ${(+props.price * 1.25).toFixed(2)}
          </span>
        ) : (
          ''
        )}
      </div>
    </article>
  );
};

export default Product;
