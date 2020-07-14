import React from 'react'

import './CountdownMobileTutorial.css'
import './CountdownMobileTutorialDismount.css'

const CountdownMobileTutorial = (props) => {
  return(
    <div className={ props.initDismount ? "dismount_countdown_mobile_tutorial" : "countdown_mobile_tutorial" }>
        <p>Press the spacebar as many times as you can in 30 seconds</p>
    </div>
  )
}

export default CountdownMobileTutorial