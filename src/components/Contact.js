import React from 'react';

const Contact = (props) => {
    return (
        <div className="Contact">
            <a className="Anchor" href="#contact" id="contact">The text you are reading should be hidden.</a>
            <h2>Contact</h2>
             <p>Find me on <a href="https://github.com/captainalan">GitHub</a> or <a href="https://www.linkedin.com/in/alan-wong-bb342569/">LinkedIn</a>. Business inquires are welcome. You can expect a reply within 48 hours during the work week. Contact me directly at <span className="email">captainalan at gmail dot com</span>. </p>
        </div>
    )
}

export default Contact;