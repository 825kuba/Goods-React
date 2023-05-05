import React, { useState, useEffect } from 'react';

import CartProvider from './store/CartProvider';

import Cart from './components/Cart/Cart';
import Modal from './components/UI/Modal';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import ProductView from './components/Products/ProductView/ProductView';

const categories = [
  {
    name: `Men's clothing`,
    id: 'c1',
    src: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    name: `Women's clothing`,
    id: 'c2',
    src: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
  },
  {
    name: 'Jewelery',
    id: 'c3',
    src: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
  },
  {
    name: 'Electronics',
    id: 'c4',
    src: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  },
];

function App() {
  // modal window for cart
  const [cartOpened, setCartOpened] = useState(false);

  const openCartHandler = () => {
    setCartOpened(true);
  };

  const closeCartHandler = () => {
    setCartOpened(false);
  };

  // modal window for a clicked product
  const [productOpen, setProductOpen] = useState(false);
  // chosen product
  const [chosenProduct, setChosenProduct] = useState(null);

  const openProductHandler = product => {
    setProductOpen(true);
    setChosenProduct(product);
    if (cartOpened) setCartOpened(false);
  };

  const closeProductHandler = () => {
    setProductOpen(false);
  };

  // chosen category
  const [chosenCategory, setChosenCategory] = useState('home');

  const chooseCategoryHandler = category => {
    setChosenCategory(category);
  };

  // instant scroll to top after clicking a category link
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [chosenCategory]);

  // choose main content
  const mainContent =
    chosenCategory === 'home' ? (
      <Home categories={categories} onChooseCategory={chooseCategoryHandler} />
    ) : (
      <Products category={chosenCategory} onOpenProduct={openProductHandler} />
    );

  return (
    <CartProvider>
      <Modal modalOpen={cartOpened}>
        {cartOpened && (
          <Cart
            onCloseCart={closeCartHandler}
            onClickProduct={openProductHandler}
          />
        )}
      </Modal>
      <Modal modalOpen={productOpen}>
        {productOpen && (
          <ProductView
            onCloseProduct={closeProductHandler}
            onOpenCart={openCartHandler}
            product={chosenProduct}
          />
        )}
      </Modal>
      <Header
        onOpenCart={openCartHandler}
        categories={categories}
        onChooseCategory={chooseCategoryHandler}
      />
      <main>{mainContent}</main>
      <Footer />
    </CartProvider>
  );
}

export default App;
