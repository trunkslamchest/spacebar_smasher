import React from 'react'

import './CountdownTutorial.css'

const CountdownTutorial = (props) => {
  return(
    <div className={ props.initDismount ? "dismount_countdown_tutorial" : "countdown_tutorial" }>
        <p>Press the spacebar as many times as you can in 30 seconds</p>
    </div>
  )
}

export default CountdownTutorial