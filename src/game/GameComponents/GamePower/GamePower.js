import React from 'react'

import './GameDesktopPower.css'
import './GameDesktopPowerDismount.css'
import './GameDesktopPowerOnmount.css'
import './GameMobilePowerLandscape.css'
import './GameMobilePowerPortrait.css'

const GamePower = (props) => {

  let powerClass, powerBarClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      powerClass = "game_mobile_power_landscape"
      powerBarClass = "game_mobile_power_bar_landscape"
    } else {
        powerClass = "game_mobile_power_portrait"
        powerBarClass = "game_mobile_power_bar_portrait"
    }
  } else {
    if(props.initDismount) {
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
        <meter value={ props.powerRaw } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0">
        </meter>
      </div>
    </div>
  )
}

  export default GamePower