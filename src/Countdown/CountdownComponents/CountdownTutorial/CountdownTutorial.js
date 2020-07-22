import React from 'react'
import { connect } from 'react-redux'

import './CountdownDesktopTutorial.css'
import './CountdownDesktopTutorialDismount.css'
import './CountdownDesktopTutorialOnmount.css'

import './CountdownMobileTutorialLandscape.css'
import './CountdownMobileTutorialPortrait.css'
import './CountdownMobileTutorialDismount.css'
import './CountdownMobileTutorialOnmount.css'

const CountdownTutorial = (props) => {

  let currentClass

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) currentClass = "dismount_countdown_mobile_tutorial_landscape"
      else currentClass = "countdown_mobile_tutorial_landscape"
    } else {
      if(props.ui.initDismount) currentClass = "dismount_countdown_mobile_tutorial_portrait"
      else currentClass = "countdown_mobile_tutorial_portrait"
    }
  } else {
    if(props.ui.initDismount) currentClass = "dismount_countdown_desktop_tutorial"
    else currentClass = "countdown_desktop_tutorial"
  }

  return(
    <div className={ currentClass }>
        <p>Press the spacebar as many times as you can in 30 seconds</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(CountdownTutorial)