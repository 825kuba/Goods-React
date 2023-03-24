import classes from './Header.module.scss';

import Nav from './Nav';

const Header = props => {
  return (
    <header className={classes.header}>
      <p className={classes.discount}>
        Use code FRONTEND10 at checkout for 10% OFF!
      </p>
      <Nav onOpenCart={props.onOpenCart} />
    </header>
  );
};

export default Header;
