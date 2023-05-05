import React from 'react';

import classes from './Footer.module.scss';

import FooterNav from './FooterNav';
import FooterInfo from './FooterInfo';

const Footer = () => {
  return (
    <footer>
      <FooterNav />
      <FooterInfo />
    </footer>
  );
};

export default Footer;
