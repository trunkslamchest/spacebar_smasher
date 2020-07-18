import React from 'react'

import './CountdownDesktopTutorial.css'
import './CountdownDesktopTutorialDismount.css'
import './CountdownDesktopTutorialOnmount.css'

import './CountdownMobileTutorialLandscape.css'
import './CountdownMobileTutorialPortrait.css'
import './CountdownMobileTutorialDismount.css'
import './CountdownMobileTutorialOnmount.css'

const CountdownTutorial = (props) => {

  let currentClass

  if(props.isMobile){
    if(props.orientation === "landscape") {
      if(props.initDismount) currentClass = "dismount_countdown_mobile_tutorial_landscape"
      else currentClass = "countdown_mobile_tutorial_landscape"
    } else {
      if(props.initDismount) currentClass = "dismount_countdown_mobile_tutorial_portrait"
      else currentClass = "countdown_mobile_tutorial_portrait"
    }
  } else {
    if(props.initDismount) currentClass = "dismount_countdown_desktop_tutorial"
    else currentClass = "countdown_desktop_tutorial"
  }

  return(
    <div className={ currentClass }>
        <p>Press the spacebar as many times as you can in 30 seconds</p>
    </div>
  )
}

export default CountdownTutorial