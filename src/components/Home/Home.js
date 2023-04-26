import React from 'react';

import classes from './Home.module.scss';

import HeroSection from './HeroSection/HeroSection';
import QuoteSection from './QuoteSection/QuoteSection';
import StorySection from './StorySection/StorySection';
import ReviewsSection from './ReviewSection/ReviewsSection';
import ShopSection from './ShopSection/ShopSection';

const Home = props => {
  return (
    <React.Fragment>
      <HeroSection onChooseCategory={props.onChooseCategory} />
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
      <ShopSection
        categories={props.categories}
        onChooseCategory={props.onChooseCategory}
      />
    </React.Fragment>
  );
};

export default Home;
