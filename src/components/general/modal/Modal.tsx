import React from 'react';
import style from './Modal.module.scss';

interface ModalProps {
  children: React.ReactNode,
  className?: string,
  active: boolean;
  setActive: boolean;
}

const Modal = ({active, setActive, children, className,  ...props} : ModalProps) => {
  return (
    <div
      className={active ? `${style.container} ${style.active}` : style.container}
      {...props}
      onClick={() => setActive(false)}
    >
      <div className={active ? `${style.contentContainer} ${style.active}` : style.contentContainer}>
        <div className={style.content} onClick={e => e.stopPropagation()}>{children}</div>
        <div className={style.buttonCloseContainer}>
          <div className={style.buttonClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;