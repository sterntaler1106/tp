import React from 'react';

import './CharComponent.css'

const charComponent = (props) => {
    return (
      <p onClick={props.clicked}>{props.charToShow}</p>
    );
}

export default charComponent;