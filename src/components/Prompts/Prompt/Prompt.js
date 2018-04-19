import React, {PureComponent} from 'react';
import './Prompt.css';

class Prompt extends PureComponent {
  render() {
    const {text} = this.props;

    return <p className="prompt">{text}</p>;
  }
}

export default Prompt;
