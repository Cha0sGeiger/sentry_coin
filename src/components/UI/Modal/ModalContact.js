import React from 'react';
import ReactModal from 'react-modal';
import styles from './ModalContact.module.scss';
import { Button } from '../Button/Button';

const customStyles = {
  content: {
    display: 'block',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '425px',
    height: '250px',
  },
  overlay: { zIndex: '1000', backgroundColor: 'rgba(0,0,0,0.7)' },
};

const ModalContact = (props) => {
  const { message, open } = props;
  return (
    <div>
      <ReactModal style={customStyles} isOpen={open} contentLabel="Modal" ariaHideApp={false}>
        <div className={styles.modal_content_wrapper}>
          <div className={styles.body_message}>{message}</div>
          <div className={styles.button_wrapper}>
            <Button btnType="primary_short" clicked={() => props.onClose()}>
              Ok
            </Button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default ModalContact;
