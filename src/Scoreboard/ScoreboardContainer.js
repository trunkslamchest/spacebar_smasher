import React from 'react'

import ScoreboardRow from './ScoreboardRow'

import LoadingScoreboard from '../UI/Loading/LoadingScoreboard'

import './ScoreboardContainer.css'
import './ScoreboardOnmount.css'
import './ScoreboardDismount.css'

const ScoreboardContainer = (props) => {

  const scores =  props.scoreboard.map(score =>
    <ScoreboardRow
      place={props.scoreboard.indexOf(score) + 1}
      key={score[0]}
      score={score[1]}
      submittedPlayer={ props.submittedPlayer }
    />
  )

  return(
    <div className={{
          false: props.initDismount ? 'dismount_scoreboard_table' : "scoreboard_table",
          true: props.initDismount ? 'dismount_scoreboard_table_post_game' : "scoreboard_table_post_game"
        }[props.isPostGame]}>
        <div className="scoreboard_header" >
            <h1>LEADERBOARD</h1>
        </div>
        <div className="scoreboard_head_row">
          <h1>PLACE</h1>
          <h1>NAME</h1>
          <h1>POWER LEVEL</h1>
          <h1>SCORE</h1>
          <h1>SCROLLBAR</h1>
        </div>
          { props.mounted ?
            <div className="scoreboard_sub_rows_wrapper">
              { scores }
            </div>
          :
            <LoadingScoreboard />
          }
    </div>
  )
}

export default ScoreboardContainer