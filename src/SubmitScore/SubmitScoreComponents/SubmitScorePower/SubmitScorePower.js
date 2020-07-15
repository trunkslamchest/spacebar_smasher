import React from 'react'

import './SubmitScoreDesktopPower.css'
import './SubmitScoreMobilePowerLandscape.css'
import './SubmitScoreMobilePowerPortrait.css'

import './SubmitScoreDesktopPowerDismount.css'
import './SubmitScoreMobilePowerDismount.css'

const SubmitScorePower = (props) => {

  const power = <h1>{ props.power ? (props.power).toFixed(2) : (0.00).toFixed(2) } %</h1>

  let powerClass, powerBarClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      if(props.initDismount) {
        powerClass = "dismount_submit_score_mobile_power_landscape"
        powerBarClass = "submit_score_mobile_power_bar_landscape"
      } else {
        powerClass = "submit_score_mobile_power_landscape"
        powerBarClass = "submit_score_mobile_power_bar_landscape"
      }
    } else {
      if(props.initDismount) {
        powerClass = "dismount_submit_score_mobile_power_portrait"
        powerBarClass = "submit_score_mobile_power_bar_portrait"

      } else {
        powerClass = "submit_score_mobile_power_portrait"
        powerBarClass = "submit_score_mobile_power_bar_portrait"

      }
    }
  } else {
    if(props.initDismount) {
      powerClass = "dismount_submit_score_desktop_power"
      powerBarClass = "submit_score_desktop_power_bar"
    } else {
      powerClass = "submit_score_desktop_power"
      powerBarClass = "submit_score_desktop_power_bar"
    }
  }

  return(
    <div className={ props.showPower ? powerClass : "blank" }>
      <h2>POWER</h2>
      { power }
      <div className={ powerBarClass }>
        <meter value={ props.powerRaw } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0">
        </meter>
      </div>
    </div>
  )
}

export default SubmitScorePower