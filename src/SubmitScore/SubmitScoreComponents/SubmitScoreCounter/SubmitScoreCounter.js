import React from 'react'

import './SubmitScoreDesktopCounter.css'
import './SubmitScoreDesktopCounterOnmount.css'
import './SubmitScoreDesktopCounterDismount.css'

import './SubmitScoreMobileCounterLandscape.css'
import './SubmitScoreMobileCounterPortrait.css'

const SubmitScoreCounter = (props) => {

  let counterClass

  if(props.isMobile){
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

export default SubmitScoreCounter