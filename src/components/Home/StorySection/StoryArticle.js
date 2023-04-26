import classes from './StoryArticle.module.scss';

const StoryArticle = props => {
  return (
    <article className={classes.storyArticle}>
      <h2>{props.heading}</h2>
      <p>{props.text}</p>
    </article>
  );
};

export default StoryArticle;
