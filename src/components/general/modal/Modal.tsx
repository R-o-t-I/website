import React from "react";
import style from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  className?: string;
  onClose: () => any;
}

const Modal = ({ onClose, children, className, ...props }: ModalProps) => {
  const [hidden, setHidden] = React.useState(false);

  return (
    <div
      className={
        hidden ? `${style.container} ${style.hidden}` : style.container
      }
      {...props}
      onClick={() => {
        setHidden(true);
      }}
      onAnimationEnd={() => {
        if (hidden) onClose();
      }}
    >
      <div className={style.contentContainer}>
        <div className={style.content} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
        <div className={style.buttonCloseContainer}>
          <div className={style.buttonClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
