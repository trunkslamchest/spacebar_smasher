import React from 'react'
import { connect } from 'react-redux'

import './GameDesktopCounter.css'
import './GameDesktopCounterDismount.css'
import './GameDesktopCounterOnmount.css'
import './GameMobileCounterLandscape.css'
import './GameMobileCounterPortrait.css'

const GameCounter = (props) => {

  let currentClass

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      currentClass = "game_mobile_counter_landscape"
    } else {
      currentClass = "game_mobile_counter_portrait"
    }
  } else {
    if(props.ui.initDismount) currentClass = "dismount_game_desktop_counter"
    else currentClass = "game_desktop_counter"
  }

  return(
    <div className={ currentClass }>
      <h1>SMASHES</h1>
      <h2>{ props.count ? props.count : 0 }</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(GameCounter)