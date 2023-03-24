import React from 'react';

import classes from './Footer.module.scss';

import FooterNav from './FooterNav';
import FooterInfo from './FooterInfo';

const Footer = props => {
  return (
    <div className={classes.footer}>
      <FooterNav />
      <FooterInfo />
    </div>
  );
};

export default Footer;
