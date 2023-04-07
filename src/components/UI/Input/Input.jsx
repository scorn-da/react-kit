import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
      <input ref={ref} {...props} className={styles.input} />
  );
});

export default Input;