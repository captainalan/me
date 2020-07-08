import React from 'react';

function AboutMe(props) {
    return(
      <div className="AboutMe">
        <a className="Anchor" href="#about" id="about">Might you be using a screen reader?</a>
        <img 
          alt="Profile"
          className="ProfilePic"
          src = {props.profile_img_src}
          height="300px"
          width="300px"
        />
        <h2>About me</h2>
  
        {props.children}
      </div>
    )
  }

  export default AboutMe;