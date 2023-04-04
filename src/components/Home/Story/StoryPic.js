import classes from './StoryPic.module.scss';

const StoryPic = props => {
  return (
    <picture className={classes.picture}>
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
