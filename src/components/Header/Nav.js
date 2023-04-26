import React, { useState } from 'react';

import classes from './Nav.module.scss';

import NavLinks from './NavLinks';
import Logo from '../UI/Logo';
import CartBtn from './CartBtn';
import CloseBtn from '../UI/CloseBtn';

const Nav = props => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const openMobileMenuHandler = () => {
    setMobileMenuOpened(true);
  };

  const closeMobileMenuHandler = () => {
    setMobileMenuOpened(false);
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.btnWrap}>
        <button className={classes.menuBtn} onClick={openMobileMenuHandler}>
          Menu
        </button>
      </div>
      <NavLinks
        menuClass={mobileMenuOpened ? 'opened' : ''}
        categories={props.categories}
        onClickLink={closeMobileMenuHandler}
        onChooseCategory={props.onChooseCategory}
      />
      {mobileMenuOpened && (
        <CloseBtn
          className={`closeMobileNav`}
          onClick={closeMobileMenuHandler}
        />
      )}
      <Logo />
      <div className={classes.btnWrap}>
        <CartBtn onClick={props.onOpenCart} />
      </div>
    </nav>
  );
};

export default Nav;
