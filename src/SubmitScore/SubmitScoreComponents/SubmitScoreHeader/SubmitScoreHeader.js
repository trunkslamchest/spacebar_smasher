import React from 'react'

import './SubmitScoreDesktopHeader.css'
import './SubmitScoreDesktopHeaderOnmount.css'
import './SubmitScoreDesktopHeaderDismount.css'

import './SubmitScoreMobileHeaderLandscape.css'
import './SubmitScoreMobileHeaderPortrait.css'

const SubmitScoreHeader = (props) => {

  let headerClass

  // if(props.isMobile){
  //   if(props.orientation === "landscape" && window.innerWidth < 1024) {
  //     if(props.initDismount) {
  //       headerClass = "dismount_submit_score_mobile_header_landscape"
  //     } else {
  //       headerClass = "submit_score_mobile_header_landscape"
  //     }
  //   } else {
  //     if(props.initDismount) {
  //       headerClass = "dismount_submit_score_mobile_header_portrait"
  //     } else {
  //       headerClass = "submit_score_mobile_header_portrait"
  //     }
  //   }
  // } else {
  //   if(props.initDismount) {
  //     headerClass = "dismount_submit_score_desktop_header"
  //   } else {
  //     headerClass = "submit_score_desktop_header"
  //   }
  // }

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      headerClass = "submit_score_mobile_header_landscape"
    } else {
      headerClass = "submit_score_mobile_header_portrait"
    }
  } else {
    if(props.initDismount) headerClass = "dismount_submit_score_desktop_header"
    else headerClass = "submit_score_desktop_header"
  }

  return(
    <div className={ headerClass }>
      <h1>OUTTA TIME!</h1>
    </div>
  )
}

export default SubmitScoreHeader