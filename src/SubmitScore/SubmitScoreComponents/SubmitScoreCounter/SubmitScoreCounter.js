import React from 'react'
import { connect } from 'react-redux'

import { submitScoreCounter } from '../../SubmitScoreFunctions/classSwitch'

import './SubmitScoreCounter.scss'
import './SubmitScoreCounterAnimation.scss'

const SubmitScoreCounter = (props) => {
  return(
    <div className={ submitScoreCounter(props).counter }>
      <h1>SMASHES</h1>
      <h2>{ props.scoreboard.score.score ? props.scoreboard.score.score : 0 }</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    scoreboard: state.scoreboard,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(SubmitScoreCounter)