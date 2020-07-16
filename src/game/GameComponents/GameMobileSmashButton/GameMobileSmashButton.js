import React from 'react'

import './GameMobileSmashButtonPortrait.css'
import './GameMobileSmashButtonLandscape.css'
import './GameMobileSmashButtonDismount.css'

const GameMobileSmashButton = (props) => {

  const onSmashFunctions = (event) => {
    props.onSmash(event)
  }

  let currentClass, buttonClass

    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      if(props.initDismount) {
        currentClass = "dismount_game_mobile_smash_button_landscape"
        buttonClass = "smash_button_landscape"
      }
      else {
        currentClass = "game_mobile_smash_button_landscape"
        buttonClass = "smash_button_landscape"
      }
    } else {
      if(props.initDismount) {
        currentClass = "dismount_game_mobile_smash_button_portrait"
        buttonClass = "smash_button_portrait"
      }
      else {
        currentClass = "game_mobile_smash_button_portrait"
        buttonClass = "smash_button_portrait"
      }
    }

  return(
    <div className={ currentClass }>
      <button
        className={ buttonClass }
        onClick={ onSmashFunctions }
      >
        SMASH!
      </button>
    </div>
  )
}

export default GameMobileSmashButton