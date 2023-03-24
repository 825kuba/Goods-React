import classes from './CloseBtn.module.scss';

const CloseBtn = props => {
  const styleClass = `${classes[props.className]} ${classes.closeBtn}`;

  return (
    <button className={styleClass} onClick={props.onClick}>
      X
    </button>
  );
};

export default CloseBtn;
