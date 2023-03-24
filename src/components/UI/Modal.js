import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

const portalElement = document.getElementById('overlays');

const ModalContent = props => {
  return (
    <div
      className={`${classes.modal} ${props.modalOpen ? `${classes.open}` : ''}`}
    >
      {props.children}
    </div>
  );
};

const Modal = props => {
  return ReactDOM.createPortal(
    <ModalContent modalOpen={props.modalOpen}>{props.children}</ModalContent>,
    portalElement
  );
};

export default Modal;
