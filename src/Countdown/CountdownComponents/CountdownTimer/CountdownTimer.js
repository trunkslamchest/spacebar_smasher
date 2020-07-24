import React from 'react'
import { connect } from 'react-redux'

import { countdownTimer } from '../../CountdownFunctions/classSwitch'

import './CountdownDesktopTimer.css'
import './CountdownDesktopTimerDismount.css'
import './CountdownDesktopTimerOnmount.css'
import './CountdownMobileTimerLandscape.css'
import './CountdownMobileTimerPortrait.css'
import './CountdownMobileTimerDismount.css'
import './CountdownMobileTimerOnmount.css'

const CountdownTimer = (props) => {
  return(
    <div className={ countdownTimer(props).wrapper }>
      <div className={ countdownTimer(props).timer }>
        <h1>
          { props.time > 0 ? props.time : "GO" }
        </h1>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(CountdownTimer)