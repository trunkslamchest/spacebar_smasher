import React from 'react'

import './CountdownDesktopTutorial.css'
import './CountdownDesktopTutorialDismount.css'

const CountdownDesktopTutorial = (props) => {
  return(
    <div className={ props.initDismount ? "dismount_countdown_desktop_tutorial" : "countdown_desktop_tutorial" }>
        <p>Press the spacebar as many times as you can in 30 seconds</p>
    </div>
  )
}

export default CountdownDesktopTutorial