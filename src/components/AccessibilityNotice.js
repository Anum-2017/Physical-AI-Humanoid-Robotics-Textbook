import React from 'react';
import clsx from 'clsx';
import styles from './AccessibilityNotice.module.css';

const AccessibilityNotice = ({ children }) => {
  return (
    <div className={clsx('accessibility-notice', styles.accessibilityNotice)}>
      <h3 className={styles.title}>Accessibility Statement</h3>
      <div className={styles.content}>
        {children || (
          <p>This content follows accessibility standards for educational materials, including sufficient color contrast, semantic headings, and alternative text for images.</p>
        )}
      </div>
    </div>
  );
};

export default AccessibilityNotice;