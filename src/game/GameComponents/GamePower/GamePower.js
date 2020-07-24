import React from 'react'
import { connect } from 'react-redux'

import { gamePower } from '../../GameFunctions/classSwitch'

import './GameDesktopPower.css'
import './GameDesktopPowerDismount.css'
import './GameDesktopPowerOnmount.css'
import './GameMobilePowerLandscape.css'
import './GameMobilePowerPortrait.css'

const GamePower = (props) => {
  return(
    <div className={ gamePower(props).power }>
      <h1>POWER</h1>
      <h2>{ props.power ? (props.power).toFixed(2) : (0.00).toFixed(2) } %</h2>
      <div className={ gamePower(props).powerBar }>
        <meter value={ props.powerRaw } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0"></meter>
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

export default connect(mapStateToProps)(GamePower)