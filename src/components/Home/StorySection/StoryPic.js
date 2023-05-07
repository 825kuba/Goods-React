import classes from './StoryPic.module.scss';

import useRevealOnScroll from '../../../hooks/use-revealOnScroll';

const StoryPic = props => {
  const [isIntersecting, componentRef] = useRevealOnScroll();

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
