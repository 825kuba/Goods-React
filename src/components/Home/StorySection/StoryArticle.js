import classes from './StoryArticle.module.scss';

import useRevealOnScroll from '../../../hooks/use-revealOnScroll';

const StoryArticle = props => {
  const [isIntersecting, componentRef] = useRevealOnScroll();

  return (
    <article
      className={`${classes.storyArticle} ${
        isIntersecting ? classes.revealed : ''
      }`}
      ref={componentRef}
    >
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </article>
  );
};

export default StoryArticle;
