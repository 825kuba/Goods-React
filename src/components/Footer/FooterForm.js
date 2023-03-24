import React, { useState, useRef } from 'react';

import classes from './FooterForm.module.scss';

const FooterForm = props => {
  const [formSubmited, setFormSubmited] = useState(false);

  const inputRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    if (inputRef.current.value === '') return;
    setFormSubmited(true);
  };

  // FORM INNER JSX DEPENDING ON STATE
  let formInnerJSX;

  if (!formSubmited)
    formInnerJSX = (
      <React.Fragment>
        <input type="email" placeholder="Enter email" ref={inputRef} />
        <button type="submit">Subsribe</button>
      </React.Fragment>
    );
  else
    formInnerJSX = (
      <React.Fragment>
        <p>Thank you for subscribing!</p>
        <p>✔</p>
      </React.Fragment>
    );

  return (
    <div className={classes.subscribe}>
      <h3>Keep in touch</h3>
      <p>Sign up to receive news and updates.</p>
      <form
        action=""
        onSubmit={submitHandler}
        className={`${formSubmited ? `${classes.success}` : ''} `}
      >
        {formInnerJSX}
      </form>
    </div>
  );
};

export default FooterForm;
