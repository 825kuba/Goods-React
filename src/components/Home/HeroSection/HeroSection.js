import React from 'react';

import classes from './HeroSection.module.scss';

const HeroSection = props => {
  const clickHeroLinkHandler = () => {
    props.onChooseCategory(`Men's clothing`);
  };

  return (
    <section className={classes.hero}>
      <article>
        <h1>Introducing the Fjallraven bag.</h1>
        <a onClick={clickHeroLinkHandler}>
          <button>shop now</button>
        </a>
      </article>
    </section>
  );
};

export default HeroSection;
