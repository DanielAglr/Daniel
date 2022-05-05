import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './utility/colors.css';

import Intro from './components/intro/intro.js';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Intro />
    <About />
    <Projects />
    <Footer />
  </>
);

