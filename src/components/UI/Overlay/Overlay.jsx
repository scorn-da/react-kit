import React from 'react';
import cn from 'classnames';
import styles from './Overlay.module.css';

const Overlay = ({children, isActive, setIsActive}) => {
  return (
      <div className={cn(styles.overlay, {[styles.active]: !!isActive})} onClick={() => setIsActive(false)}>
        {children}
      </div>
  );
};

export default Overlay;