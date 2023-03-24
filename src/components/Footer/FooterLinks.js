import classes from './FooterLinks.module.scss';

const FooterLinks = props => {
  const style = `${props.className}`;

  return <ul className={classes[style]}>{props.children}</ul>;
};

export default FooterLinks;
