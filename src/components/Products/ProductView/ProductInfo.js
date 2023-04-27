import classes from './ProductInfo.module.scss';

import { MdStarRate } from 'react-icons/md';
import shoppay from '../../../assets/shoppay.svg';

const ProductInfo = props => {
  // PRODUCT PRICE JSX
  const priceNow = (
    <h3 className={classes['price--now']}>${props.product.price.toFixed(2)}</h3>
  );

  const priceBefore = props.product.sale ? (
    <h3 className={classes['price--before']}>
      ${(+props.product.price * 1.5).toFixed(0)}.99
    </h3>
  ) : (
    ''
  );

  // PRODUCT RATING
  // round product rating number
  const ratingRounded = Math.round(props.product.rating.rate);
  // plural vs singular
  const reviewsCount = `${props.product.rating.count} ${
    props.product.rating.count > 1 ? 'Reviews' : 'Review'
  }`;

  // PAYMENT INSTALLMENT
  const priceDevided = (props.product.price / 4).toFixed(2);

  return (
    <div className={classes.productView__info}>
      <h2 className={classes.title}>{props.product.title}</h2>

      <div className={classes.price}>
        {priceNow}
        {priceBefore}
      </div>
      <div className={classes.reviews}>
        <div className={classes.reviews__stars}>
          {[...Array(ratingRounded)].map((n, i) => (
            <MdStarRate key={i} />
          ))}
        </div>
        <p>{reviewsCount}</p>
      </div>
      <p className={classes.installment}>
        Pay in 4 interest-free installments of <span>${priceDevided}</span> with
        <img src={shoppay} alt="shoppay icon" /> <a href="#">Learn more</a>
      </p>
    </div>
  );
};

export default ProductInfo;
