import classes from './Products.module.scss';

import Product from './Product';

import { useState, useEffect, useCallback } from 'react';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Super Amazing Jacket',
    price: '59',
    img: 'placeholder.jpg',
  },
  {
    id: 'p2',
    title: 'Retro Pants 80s style',
    price: '49',
    img: 'placeholder.jpg',
  },
  {
    id: 'p3',
    title: 'Huge Plasma TV 50inch',
    price: '399',
    img: 'placeholder.jpg',
  },
  {
    id: 'p4',
    title: 'Brand new iPhone XX',
    price: '499',
    img: 'placeholder.jpg',
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

  return (
    <section className={classes.products}>
      <h2>{props.category}</h2>

      {isLoading && <p className={classes.loading}>Loading...</p>}

      {error && <p className={classes.error}>{error}</p>}

      {products && (
        <div className={classes.products__container}>
          {products.map((prod, i) => {
            return (
              <Product
                key={prod.id}
                title={prod.title}
                price={prod.price}
                img={prod.image}
                sale={prod.sale}
                onOpenProduct={props.onOpenProduct}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Products;
