import classes from './NavLink.module.scss';

const NavLink = props => {
  const clickLinkHandler = () => {
    props.onClick(props.children);
  };

  return (
    <li>
      <button className={classes.navLink} onClick={clickLinkHandler}>
        {props.children}
      </button>
    </li>
  );
};

export default NavLink;
