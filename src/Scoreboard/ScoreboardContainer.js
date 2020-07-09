import React from 'react'

import ScoreboardRow from './ScoreboardRow'

import Loading from '../UI/Loading'

import './ScoreboardContainer.css'
import './ScoreboardDismount.css'


const ScoreboardContainer = (props) => {

  const scores =  props.scoreboard.map(score =>
    <ScoreboardRow
      key={score[0]}
      score={score[1]}
      submittedPlayer={ props.submittedPlayer }
    />
  )

  return(
    <div className={ props.initDismount ? "dismount_scoreboard_table" : "scoreboard_table" } >
        <div className={ props.initDismount ? "dismount_scoreboard_header" : "scoreboard_header"}>
            <h1>
              HIGH SCORES
            </h1>
        </div>
        <div className="scoreboard_head_row">
          <h1>NAME</h1>
          <h1>POWER</h1>
          <h1>SCORE</h1>
        </div>
          { props.mounted ? scores : <Loading /> }
    </div>
  )
}

export default ScoreboardContainer