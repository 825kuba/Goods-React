import classes from './NavLink.module.scss';

const NavLink = props => {
  return (
    <li>
      <button className={classes.navLink}>{props.children}</button>
    </li>
  );
};

export default NavLink;
