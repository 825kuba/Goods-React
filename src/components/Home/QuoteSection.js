import classes from './QuoteSection.module.scss';

const QuoteSection = props => {
  const style = `${props.className}`;

  return (
    <section className={`${classes.quote} ${classes[style]}`}>
      <article>
        <h2>{props.children}</h2>
      </article>
    </section>
  );
};

export default QuoteSection;
