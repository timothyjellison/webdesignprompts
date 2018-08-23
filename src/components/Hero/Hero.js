import React, {PureComponent} from 'react';
import styles from './Hero.module.css';

class Hero extends PureComponent {
  render() {
    const {
      short = false,
      style = {backgroundColor: "#4178a7"},
      title
    } = this.props;

    return (
      <header className={`${styles.hero} ${short ? styles.heroShort : ''}`} style={{...style}}>
        <h1 className={styles.title}>{title}</h1>
      </header>
    );
  }
}

export default Hero;