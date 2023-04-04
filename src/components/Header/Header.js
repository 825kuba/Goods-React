import React from 'react';

import classes from './Header.module.scss';

import Nav from './Nav';

const Header = props => {
  return (
    <React.Fragment>
      <aside className={classes.discount}>
        Use code FRONTEND10 at checkout for 10% OFF!
      </aside>
      <header className={classes.header}>
        <Nav onOpenCart={props.onOpenCart} categories={props.categories} />
      </header>
    </React.Fragment>
  );
};

export default Header;
