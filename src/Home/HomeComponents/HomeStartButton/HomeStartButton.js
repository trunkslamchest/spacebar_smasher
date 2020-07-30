import React from 'react'

import { connect } from 'react-redux'

import { homeStartButton } from '../../HomeFunctions/classSwitch'

import './HomeStartButton.scss'
import './HomeStartButtonAnimation.scss'

const HomeStartButton = (props) => {
  return(
    <div className={ homeStartButton(props).startButtonContainer }>
    { props.scoreboard.allScores.length ?
      <button
        name="start_button"
        className={ homeStartButton(props).startButton }
        onClick={ props.onClickStartButton }
      >
        START
      </button>
    :
      <button
        name="disabled_start_button"
        className={ homeStartButton(props).startButtonDisabled }
      >
        <span />
      </button>
    }
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

export default connect(mapStateToProps)(HomeStartButton)
