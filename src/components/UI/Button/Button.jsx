import React from 'react';
import styles from './Button.module.css'
import cn from "classnames";

const Button = ({ children, ...props }) => {
  return (
      <button {...props} className={cn(styles.btn, props.className)}>
        {children}
      </button>
  );
};

export default Button;