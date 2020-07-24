import React from 'react'
import { connect } from 'react-redux'

import { countdownTutorial } from '../../CountdownFunctions/classSwitch'

import './CountdownDesktopTutorial.css'
import './CountdownDesktopTutorialDismount.css'
import './CountdownDesktopTutorialOnmount.css'

import './CountdownMobileTutorialLandscape.css'
import './CountdownMobileTutorialPortrait.css'
import './CountdownMobileTutorialDismount.css'
import './CountdownMobileTutorialOnmount.css'

const CountdownTutorial = (props) => {
  return(
    <div className={ countdownTutorial(props).tutorial }>
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