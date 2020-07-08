import React from 'react'

import './GameDesktopRank.css'

const GameDesktopRank = (props) => {

  const blank = <></>

  const rank = <h1>{ props.rank }</h1>

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_game_rank" : "game_rank"
        }[props.showRank]}
    >
      <h2>RANK</h2>
      { props.showRank ? rank : blank }
    </div>
  )
}

export default GameDesktopRank