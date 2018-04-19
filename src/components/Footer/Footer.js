import React, {PureComponent} from 'react';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <p className="attribution">Built by <a href="https://www.timothyellison.com" target="_blank">Tim Ellison</a></p>
        <p>&copy; 2018, Tim Ellison</p>
      </footer>
    );
  }
}

export default Footer;
