import React, {PureComponent} from 'react';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <p className="attribution">&copy; 2018 <a href="https://www.timothyellison.com" target="_blank">Tim Ellison</a></p>
      </footer>
    );
  }
}

export default Footer;
