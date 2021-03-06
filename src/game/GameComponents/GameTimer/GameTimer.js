import React from 'react'
import { connect } from 'react-redux'

import { gameTimer } from '../../GameFunctions/classSwitch'

import './GameTimer.scss'
import './GameTimerAnimation.scss'

const GameMobileTimer = (props) => {
  return(
    <div className={ gameTimer(props).timer }>
      <h1>TIME</h1>
      <h2>{ props.time ? props.time : (0.00).toFixed(2) }</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(GameMobileTimer)