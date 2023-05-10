import classes from './StoryArticle.module.scss';

import useScrollObserver from '../../../hooks/use-scrollObserver';

const StoryArticle = props => {
  const [isIntersecting, componentRef] = useScrollObserver({
    root: null,
    threshold: 0,
    rootMargin: '-25px',
  });

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
