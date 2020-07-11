import React from 'react'

import ScoreboardRow from './ScoreboardRow'

import LoadingScoreboard from '../UI/Loading/LoadingScoreboard'

import './ScoreboardContainer.css'
import './ScoreboardDismount.css'

const ScoreboardContainer = (props) => {

  // let place = 0

  const scores =  props.scoreboard.map(score => {
    // place += 1
    return <ScoreboardRow
      place={props.scoreboard.indexOf(score) + 1}
      key={score[0]}
      score={score[1]}
      submittedPlayer={ props.submittedPlayer }
    />

    }
  )

  return(
    <div className={ props.initDismount ? "dismount_scoreboard_table" : "scoreboard_table" } >
        <div className={ props.initDismount ? "dismount_scoreboard_header" : "scoreboard_header"}>
            <h1>
              HIGH SCORES
            </h1>
        </div>
        <div className="scoreboard_head_row">
          <h1>PLACE</h1>
          <h1>NAME</h1>
          <h1>POWER LEVEL</h1>
          <h1>SCORE</h1>
        </div>
          { props.mounted ? scores : <LoadingScoreboard /> }
    </div>
  )
}

export default ScoreboardContainer