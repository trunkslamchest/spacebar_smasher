import React from 'react'

import './GameDesktopRank.css'

const GameDesktopRank = (props) => {

  const rank = <h1>{ props.rank ? props.rank : "SUPER BABY FINGERS" }</h1>

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_game_rank" : "game_rank"
        }[props.showRank]}
    >
      <h2>RANK</h2>
      { rank }
    </div>
  )
}

export default GameDesktopRank