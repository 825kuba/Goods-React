import React from 'react';

import classes from './Home.module.scss';

import HeroSection from './HeroSection';
import QuoteSection from './QuoteSection';
import StorySection from './Story/StorySection';
import ReviewsSection from './ReviewsSection';
import ShopSection from './ShopSection/ShopSection';

const Home = props => {
  return (
    <React.Fragment>
      <HeroSection />
      <QuoteSection className="white">
        Quality stylegoods. Designed to last, built for Goods.
      </QuoteSection>
      <StorySection />
      <ReviewsSection />
      <QuoteSection className="grey">
        Fast things come and go.
        <br />
        Good stuff is from Goods.
      </QuoteSection>
      <ShopSection categories={props.categories} />
    </React.Fragment>
  );
};

export default Home;
