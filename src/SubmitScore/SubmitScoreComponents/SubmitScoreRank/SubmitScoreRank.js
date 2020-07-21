import React from 'react'
import { connect } from 'react-redux'

import './SubmitScoreDesktopRank.css'
import './SubmitScoreDesktopRankDismount.css'
import './SubmitScoreDesktopRankOnmount.css'

import './SubmitScoreMobileRankLandscape.css'
import './SubmitScoreMobileRankPortrait.css'

const SubmitScoreRank = (props) => {

  let rankClass

  if(props.device === "mobile") {
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      rankClass = "submit_score_mobile_rank_landscape"
    } else {
      rankClass = "submit_score_mobile_rank_portrait"
    }
  } else {
    if(props.initDismount) {
      rankClass = "dismount_submit_score_desktop_rank"
    } else {
      rankClass = "submit_score_desktop_rank"
    }
  }

  return(
    <div className={ rankClass }>
      <h1>RANK</h1>
      <h2>{ props.rank ? props.rank : "SUPER BABY FINGERS" }</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    device: state.detect.device,
    orientation: state.detect.orientation
  }
}

export default connect(mapStateToProps)(SubmitScoreRank)