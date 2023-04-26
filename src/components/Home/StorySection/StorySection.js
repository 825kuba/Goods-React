import classes from './StorySection.module.scss';

import StoryArticle from './StoryArticle';
import StoryPic from './StoryPic';

const StorySection = () => {
  return (
    <section className={classes.storySection}>
      <StoryPic picName="man" descr="A man standing" />
      <StoryArticle
        heading="Clothes for guys."
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              iste numquam qui maxime tempora rem."
      />

      <StoryPic picName="woman" descr="A woman standing" />
      <StoryArticle
        heading="Fashion for girls."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio, in saepe aut architecto dolore at."
      />

      <StoryPic picName="jewellery" descr="a set of earrings" />
      <StoryArticle
        heading="Premium jewellery for any occasion."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        asperiores at! Mollitia odit optio repudiandae. Fugiat dolor
        labore sed?"
      />

      <StoryPic
        picName="electronics"
        descr="Photographer's hand holding a cellphone"
      />
      <StoryArticle
        heading="Top-notch electronics."
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        reiciendis voluptatem similique ad molestiae officiis provident,
        autem sed. Quo esse adipisci, necessitatibus qui natus omnis."
      />
    </section>
  );
};

export default StorySection;
