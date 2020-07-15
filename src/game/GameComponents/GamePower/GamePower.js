import React from 'react'

import './GameDesktopPower.css'
import './GameDesktopPowerDismount.css'
import './GameMobilePowerLandscape.css'
import './GameMobilePowerPortrait.css'
import './GameMobilePowerDismount.css'

const GamePower = (props) => {

  let currentClass, powerClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      if(props.initDismount) {
        currentClass = "dismount_game_mobile_power_landscape"
        powerClass = "dismount_game_mobile_power_bar_landscape"
      }
      else {
        currentClass = "game_mobile_power_landscape"
        powerClass = "game_mobile_power_bar_landscape"
      }
    } else {
      if(props.initDismount) {
        currentClass = "dismount_game_mobile_power_portrait"
        powerClass = "dismount_game_mobile_power_bar_portrait"
      }
      else {
        currentClass = "game_mobile_power_portrait"
        powerClass = "game_mobile_power_bar_portrait"
      }

    }
  } else {
    if(props.initDismount) {
      currentClass = "dismount_game_desktop_power"
      powerClass = "dismount_game_desktop_power_bar"
    }
    else {
      currentClass = "game_desktop_power"
      powerClass = "game_desktop_power_bar"
    }
  }

  return(
    <div className={ currentClass }>
      <h2>POWER</h2>
      <h1>{ props.showPower ? (props.power).toFixed(2) : (0.00).toFixed(2) } %</h1>
      <div className={ powerClass }>
        <meter value={ props.powerRaw } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0">
        </meter>
      </div>
    </div>
  )
}

  export default GamePower