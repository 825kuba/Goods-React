import classes from './FooterLink.module.scss';

const FooterLink = props => {
  return (
    <li className={classes.footerLink}>
      <a href="#">{props.children}</a>
    </li>
  );
};

export default FooterLink;
