import React from 'react';

function TopBar(props) {
    return(
      <div className="TopBar">
        {props.children}
      </div>
    );
  }

  export default TopBar;