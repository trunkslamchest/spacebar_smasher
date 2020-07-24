import React from 'react'
import { connect } from 'react-redux'

import { countdownHeader } from '../../CountdownFunctions/classSwitch'

import './CountdownDesktopHeader.css'
import './CountdownDesktopHeaderOnmount.css'
import './CountdownDesktopHeaderDismount.css'
import './CountdownMobileHeaderLandscape.css'
import './CountdownMobileHeaderPortrait.css'
import './CountdownMobileHeaderDismount.css'
import './CountdownMobileHeaderOnmount.css'

const CountdownHeader = (props) => {
  return(
    <div className={ countdownHeader(props).header }>
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