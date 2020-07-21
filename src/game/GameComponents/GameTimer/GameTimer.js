import React from 'react'

import { connect } from 'react-redux'

import './GameDesktopTimer.css'
import './GameDesktopTimerOnmount.css'
import './GameDesktopTimerDismount.css'
import './GameMobileTimerLandscape.css'
import './GameMobileTimerPortrait.css'

const GameMobileTimer = (props) => {

  let currentClass

  // if(props.isMobile){
  if(props.device === "mobile") {
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      currentClass = "game_mobile_timer_landscape"
    } else {
      currentClass = "game_mobile_timer_portrait"
    }
  } else {
    if(props.initDismount) currentClass = "dismount_game_desktop_timer"
    else currentClass = "game_desktop_timer"
  }


  return(
    <div className={ currentClass }>
      <h1>TIME</h1>
      <h2>{ props.time ? props.time : (0.00).toFixed(2) }</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    device: state.detect.device,
    orientation: state.detect.orientation
  }
}

export default connect(mapStateToProps)(GameMobileTimer)