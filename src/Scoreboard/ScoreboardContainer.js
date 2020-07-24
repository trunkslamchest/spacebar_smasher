import React from 'react'
import { connect } from 'react-redux'

import { scoreboardContainer } from './ScoreboardFunctions/classSwitch'

import ScoreboardRow from './ScoreboardRow/ScoreboardRow'

import LoadingScoreboard from '../UI/Loading/LoadingScoreboard/LoadingScoreboard'

import './ScoreboardDesktopContainer.css'
import './ScoreboardDesktopOnmount.css'
import './ScoreboardDesktopDismount.css'

import './ScoreboardMobileContainerLandscape.css'
import './ScoreboardMobileContainerPortrait.css'
import './ScoreboardMobileOnmount.css'
import './ScoreboardMobileDismount.css'

const ScoreboardContainer = (props) => {

  const scores =  props.scoreboard.allScores.map(score =>
    <ScoreboardRow
      place={props.scoreboard.allScores.indexOf(score) + 1}
      key={score[0]}
      score={score[1]}
    />
  )

  return(
      <div className={ scoreboardContainer(props).table }>
        <div className={ scoreboardContainer(props).header } >
            <h1>LEADERBOARD</h1>
        </div>
        <div className={ scoreboardContainer(props).headRow }>
          <h1>PLACE</h1>
          <h1>NAME</h1>
          <h1>POWER LEVEL</h1>
          <h1>SCORE</h1>
          <h1>SCROLLBAR</h1>
        </div>
          { props.scoreboard.allScores.length > 0 ?
            <div className={ scoreboardContainer(props).row }>
              { scores }
            </div>
          :
            <LoadingScoreboard />
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

export default connect(mapStateToProps)(ScoreboardContainer)