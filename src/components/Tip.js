import React from 'react';
import clsx from 'clsx';
import styles from './Tip.module.css';

const Tip = ({ children }) => {
  return (
    <div className={clsx('tip', styles.tip)}>
      <div className={styles.tipContent}>
        {children}
      </div>
    </div>
  );
};

export default Tip;