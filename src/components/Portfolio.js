import React from 'react';

function Portfolio(props) {
    return (
        <div className="Portfolio">
            <a className="Anchor" href="#portfolio" id="portfolio">Or inspecting this site's source code?</a>
            <h2>Portfolio</h2>
            {props.children}
        </div>
    )
}

export default Portfolio;