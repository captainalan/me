import React from 'react';

function AboutMe(props) {
    return(
      <div className="AboutMe">
        <a className="Anchor" href="#about" id="about">Might you be using a screen reader?</a>
        <img 
          alt="Profile"
          className="ProfilePic"
          src={props.profile_image}
          height="300px"
          width="300px"
        />
        <h2>{props.title}</h2>
        {props.text.map(p => <p>{p}</p>)}
          
          
      </div>
    )
  }

  export default AboutMe;