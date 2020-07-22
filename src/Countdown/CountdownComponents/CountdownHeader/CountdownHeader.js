import React from 'react'
import { connect } from 'react-redux'

import './CountdownDesktopHeader.css'
import './CountdownDesktopHeaderOnmount.css'
import './CountdownDesktopHeaderDismount.css'
import './CountdownMobileHeaderLandscape.css'
import './CountdownMobileHeaderPortrait.css'
import './CountdownMobileHeaderDismount.css'
import './CountdownMobileHeaderOnmount.css'

const CountdownHeader = (props) => {

  let currentClass

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) currentClass = "dismount_countdown_mobile_header_landscape"
      else currentClass = "countdown_mobile_header_landscape"
    } else {
      if(props.ui.initDismount) currentClass = "dismount_countdown_mobile_header_portrait"
      else currentClass = "countdown_mobile_header_portrait"
    }
  } else {
    if(props.ui.initDismount) currentClass = "dismount_countdown_desktop_header"
    else currentClass = "countdown_desktop_header"
  }

  return(
    <div className={ currentClass }>
      <h3>GET READY</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(CountdownHeader)