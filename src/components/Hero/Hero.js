import React, {PureComponent} from 'react';
import './Hero.css';

class Hero extends PureComponent {
  render() {
    return (
      <header className="hero">
        <h1 className="title">Web Design Prompts</h1>
        <p className="subtitle">Want to <a href="http://justbuildwebsites.com/" target="_blank">just build websites</a> but have no idea what to build?</p>
      </header>
    );
  }
}

export default Hero;