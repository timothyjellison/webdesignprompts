import React, {Component} from 'react';
import styles from './Main.module.css';

export default ({children}) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  );
}
