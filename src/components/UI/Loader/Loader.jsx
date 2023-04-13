import React from 'react';
import classNames from "classnames";
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <span className={classNames(styles.loader_item, styles.loader_item_1)} />
      <span className={classNames(styles.loader_item, styles.loader_item_2)} />
      <span className={classNames(styles.loader_item, styles.loader_item_3)} />
    </div>
  );
};

export default Loader;
