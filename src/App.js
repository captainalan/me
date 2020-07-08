import React from 'react';
import './App.css';

import TopBar from './components/TopBar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ReactAd from './components/ReactAd';
import Footer from './components/Footer';

function App() {
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
          <p>I am a full-stack web developer based in Northern California. Currently, I'm working as a developer for <a href="https://growdnd.com">GROW Design & Development</a> and as a Teaching Assistant for the UC Davis Coding Bootcamp. I mainly work on web programming things using vanilla JavaScript, HTML/CSS, and Node with popular solutions like Express.js and React. I do general programming—like text processing, math problems, and data analysis in Python and R. I make extensive use of standard UNIX tools (e.g. grep, bash, Makefiles).</p>
          <p>Prior to working in software, I completed a double major (BA x2) in Philosophy and East Asian Languages at the University of Southern California (USC). I then completed an Masters in Linguistics (MA) at the University of California, Davis (UCD). With extensive experience shuffling abstractions (via studying philosophy) and arbitrary signs (via studying <a href="#languages">foreign languages</a> and linguistics), I feel great solving problems with computers! </p>
        </AboutMe>
        <Portfolio>
          <p>Here are some samples of my work. As a graduate student, I served as a (solo) instructor for one summer course and as a teaching assistant for many courses including Introduction to Linguistics and Computational Linguistics. Accordingly, much of the work featured here addresses education-related problems.</p>

          <h3>Web Design & Programming</h3>
          <p>All of these projects are open source—see more code on my <a href="https://github.com/captainalan">Github</a> profile.</p>

          <div className="Projects">

            <h4><a href="https://kaiwahour.github.io/home/">Kaiwa Hour (Japanese/English Conversation Group) Website</a></h4>
            <p className="Description">This is a website build in React for a (real) organization. In addition to doing much of the coding for this website, I am acting as the project lead for this open source project. The GitHub repository can be found <a href="https://github.com/kaiwahour/home">here</a>.</p>

            <h4><a href="https://github.com/captainalan/exam-version-generator/">Exam Version Generator</a></h4>
            <p className="Description">This is a Flask App (Python 3) for making multiple versions of an exam from a question set stored in JSON format. This project has been used in production for generating exams at a major university.</p>

            <h4><a href="https://github.com/captainalan/MERN-quickstart">MERN-quickstart</a></h4>
            <p className="Description">This is boilerplate web app code using the MERN Stack; that is, MongoDB (database), Express (server), React (views), and Node (runtime). This was coded over a weekend when I found out I had to use the MERN stack for a job.</p>

            <h4><a href="https://captainalan.github.io/exam-clock/">Exam Clock</a></h4> 
            <p className="Description">This app display the time for students during exams on large displays. Created with React.js. Has been used with real university exams. See the source code online at <a href="https://github.com/captainalan/exam-clock">GitHub</a>.</p>

          </div>
          <p><b>Note</b>: The code for this website can be found on my Github too! <span role="img" aria-label="sparkles">✨✨✨</span></p>

          <h3>Writing & Editing</h3>
          <p>Below are some (published) samples of my writing:</p>
          <ul>
            <li><a href="https://journals.linguisticsociety.org/proceedings/index.php/PLSA/article/view/3702">"Indefinite markers, grammaticalization, and language contact phenomena in Chinese"</a> (2016)</li>
            <li><a href="http://socialsciences.ucdavis.edu/@@search?SearchableText=Alan+wong">Articles for the Institute for Social Sciences at UC Davis</a> (2017) </li>
          </ul>
          <p>Here are some pieces I have published on <a href="https://www.linkedin.com/in/alan-wong-bb342569/">LinkedIn</a>:</p>
          <ul>
            <li><a href="https://www.linkedin.com/pulse/beating-bottlenecks-alan-wong/">"Beating Bottlenecks"</a> (May 2019)</li>
            <li><a href="https://www.linkedin.com/pulse/revisiting-old-tools-new-results-alan-wong/">"Revisiting Old Tools for New Results"</a> (April 2019)</li>
            <li><a href="https://www.linkedin.com/pulse/hello-tiredness-tell-me-more-alan-wong/">"Hello tiredness; tell me more"</a> (April 2019)</li>
          </ul>
          <p>Additionally, I do <a href="https://en.wikipedia.org/wiki/Ghostwriter">ghostwriting</a> and actively maintain a number of anonymous blogs—you'll have to trust me here. Linking those pieces would make them not so anonymous now, wouldn't it?! <span role="img" aria-label="lol">😛</span></p>

          <h3>Graphics & Artwork</h3>
          <p>I do graphics/artwork mainly as a hobby, making things like
            greeting cards for friends and family and photo manipulations to 
            amuse myself. E.g., ever want to produce an image of a <a href="https://github.com/captainalan/black-hole-tutorial/blob/master/README.md">Black Hole</a> on a budget?
            In addition to the (fun) examples here, I have produced banners, flyers, and other materials for organizations I have worked with.
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
          <p>Usually, I work with <a href="https://www.gimp.org/">GIMP </a> (2D, raster), <a href="https://inkscape.org/">Inkscape</a> (2D, vector) and <a href="https://www.blender.org/">Blender</a> (3D). I would work with Adobe software if you hired me/bought me a subscription to do so.</p>
          <a id="languages" href="#languages" className="Anchor">これが見える？！</a>
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
          <p>Find me on <a href="https://github.com/captainalan">GitHub</a> or <a href="https://www.linkedin.com/in/alan-wong-bb342569/">LinkedIn</a>. Business inquires are welcome. You can expect a reply within 48 hours during the work week.
              Contact me directly at <span className="email">captainalan at gmail dot com</span>. </p>
        </Contact>
        <ReactAd />
      </div>
      <Footer />
    </div>
  );
}

export default App;
