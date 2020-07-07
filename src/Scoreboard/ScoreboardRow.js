import React from 'react'

const Scoreboard = (props) => {

  const player = props.score.name
  const score = props.score.score
  const power = props.score.power_level
  const submittedPlayer = props.submittedPlayer

  return(
    <>
    <div className={ submittedPlayer === player ? "highlighted" : "scoreboard_sub_row" }>
      <div className='scoreboard_sub_row_field'>
        {player}
      </div>
        <div className="scoreboard_power">
        <meter value={power} min="0.0" low="1.0" optimum="2.0" high="4.0" max="6.0"></meter>
      </div>
      <div className='scoreboard_sub_row_field'>
        {score}
      </div>
    </div>
    </>
  )
}

export default Scoreboard