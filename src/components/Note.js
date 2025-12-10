import React from 'react';
import clsx from 'clsx';
import styles from './Note.module.css';

const Note = ({ children }) => {
  return (
    <div className={clsx('note', styles.note)}>
      <div className={styles.noteContent}>
        {children}
      </div>
    </div>
  );
};

export default Note;