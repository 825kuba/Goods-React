import classes from './StoryPic.module.scss';

import useScrollObserver from '../../../hooks/use-scrollObserver';

const StoryPic = props => {
  const [isIntersecting, componentRef] = useScrollObserver({
    root: null,
    threshold: 0,
    rootMargin: '-25px',
  });

  return (
    <picture
      className={`${classes.picture} ${isIntersecting ? classes.revealed : ''}`}
      ref={componentRef}
    >
      <source
        srcSet={require(`../../../assets/story-img/${props.picName}-lg.jpg`)}
        media="(min-width: 87.5em)"
      />
      <source
        srcSet={require(`../../../assets/story-img/${props.picName}-md.jpg`)}
        media="(min-width: 50em)"
      />
      <img src={require(`../../../assets/story-img/${props.picName}-sm.jpg`)} />
    </picture>
  );
};

export default StoryPic;
