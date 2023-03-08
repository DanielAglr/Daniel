import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Intro from './components/intro';
import About from './components/about';
import Projects from './components/projects';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Intro />
    <About />
    <Projects />
    <Footer />
  </>
);

