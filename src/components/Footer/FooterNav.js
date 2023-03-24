import classes from './FooterNav.module.scss';

import Logo from '../UI/Logo';
import FooterLinks from './FooterLinks';
import FooterLink from './FooterLink';
import FooterForm from './FooterForm';

const footerNav = [
  { linkName: 'Contact', id: 'l1' },
  { linkName: 'Trade', id: 'l2' },
  { linkName: 'Privacy Policy', id: 'l3' },
  { linkName: 'Warranty', id: 'l4' },
];

const footerSocial = [
  { linkName: 'Instagram', id: 's1' },
  { linkName: 'Pinterest', id: 's2' },
];

const FooterNav = props => {
  return (
    <nav className={classes.footerNav}>
      <Logo className={`footerLogo`} />
      <FooterLinks className={`navLinks`}>
        {footerNav.map(link => (
          <FooterLink key={link.id}>{link.linkName}</FooterLink>
        ))}
      </FooterLinks>
      <FooterLinks className={`socialLinks`}>
        {footerSocial.map(link => (
          <FooterLink key={link.id}>{link.linkName}</FooterLink>
        ))}
      </FooterLinks>
      <FooterForm className={classes.form} />
    </nav>
  );
};

export default FooterNav;
