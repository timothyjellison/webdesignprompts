import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';

export default ({children}) => {
  return (
    <div>
      <Helmet title={`Web Design Prompts`} />
        {children()}
      <Footer />
    </div>
  );
}
