import React, {PureComponent} from 'react';

class Hero extends PureComponent {
  render() {
    const {
      bgImageSrc,
      title
    } = this.props;

    return (
      <header className="hero" style={{backgroundImage: `url(${bgImageSrc})`}}>
        <h1 className="title">{title}</h1>
      </header>
    );
  }
}

export default Hero;