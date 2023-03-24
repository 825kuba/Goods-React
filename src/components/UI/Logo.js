import classes from './Logo.module.scss';

import logo from '../../assets/logo.png';

const Logo = props => {
  const styleClass = `${props.className}`;

  return (
    <div className={classes[styleClass]}>
      <a href="./index.html" aria-label="Go to homepage">
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
};

export default Logo;
