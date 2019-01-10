import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// I need to pass component content as props rather than writing it directly
// into the code...
// Use children props

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar>
          <a href="#top">Home</a> 
          <a href="#about">About</a> 
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <span>Updated 01/2019</span>
        </TopBar>

        <div className="TopBanner"></div>
        <div className="Name">Alan L. Wong</div>
        <div className="TagLine">uhh... よろしくおねがいします</div>

        <div className="MainFlexContainer">
          <AboutMe 
            profile_img_src={ require("./github_profile.png") } 
          >
            <p>
              I am a full-stack web developer based in Northern California. I 
              mainly work on front-end things using vanilla JavaScript, 
              HTML/CSS, and React.js. I do general programming in Python.
              I am also experienced working with many other tools, including R 
              (commonly used in the social sciences for data analysis and 
              visualization), Haskell (a functional programming language), and 
              even Prolog. I also like "old school" UNIX tools like Makefiles, 
              bash shell scripts, and the glorious emacs text editor (in evil 
              mode).
            </p>
            <p>
              Prior to working in software, I completed a double major (BA x2) 
              in Philosophy and East Asian Languages at University of Southern 
              California (USC). I then completed an Masters in Linguistics (MA) at 
              the University of California, Davis (UCD).
            </p>
            <p>
              With extensive experience shuffling abstractions (via philosophy) and 
              arbitrary signs (natural language), I feel right at home writing code. 
            </p>
            <p className="Highlighted">
              Currently, I'm seeking full time employment in a web development 
              position.
            </p>

            <p>When I'm not pressing buttons on computers, I enjoy making friends and learning foreign languages. (Link to Kaiwa Hour (会話アワー)).</p>
          </AboutMe>
          <Portfolio>
            <p>
              Here are some samples of my work. All of these projects are 
              open source—see more code on 
              my <a href="https://github.com/captainalan">Github</a> profile.
              The code for this website too can be found on Github!
            </p> 

            <h3>Web Design & Programming</h3>
            <p>Maybe put a carousel here showing some stuff</p>
            <p>(Offer a short description of each project.)</p>

            <h3>Writing & Editing</h3>

            <p>
                As a graduate student, I served as a (solo) instructor for one summer course and as a teaching assistant for many courses including Introduction to Linguistics, Computational Linguistics, and...
            </p>

            <p>(Some publications. Maybe my early LSA paper? ISS work?)</p>

            <p>
              I also do ghost writing and actively maintain a number of anonymous 
              blogs—you'll have to trust me here; linking those pieces would make them
              not so anonymous now, wouldn't it?!
            </p>

            <h3>Graphics & Artwork</h3>
            <p>I do graphics/artwork mainly as a hobby, making things like
              greeting cards for friends and family and photo manipulations to 
              amuse myself.
            </p>

            <p>
              (Showcase some of my early Davis photo edits)
            </p>
          </Portfolio>
          <Contact>
            <p>Find me on <a href="https://github.com/captainalan">Github</a> or <a href="https://www.linkedin.com/in/alan-wong-bb342569/">LinkedIn</a>. Business inquires are welcome. You can expect a reply within 48 hours during the work week.</p>
            <p>Contact me directly at <span className="email">captainalan at gmail dot com</span>. </p>
          </Contact>
          <ReactAd />
        </div>
        <Footer />
      </div>
    );
  }
}

function TopBar(props) {
  return(
    <div className="TopBar">
      {props.children}
    </div>
  );
}

class AboutMe extends Component {

  toggleMoreAboutMe() {
    this.setState( {showMore: !this.state.showMore} ); //hmm...
  }
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };

    this.toggleMoreAboutMe = this.toggleMoreAboutMe.bind(this);
  }

  render() {
    return(
      <div className="AboutMe">
        <img 
          alt="Profile"
          className="ProfilePic"
          src = {this.props.profile_img_src}
          height="300px"
          width="300px"
        />
        <h2 id="about">About me</h2>

        {/* Display the first 3 paragraphs or so */}
        {this.props.children}

        <div className="ReadMore">
          <div className={this.state.showMore ? "showing" : "hidden"}>
            (Display the reamining text of this.props.children).
          </div>
          {this.state.showMore 
            ? <button onClick={this.toggleMoreAboutMe}>Hide more.</button> 
            : <button onClick={this.toggleMoreAboutMe}>Read more...</button>}
        </div>
      </div>
    )
  }
}


function Portfolio(props) {
  return(
    <div className="Portfolio" id="portfolio">
      <h2>Portfolio</h2>
      {props.children}
    </div>
  )
}

function Contact(props) {
  return(
    <div className="Contact" id="contact">
      <h2>Contact</h2>
      {props.children}
    </div>
  )
}

function ReactAd(props) {
  return(
    <div className="ReactAd">
      This website was bootstrapped with 
      Facebook's <code>create-react-app</code>.
      {/* <img src={logo} /> */}
    </div>
  )
}

function Footer(props) {
  return(
    <div className="Footer">
      <div className="Copyright">Copyright © 2018-2019</div>
      <div className="CopyrightName">Alan L. Wong</div>
    </div>
  );
}

export default App;