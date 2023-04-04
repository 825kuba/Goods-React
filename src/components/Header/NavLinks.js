import React from 'react';

import classes from './NavLinks.module.scss';

import NavLink from './NavLink';

const NavLinks = props => {
  const menuClass = props.menuClass;
  return (
    <ul className={`${classes.navLinks} ${classes[menuClass]}`}>
      {props.categories.map(item => (
        <NavLink key={item.id}>{item.name}</NavLink>
      ))}
    </ul>
  );
};

export default NavLinks;
