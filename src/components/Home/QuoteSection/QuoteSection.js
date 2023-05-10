import classes from './QuoteSection.module.scss';

import useScrollObserver from '../../../hooks/use-scrollObserver';

const QuoteSection = props => {
  // set in parent component
  const style = `${props.className}`;

  const [isIntersecting, componentRef] = useScrollObserver({
    root: null,
    threshold: 0,
    rootMargin: '-25px',
  });

  return (
    <section className={`${classes.quote} ${classes[style]}`}>
      <article>
        <h2
          className={isIntersecting ? classes.revealed : ''}
          ref={componentRef}
        >
          {props.children}
        </h2>
      </article>
    </section>
  );
};

export default QuoteSection;
