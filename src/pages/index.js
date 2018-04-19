import React from "react"
import Hero from '../components/Hero/Hero';
import Prompts from '../components/Prompts/Prompts';
import Footer from '../components/Footer/Footer';
import content from './content';
import './index.css';

export default () => {
  return (
    <div>
      <Hero />
      <Prompts content={content}/>
      <Footer />
    </div>
  );
}
