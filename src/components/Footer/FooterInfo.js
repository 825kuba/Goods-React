import classes from './FooterInfo.module.scss';

const FooterInfo = props => {
  return (
    <p>
      Made by
      <a href="https://github.com/825kuba" target="_blank">
        {' '}
        Jakub Horuta
      </a>{' '}
      | Inspired by{' '}
      <a href="https://builtforkeeps.com/" target="_blank">
        builtforkeeps.com
      </a>
    </p>
  );
};

export default FooterInfo;
