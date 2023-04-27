import classes from './BigBtn.module.scss';

const BigBtn = props => {
  const propsClass = props.className;
  const btnClass = `${classes['big-btn']} ${classes[propsClass]}`;

  return (
    <button className={btnClass} aria-label={props['aria-label']}>
      {props.children}
    </button>
  );
};

export default BigBtn;
