import React from 'react';


import './App.scss';
import Hero from './Hero/hero';
import Nav from './Nav/nav';
import AboutMe from './AboutMe/aboutMe';
import Photos from './Photos/photo';
import Footer from './Footer/footer';



function App() {
  return (
    <div className = "app">
      <div className = "portfolio">
        <Nav />
        <Hero />
        <AboutMe />
        <Photos />
      </div>
      <Footer />
    </div>
  );
}

export default App;
