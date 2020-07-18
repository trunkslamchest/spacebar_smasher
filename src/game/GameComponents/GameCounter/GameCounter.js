import React from 'react'

import './GameDesktopCounter.css'
import './GameDesktopCounterDismount.css'
import './GameMobileCounterLandscape.css'
import './GameMobileCounterPortrait.css'

const GameCounter = (props) => {

  let currentClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      currentClass = "game_mobile_counter_landscape"
    } else {
      currentClass = "game_mobile_counter_portrait"
    }
  } else {
    currentClass = "game_desktop_counter"
  }

  return(
    <div className={ currentClass }>
      <h1>SMASHES</h1>
      <h2>{ props.count ? props.count : 0 }</h2>
    </div>
  )
}

export default GameCounter