import classes from './QuoteSection.module.scss';

import useRevealOnScroll from '../../../hooks/use-revealOnScroll';

const QuoteSection = props => {
  // set in parent component
  const style = `${props.className}`;

  const [isIntersecting, componentRef] = useRevealOnScroll();

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
