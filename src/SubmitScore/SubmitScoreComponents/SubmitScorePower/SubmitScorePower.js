import React from 'react'
import { connect } from 'react-redux'

import { submitScorePower } from '../../SubmitScoreFunctions/classSwitch'

import './SubmitScorePower.scss'
import './SubmitScorePowerAnimation.scss'

const SubmitScorePower = (props) => {
  return(
    <div className={ submitScorePower(props).power }>
      <h1>POWER</h1>
      <h2>{ props.scoreboard.score.power_percent ? (props.scoreboard.score.power_percent).toFixed(2) : (0.00).toFixed(2) } %</h2>
      <div className={ submitScorePower(props).powerBar }>
        <meter value={ props.scoreboard.score.power_level } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0"></meter>
      </div>
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

export default connect(mapStateToProps)(SubmitScorePower)