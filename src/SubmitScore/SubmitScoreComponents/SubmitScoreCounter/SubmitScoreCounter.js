import React from 'react'
import { connect } from 'react-redux'

import './SubmitScoreDesktopCounter.css'
import './SubmitScoreDesktopCounterOnmount.css'
import './SubmitScoreDesktopCounterDismount.css'

import './SubmitScoreMobileCounterLandscape.css'
import './SubmitScoreMobileCounterPortrait.css'

const SubmitScoreCounter = (props) => {

  let counterClass

  if(props.device === "mobile") {
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      counterClass = "submit_score_mobile_counter_landscape"
    } else {
      counterClass = "submit_score_mobile_counter_portrait"
    }
  } else {
    if(props.initDismount) {
      counterClass = "dismount_submit_score_desktop_counter"
    } else {
      counterClass = "submit_score_desktop_counter"
    }
  }

  return(
    <div className={ counterClass }>
      <h1>SMASHES</h1>
      <h2>{ props.count ? props.count : 0 }</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    device: state.detect.device,
    orientation: state.detect.orientation
  }
}

export default connect(mapStateToProps)(SubmitScoreCounter)