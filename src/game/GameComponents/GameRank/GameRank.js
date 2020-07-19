import React from 'react'

import './GameDesktopRank.css'
import './GameDesktopRankDismount.css'
import './GameDesktopRankOnmount.css'
import './GameMobileRankLandscape.css'
import './GameMobileRankPortrait.css'

const GameRank = (props) => {

  let currentClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      currentClass = "game_mobile_rank_landscape"
    } else {
      currentClass = "game_mobile_rank_portrait"
    }
  } else {
    if(props.initDismount) currentClass = "dismount_game_desktop_rank"
    else currentClass = "game_desktop_rank"
  }

  return(
    <div className={ currentClass }>
      <h1>RANK</h1>
      <h2>{ props.rank ? props.rank : "SUPER BABY FINGERS" }</h2>
    </div>
  )
}

export default GameRank