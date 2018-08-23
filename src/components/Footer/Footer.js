import React, {PureComponent} from 'react';
import styles from './Footer.module.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className={styles.footer}>
        <p className={styles.attribution}>&copy; 2018 <a href="https://www.timothyellison.com" target="_blank">Tim Ellison</a></p>
      </footer>
    );
  }
}

export default Footer;
