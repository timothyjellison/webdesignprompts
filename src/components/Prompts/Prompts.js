import React, {PureComponent} from 'react';
import './Prompts.css';

class Prompts extends PureComponent {
  render() {
    const content = [
      {text: "Make a minimalist blog theme, using only a few colors and only a couple fonts. Use it as the theme for your own blog if you don't have one already."},
      {text: "Recreate an existing site pixel by pixel using your choice of design or development tools. You'll learn a ton about how websites really work."},
      {text: "There's probably a company you love that has a website you hate — redesign their site. Share your redesign (with explanations for why you made each change) in a blog post and/or in your portfolio."},
      {text: "Build a website for a professional organization like a law firm or hospital. Make aesthetic choices that convey seriousness and professionalism."},
      {text: "Create a fan site and discussion board for a person or institution you would love to build a community around."},
      {text: "Create a gallery website for a painter or photographer. Let the images speak for themselves."},
      {text: "Make a great shopping cart checkout experience. All e-commerce sites need one so you might as well be baller at making them."},
      {text: "Create a website for a restaurant. Be sure to include a mobile-friendly menu (something few restaurant sites get right)."}
    ];

    return (
      <main className="prompts">
        {content.map((prompt, index) => <p className="prompt" key={index}>{prompt.text}</p>)}
      </main>
    );
  }
}

export default Prompts;
