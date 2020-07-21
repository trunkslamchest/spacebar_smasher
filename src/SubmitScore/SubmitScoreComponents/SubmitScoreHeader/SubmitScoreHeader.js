import React from 'react'
import { connect } from 'react-redux'

import './SubmitScoreDesktopHeader.css'
import './SubmitScoreDesktopHeaderOnmount.css'
import './SubmitScoreDesktopHeaderDismount.css'

import './SubmitScoreMobileHeaderLandscape.css'
import './SubmitScoreMobileHeaderPortrait.css'

const SubmitScoreHeader = (props) => {

  let headerClass

  if(props.device === "mobile") {
    if(props.orientation === "landscape") {
      headerClass = "submit_score_mobile_header_landscape"
    } else {
      headerClass = "submit_score_mobile_header_portrait"
    }
  } else {
    if(props.ui.initDismount) headerClass = "dismount_submit_score_desktop_header"
    else headerClass = "submit_score_desktop_header"
  }

  return(
    <div className={ headerClass }>
      <h1>OUTTA TIME!</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    device: state.detect.device,
    orientation: state.detect.orientation,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(SubmitScoreHeader)