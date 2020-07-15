import React from 'react'

import './GameDesktopTimer.css'
import './GameDesktopTimerDismount.css'
import './GameMobileTimerLandscape.css'
import './GameMobileTimerPortrait.css'
import './GameMobileTimerDismount.css'

const GameMobileTimer = (props) => {

  let currentClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      if(props.initDismount) currentClass = "dismount_game_mobile_timer_landscape"
      else currentClass = "game_mobile_timer_landscape"
    } else {
      if(props.initDismount) currentClass = "dismount_game_mobile_timer_portrait"
      else currentClass = "game_mobile_timer_portrait"
    }
  } else {
    if(props.initDismount) currentClass = "dismount_game_desktop_timer"
    else currentClass = "game_desktop_timer"
  }

  return(
    <div className={ currentClass }>
      <h2>TIME</h2>
      <h1>{ props.showTimer ? props.time : (0.00).toFixed(2) }</h1>
    </div>
  )
}

export default GameMobileTimer