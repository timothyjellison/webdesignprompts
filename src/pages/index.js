import React from "react"
import Hero from '../components/Hero/Hero';
import IntroAndNav from '../components/IntroAndNav/IntroAndNav';
import Prompts from '../components/Prompts/Prompts';
import Footer from '../components/Footer/Footer';
import './reset.css';
import './index.css';

export default () => {
  return (
    <div>
      <Hero />
      <IntroAndNav />
      <Prompts/>
      <Footer />
    </div>
  );
}
