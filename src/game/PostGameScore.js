import React from 'react'

const PostGameScore = (props) => {

  const player = props.score.name
  const score = props.score.score
  const power = props.score.power_level
  const submittedPlayer = props.submittedPlayer

  const score_row =
    <tr className={ submittedPlayer === player ? "highlighted" : "scoreboard_sub_row" }>
      <td>
        {player}
      </td>
      <td className={{
            true: "scoreboard_power_low",
            false: props.score.power_level > 2 ? "scoreboard_power_high" : "scoreboard_power"
          }[props.score.power_level < 1]}
        >
        <meter value={power} min="0.0" low="1.0" optimum="2.0" high="4.0" max="6.0"></meter>
      </td>
      <td>
        {score}
      </td>
    </tr>

  return(
    <>
      { score_row }
    </>
  )
}

export default PostGameScore