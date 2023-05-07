import classes from './GalleryBtns.module.scss';

import { MdArrowBack } from 'react-icons/md';
import { MdArrowForward } from 'react-icons/md';

const GalleryBtns = props => {
  const clickBtnHandler = e => {
    props.onClickBtn(e.target.closest('button').dataset.dir);
  };
  return (
    <div className={classes.btns}>
      <button
        className={`${props.hideLeftBtn ? classes.hidden : ''}`}
        data-dir={-1}
        aria-label={`Scroll gallery to the left`}
        onClick={clickBtnHandler}
      >
        <MdArrowBack />
      </button>
      <button
        className={`${props.hideRightBtn ? classes.hidden : ''}`}
        data-dir={1}
        aria-label={`Scroll gallery to the right`}
        onClick={clickBtnHandler}
      >
        <MdArrowForward />
      </button>
    </div>
  );
};

export default GalleryBtns;
