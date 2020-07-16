import React from 'react'

import './GameDesktopCounter.css'
import './GameDesktopCounterDismount.css'
import './GameMobileCounterLandscape.css'
import './GameMobileCounterPortrait.css'
import './GameMobileCounterDismount.css'

const GameCounter = (props) => {

  let currentClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      if(props.initDismount) currentClass = "dismount_game_mobile_counter_landscape"
      else currentClass = "game_mobile_counter_landscape"
    } else {
      if(props.initDismount) currentClass = "dismount_game_mobile_counter_portrait"
      else currentClass = "game_mobile_counter_portrait"
    }
  } else {
    if(props.initDismount) currentClass = "dismount_game_desktop_counter"
    else currentClass = "game_desktop_counter"
  }

  return(
    <div className={ currentClass }>
      <h2>SMASHES</h2>
      <h1>{ props.count ? props.count : 0 }</h1>
    </div>
  )
}

export default GameCounter