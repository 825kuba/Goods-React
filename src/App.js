import React, { useState } from 'react';

import Cart from './components/Cart/Cart';
import Modal from './components/UI/Modal';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const categories = [
  {
    name: 'Men',
    id: 'c1',
    src: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    name: 'Women',
    id: 'c2',
    src: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
  },
  {
    name: 'Jewellery',
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
  const [cartOpened, setCartOpened] = useState(false);

  const openCartHandler = () => {
    setCartOpened(true);
  };

  const closeCartHandler = () => {
    setCartOpened(false);
  };

  return (
    <React.Fragment>
      <Modal modalOpen={cartOpened}>
        {cartOpened && <Cart onCloseCart={closeCartHandler} />}
      </Modal>
      <Header onOpenCart={openCartHandler} categories={categories} />
      <main>
        <Home categories={categories} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
