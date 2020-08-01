import React from 'react'
import { connect } from 'react-redux'

import { gameRank } from '../../GameFunctions/classSwitch'

import './GameRank.scss'
import './GameRankAnimation.scss'

const GameRank = (props) => {
  return(
    <div className={ gameRank(props).rank }>
      <h1>RANK</h1>
      <h2>{ props.rank ? props.rank : "SUPER BABY FINGERS" }</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(GameRank)