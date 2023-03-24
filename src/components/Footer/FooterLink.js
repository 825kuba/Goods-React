import classes from './FooterLink.module.scss';

const FooterLink = props => {
  return (
    <li>
      <a href="#">{props.children}</a>
    </li>
  );
};

export default FooterLink;
