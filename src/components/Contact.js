import React from 'react';

const Contact = (props) => {
    return (
        <div className="Contact">
            <a className="Anchor" href="#contact" id="contact">The text you are reading should be hidden.</a>
            <h2>Contact</h2>
            {props.children}
        </div>
    )
}

export default Contact;