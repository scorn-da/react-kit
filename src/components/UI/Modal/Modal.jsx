import React from 'react';
import styles from './Modal.module.css';
import cn from "classnames";

const Modal = ({children, isActive}) => {
  return (
      <section className={cn(styles.modal, {[styles.active]: !!isActive})}>
        <div className={styles.content}>
          {children}
        </div>
      </section>
  );
};

export default Modal;