import React from 'react'

import './GameMobileRank.css'

const GameMobileRank = (props) => {

  const blank = <></>

  const rank = <h1>{ props.rank }</h1>

  return(
    <div className={{
        false: "blank",
        true: {
          false: props.initDismount ? "dismount_game_mobile_rank_portrait" : "game_mobile_rank_portrait",
          true: props.initDismount ? "dismount_game_mobile_rank_landscape" : "game_mobile_rank_landscape"
        }[props.isLandscape]
      }[props.showRank]}
    >
      <h2>RANK</h2>
      { props.showRank ? rank : blank }
    </div>
  )

}

export default GameMobileRank