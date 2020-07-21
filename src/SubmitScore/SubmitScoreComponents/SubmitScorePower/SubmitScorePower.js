import React from 'react'

import { connect } from 'react-redux'

import './SubmitScoreDesktopPower.css'
import './SubmitScoreDesktopPowerDismount.css'
import './SubmitScoreDesktopPowerOnmount.css'

import './SubmitScoreMobilePowerLandscape.css'
import './SubmitScoreMobilePowerPortrait.css'


const SubmitScorePower = (props) => {

  let powerClass, powerBarClass

  // if(props.isMobile){
  if(props.device === "mobile") {
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      powerClass = "submit_score_mobile_power_landscape"
      powerBarClass = "submit_score_mobile_power_bar_landscape"
    } else {
      powerClass = "submit_score_mobile_power_portrait"
      powerBarClass = "submit_score_mobile_power_bar_portrait"
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
    orientation: state.detect.orientation
  }
}

export default connect(mapStateToProps)(SubmitScorePower)