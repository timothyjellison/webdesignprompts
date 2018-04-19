import React, {PureComponent} from 'react';
import './Hero.css';

class Hero extends PureComponent {
  render() {
    return (
      <header className="hero">
        <h1 className="title">Web Design Prompts</h1>
        <p className="subtitle">Want to design or develop websites but you don't know where to start?</p>
      </header>
    );
  }
}

export default Hero;