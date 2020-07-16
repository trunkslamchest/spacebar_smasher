import React from 'react'

import './SubmitScoreDesktopCounter.css'
import './SubmitScoreMobileCounterLandscape.css'
import './SubmitScoreMobileCounterPortrait.css'

import './SubmitScoreDesktopCounterDismount.css'
import './SubmitScoreMobileCounterDismount.css'

const SubmitScoreCounter = (props) => {

  let counterClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      if(props.initDismount) {
        counterClass = "dismount_submit_score_mobile_counter_landscape"
      } else {
        counterClass = "submit_score_mobile_counter_landscape"
      }
    } else {
      if(props.initDismount) {
        counterClass = "dismount_submit_score_mobile_counter_portrait"
      } else {
        counterClass = "submit_score_mobile_counter_portrait"
      }
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
      <h2>SMASHES</h2>
      <h1>{ props.count ? props.count : 0 }</h1>
    </div>
  )
}

export default SubmitScoreCounter