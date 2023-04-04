import classes from './CloseBtn.module.scss';

import { MdClose } from 'react-icons/md';

const CloseBtn = props => {
  const styleClass = `${classes[props.className]} ${classes.closeBtn}`;

  return (
    <button className={styleClass} onClick={props.onClick}>
      <MdClose />
    </button>
  );
};

export default CloseBtn;
