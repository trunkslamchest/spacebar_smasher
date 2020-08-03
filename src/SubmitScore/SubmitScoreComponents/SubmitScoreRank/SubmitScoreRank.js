import React from 'react'
import { connect } from 'react-redux'

import { submitScoreRank } from '../../SubmitScoreFunctions/classSwitch'

import './SubmitScoreRank.scss'
import './SubmitScoreRankAnimation.scss'

const SubmitScoreRank = (props) => {
  return(
    <div className={ submitScoreRank(props).rank }>
      <h1>RANK</h1>
      <h2>{ props.scoreboard.score.rank ? props.scoreboard.score.rank : "SUPER BABY FINGERS" }</h2>
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

export default connect(mapStateToProps)(SubmitScoreRank)