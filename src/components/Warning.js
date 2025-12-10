import React from 'react';
import clsx from 'clsx';
import styles from './Warning.module.css';

const Warning = ({ children }) => {
  return (
    <div className={clsx('warning', styles.warning)}>
      <div className={styles.warningContent}>
        {children}
      </div>
    </div>
  );
};

export default Warning;