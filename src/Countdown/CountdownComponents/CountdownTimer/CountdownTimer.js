import React from 'react'
import { connect } from 'react-redux'

import { countdownTimer } from '../../CountdownFunctions/classSwitch'

import './CountdownTimer.scss'
import './CountdownTimerAnimation.scss'

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