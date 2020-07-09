import React from 'react';
import './App.css';

import TopBar from './components/TopBar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ReactAd from './components/ReactAd';
import Footer from './components/Footer';

import Data from './mock/data';

function App() {
  // Temporarily mocking data
  const about_me = Data.pages[0];
  console.log(about_me);
  
  return (
    <div className="App">
      <TopBar>
        <a href="#top">Top</a> 
        <a href="#about">About</a> 
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        {/*<span>Updated 01/2019</span>*/}
      </TopBar>

      <div className="TopBanner"></div>
      <div className="Name">Alan L. Wong</div>
      <div className="TagLine">aspiring architect of the internet</div>

      <div className="MainFlexContainer">
        <AboutMe
          title={about_me.props.title}
          profile_image={about_me.props.profile_image}
          text={about_me.props.text}
        />
        <Portfolio />
        <Contact />
        <ReactAd />
      </div>
      <Footer />
    </div>
  );
}

export default App;
