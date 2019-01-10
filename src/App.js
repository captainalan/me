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
            profile_img_src={ require("./images/github_profile.png") } 
          >
            <p>I am a full-stack web developer based in Northern California. I mainly work on front-end things using vanilla JavaScript, HTML/CSS, and React.js. On the back-end I have worked with Node.js, Express.js, SQL, and MongoDB. I do general programming in Python. I also have experience working with shell scripts, Makefiles, C++, R, Lisp, Haskell, and (SWI) Prolog.</p>
            <p>Prior to working in software, I completed a double major (BA x2) in Philosophy and East Asian Languages at the University of Southern California (USC). I then completed an Masters in Linguistics (MA) at the University of California, Davis (UCD). With extensive experience shuffling abstractions (via studying philosophy) and arbitrary signs (via studying foreign languages and linguistics), I am now making ends meet as a freelance programmer. </p>
            <p><span className="Highlighted">Currently, I'm seeking full time employment in a web development position.</span></p>
          </AboutMe>
          <Portfolio>
            <p>Here are some samples of my work. As a graduate student, I served as a (solo) instructor for one summer course and as a teaching assistant for many courses including Introduction to Linguistics and Computational Linguistics. Accordingly, much of the work featured here addresses education-related problems.</p>

            <h3>Web Design & Programming</h3>
            <p>All of these projects are open source—see more code on my <a href="https://github.com/captainalan">Github</a> profile.</p>

            <div className="Projects">
              <h4><a href="https://github.com/captainalan/exam-clock">Exam Clock</a></h4> 
              <p className="Description">Display the time for students during exams on large displays. Created with React.js.</p>

              <h4><a href="https://captainalan.github.io/exam-version-generator/">Exam Version Generator</a></h4>
              <p className="Description">Make multiple versions of an exam from a question set stored in JSON format. Written in Python.</p>

              <h4><a href="https://captainalan.github.io/bilingual-text/">Bilingual Text</a></h4>
              <p className="Description">Built with plain HTML/CSS/JavaScript.</p>

              <h4><a href="https://github.com/captainalan/exam-evaluation-made-easy-2/blob/master/Midterm%20Score%20Analysis.ipynb">Midterm Score Analysis</a></h4>
              <p className="Description">Basic statistical analysis and data visualization. Made using a Jupyter notebook.</p>
            </div>
            <p><b>Note</b>: The code for this website can be found on my Github too! <span role="img" aria-label="sparkles">✨✨✨</span></p>

            <h3>Writing & Editing</h3>
            <p>Below are some (published) samples of my writing:</p>
            <ul>
              <li><a href="https://journals.linguisticsociety.org/proceedings/index.php/PLSA/article/view/3702">"Indefinite markers, grammaticalization, and language contact phenomena in Chinese"</a> (2016)</li>
              <li><a href="http://socialsciences.ucdavis.edu/@@search?SearchableText=Alan+wong">Articles for the Institute for Social Sciences at UC Davis</a> (2017) </li>
            </ul>
            <p>Additionally, I do <a href="https://en.wikipedia.org/wiki/Ghostwriter">ghostwriting</a> and actively maintain a number of anonymous blogs—you'll have to trust me here. Linking those pieces would make them not so anonymous now, wouldn't it?! <span role="img" aria-label="lol">😛</span></p>

            <h3>Graphics & Artwork</h3>
            <p>I do graphics/artwork mainly as a hobby, making things like
              greeting cards for friends and family and photo manipulations to 
              amuse myself.
            </p>
            <div className="ArtExample">
              <img 
                alt="bird"
                src={ require("./images/2015 mothers day card.png") } 
                height="225px"
                width="300px"
              />
              <p>
                A cute card I made for my mother
              </p>
            </div>
            <div className="ArtExample">
              <img 
                alt="bird"
                src={ require("./images/egghead-davis.jpg") } 
                height="270px"
                width="298px"
              />
              <p>
                Me as an egghead
              </p>
            </div>
            <p>I work on graphics mostly with <a href="https://www.gimp.org/">GIMP </a> (2D, raster), <a href="https://inkscape.org/">Inkscape</a> (2D, vector) and <a href="https://www.blender.org/">Blender</a> (3D).</p>

            <h3>Languages</h3>
            <p>My formal education was largely motivated by a fascination of the diversity of human communication. Born into an monolingual English-speaking family, I took it upon myself to learn Spanish in my highschool years and then (Mandarin) Chinese and Korean in my undergraduate years.</p>
            <p>Now, I am studying Japanese as a leader of <a href="https://www.facebook.com/kaiwahour">Kaiwa Hour</a> (Japanese/English Conversation Club). I am picking up French and Indonesian as well as I follow world events. I can translate Chinese, Japanese, Korean, and Spanish to English and frequently do so in informal settings.</p>
            <div className="Projects">
              <span lang="zh-Hans">你说普通话吗？ </span>
              <span lang="jp">日本語が話せますか？ </span>
              <span lang="kr">한국어를 할 수 있어요? </span>
              <span lang="es">¿Se habla usted español? </span>
            </div>
            <p>Given my experience working with many different languages and writing systems, I am well informed to optimize your website for multilingual audiences.</p>

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

const TopBar = (props) => {
  return(
    <div className="TopBar">
      {props.children}
    </div>
  );
}

const AboutMe = (props) => {
  return(
    <div className="AboutMe">
      <img 
        alt="Profile"
        className="ProfilePic"
        src = {props.profile_img_src}
        height="300px"
        width="300px"
      />
      <h2 id="about">About me</h2>

      {props.children}
    </div>
  )
}

const Portfolio = (props) => {
  return(
    <div className="Portfolio" id="portfolio">
      <h2>Portfolio</h2>
      {props.children}
    </div>
  )
}

const Contact = (props) => {
  return(
    <div className="Contact" id="contact">
      <h2>Contact</h2>
      {props.children}
    </div>
  )
}

const ReactAd = (props) => {
  return(
    <div className="ReactAd">
      This website was bootstrapped with 
      Facebook's <code>create-react-app</code>.
      {/* <img src={logo} /> */}
    </div>
  )
}

const Footer = (props) => {
  return(
    <div className="Footer">
      <div className="Copyright">Copyright © 2018-2019</div>
      <div className="CopyrightName">Alan L. Wong</div>
    </div>
  );
}

export default App;