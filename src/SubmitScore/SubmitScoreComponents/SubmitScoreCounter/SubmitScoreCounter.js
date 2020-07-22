import React from 'react'
import { connect } from 'react-redux'

import './SubmitScoreDesktopCounter.css'
import './SubmitScoreDesktopCounterOnmount.css'
import './SubmitScoreDesktopCounterDismount.css'

import './SubmitScoreMobileCounterLandscape.css'
import './SubmitScoreMobileCounterPortrait.css'

const SubmitScoreCounter = (props) => {

  let counterClass

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      counterClass = "submit_score_mobile_counter_landscape"
    } else {
      counterClass = "submit_score_mobile_counter_portrait"
    }
  } else {
    if(props.ui.initDismount) {
      counterClass = "dismount_submit_score_desktop_counter"
    } else {
      counterClass = "submit_score_desktop_counter"
    }
  }

  return(
    <div className={ counterClass }>
      <h1>SMASHES</h1>
      <h2>{ props.scoreboard.score.score ? props.scoreboard.score.score : 0 }</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    scoreboard: state.scoreboard,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(SubmitScoreCounter)