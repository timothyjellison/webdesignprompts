import React, {PureComponent} from 'react';
import Prompt from './Prompt/Prompt';
import './Prompts.css';

class Prompts extends PureComponent {
  render() {
    const {content} = this.props;

    return (
      <main className="prompts">
        {content.map((prompt, index) => {
          return (
            <Prompt text={prompt.text} key={index}/>
          );
        })}
      </main>
    );
  }
}

export default Prompts;
