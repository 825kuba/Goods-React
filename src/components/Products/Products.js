import classes from './Products.module.scss';

import Product from './Product';

import { useState, useEffect } from 'react';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Palace jacket',
    price: 199.99,
    img: 'placeholder.jpg',
    sale: true,
    descr:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    rating: {
      count: 234,
      rate: 4.1,
    },
  },
  {
    id: 'p2',
    title: 'Snowskate',
    price: 399.99,
    img: 'placeholder.jpg',
    sale: true,
    descr:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    rating: {
      count: 89,
      rate: 4.4,
    },
  },

  {
    id: 'p3',
    title: 'Independent trucks',
    price: 299.49,
    img: 'placeholder.jpg',
    sale: false,
    descr:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    rating: {
      count: 349,
      rate: 4.7,
    },
  },

  {
    id: 'p4',
    title: 'Brand new iPhone XX',
    price: 499.49,
    img: 'placeholder.jpg',
    sale: false,
    descr:
      'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ',
    rating: {
      count: 299,
      rate: 3.6,
    },
  },
];

const Products = props => {
  const categoryFormated = props.category.toLowerCase().replace(' ', '%20');

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async category => {
    setIsLoading(true);
    setError(null);
    setProducts([]);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );

      if (!response.ok)
        throw new Error(`${response.status} - Something went wrong :(`);

      const data = await response.json();
      data.forEach((prod, i) => (prod.sale = i <= 1 ? true : false));
      console.log(data);
      setProducts(data);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts(categoryFormated);
  }, [categoryFormated]);

  const clickProductHandler = id => {
    const clickedProduct = products.find(prod => prod.id === id);
    props.onOpenProduct(clickedProduct);
  };

  return (
    <section className={classes.products}>
      <h2>{props.category}</h2>

      {isLoading && <p className={classes.loading}>Loading...</p>}

      {error && <p className={classes.error}>{error}</p>}

      {products && (
        <div className={classes.products__container}>
          {products.map(prod => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onClick={clickProductHandler}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Products;
