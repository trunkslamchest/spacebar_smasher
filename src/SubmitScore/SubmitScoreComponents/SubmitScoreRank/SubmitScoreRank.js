import React from 'react'

import './SubmitScoreDesktopRank.css'
import './SubmitScoreMobileRankLandscape.css'
import './SubmitScoreMobileRankPortrait.css'

import './SubmitScoreDesktopRankDismount.css'
import './SubmitScoreMobileRankDismount.css'

const SubmitScoreRank = (props) => {

  let rankClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      if(props.initDismount) {
        rankClass = "dismount_submit_score_mobile_rank_landscape"
      } else {
        rankClass = "submit_score_mobile_rank_landscape"
      }
    } else {
      if(props.initDismount) {
        rankClass = "dismount_submit_score_mobile_rank_portrait"
      } else {
        rankClass = "submit_score_mobile_rank_portrait"
      }
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

      <h2>RANK</h2>
      <h1>{ props.rank ? props.rank : "SUPER BABY FINGERS" }</h1>
    </div>
  )
}

export default SubmitScoreRank