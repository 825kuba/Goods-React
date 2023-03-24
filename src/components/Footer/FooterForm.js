import classes from './FooterForm.module.scss';

const FooterForm = props => {
  return (
    <div className={classes.subscribe}>
      <h3>Keep in touch</h3>
      <p>Sign up to receive news and updates.</p>
      <form action="">
        <input type="email" placeholder="Enter email" />
        <button type="submit">Subsribe</button>
      </form>
    </div>
  );
};

export default FooterForm;
