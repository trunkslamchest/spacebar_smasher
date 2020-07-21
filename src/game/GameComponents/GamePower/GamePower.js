import React from 'react'
import { connect } from 'react-redux'

import './GameDesktopPower.css'
import './GameDesktopPowerDismount.css'
import './GameDesktopPowerOnmount.css'
import './GameMobilePowerLandscape.css'
import './GameMobilePowerPortrait.css'

const GamePower = (props) => {

  let powerClass, powerBarClass

  if(props.device === "mobile") {
    if(props.orientation === "landscape") {
      powerClass = "game_mobile_power_landscape"
      powerBarClass = "game_mobile_power_bar_landscape"
    } else {
      powerClass = "game_mobile_power_portrait"
      powerBarClass = "game_mobile_power_bar_portrait"
    }
  } else {
    if(props.ui.initDismount) {
      powerClass = "dismount_game_desktop_power"
      powerBarClass = "game_desktop_power_bar"
    } else {
      powerClass = "game_desktop_power"
      powerBarClass = "game_desktop_power_bar"
    }
  }

  return(
    <div className={ powerClass }>
      <h1>POWER</h1>
      <h2>{ props.power ? (props.power).toFixed(2) : (0.00).toFixed(2) } %</h2>
      <div className={ powerBarClass }>
        <meter value={ props.powerRaw } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0"></meter>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    device: state.detect.device,
    orientation: state.detect.orientation,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(GamePower)