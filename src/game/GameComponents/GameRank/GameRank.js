import React from 'react'

import './GameDesktopRank.css'
import './GameDesktopRankDismount.css'
import './GameMobileRankLandscape.css'
import './GameMobileRankPortrait.css'
import './GameMobileRankDismount.css'

const GameRank = (props) => {

  let currentClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      if(props.initDismount) currentClass = "dismount_game_mobile_rank_landscape"
      else currentClass = "game_mobile_rank_landscape"
    } else {
      if(props.initDismount) currentClass = "dismount_game_mobile_rank_portrait"
      else currentClass = "game_mobile_rank_portrait"
    }
  } else {
    if(props.initDismount) currentClass = "dismount_game_desktop_rank"
    else currentClass = "game_desktop_rank"
  }

  return(
    <div className={ currentClass }>
      <h2>RANK</h2>
      <h1>{ props.showRank ? props.rank : "SUPER BABY FINGERS" }</h1>
    </div>
  )
}

export default GameRank