import React from 'react';
import clsx from 'clsx';
import styles from './DetailedList.module.css';

const DetailedList = ({ children }) => {
  return (
    <div className={clsx('detaillist', styles.detaillist)}>
      <ul className={styles.list}>
        {children}
      </ul>
    </div>
  );
};

export default DetailedList;