import classes from './StoryArticle.module.scss';

const StoryArticle = props => {
  return (
    <article className={classes.storyArticle}>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </article>
  );
};

export default StoryArticle;
