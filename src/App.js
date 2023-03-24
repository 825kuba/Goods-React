import React, { useState } from 'react';

import Cart from './components/Cart/Cart';
import Modal from './components/UI/Modal';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

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
      <Header onOpenCart={openCartHandler} />
      <main>
        <Home />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
