import React from 'react';
import cn from 'classnames';
import styles from './Overlay.module.css';

const Overlay = ({children, isActive}) => {
  return (
      <div className={cn(styles.overlay, {[styles.active]: !!isActive})}>
        {children}
      </div>
  );
};

export default Overlay;