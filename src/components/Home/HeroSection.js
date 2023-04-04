import React from 'react';

import classes from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <section className={classes.hero}>
      <article>
        <h1>Introducing the Fjallraven bag.</h1>
        <a href="./products/men.html">
          <button>shop now</button>
        </a>
      </article>
    </section>
  );
};

export default HeroSection;
