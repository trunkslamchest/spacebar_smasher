import React from 'react'

const ScoreboardRow = (props) => {

  console.log(props)

  // const player = props.score.name
  // const score = props.score.score
  // const power = props.score.power_level
  // const submittedPlayer = props.submittedPlayer

  return(
    <>
      <div className={ props.submittedPlayer === props.score.name ? "highlighted" : "scoreboard_sub_row" }>
        <div className='scoreboard_sub_row_place'>
          { props.place }
        </div>
        <div className='scoreboard_sub_row_name'>
          { props.score.name }
        </div>
          <div className="scoreboard_sub_row_power">
            <meter value={ props.score.power_level } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0"></meter>
            <span>{ (props.score.power_percent).toFixed(2) }%</span>
          </div>
        <div className='scoreboard_sub_row_score'>
          { props.score.score }
        </div>
      </div>
    </>
  )
}

export default ScoreboardRow