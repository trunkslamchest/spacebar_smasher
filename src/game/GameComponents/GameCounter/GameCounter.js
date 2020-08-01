import React from 'react'
import { connect } from 'react-redux'

import { gameCounter } from '../../GameFunctions/classSwitch'

import './GameCounter.scss'
import './GameCounterAnimation.scss'

const GameCounter = (props) => {
  return(
    <div className={ gameCounter(props).counter }>
      <h1>SMASHES</h1>
      <h2>{ props.count ? props.count : 0 }</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(GameCounter)