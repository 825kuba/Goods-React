import React from 'react';

import classes from './NavLinks.module.scss';

import NavLink from './NavLink';

const categories = [
  { name: 'Men', id: 'c1' },
  { name: 'Women', id: 'c2' },
  { name: 'Jewellery', id: 'c3' },
  { name: 'Electronics', id: 'c4' },
];

const NavLinks = props => {
  const menuClass = props.menuClass;
  return (
    <ul className={`${classes.navLinks} ${classes[menuClass]}`}>
      {categories.map(item => (
        <NavLink key={item.id}>{item.name}</NavLink>
      ))}
    </ul>
  );
};

export default NavLinks;
