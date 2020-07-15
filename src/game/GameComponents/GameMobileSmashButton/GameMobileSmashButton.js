import React from 'react'

import './GameMobileSmashButtonPortrait.css'
import './GameMobileSmashButtonLandscape.css'
import './GameMobileSmashButtonDismount.css'


const GameMobileSmashButton = (props) => {

  let currentClass, buttonClass

  // if(props.isMobile){
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
  // }

  return(
    <div className={ currentClass }>
      <button
        className={ buttonClass }
        onClick={props.onSmash}
      >
        SMASH!
      </button>
    </div>
  )
}

export default GameMobileSmashButton

    // <div
    //   className={{
    //     false: "blank",
    //     true: {
    //       false: props.initDismount ? "dismount_game_mobile_smash_button_portrait" : "game_mobile_smash_button_portrait",
    //       true: props.initDismount ? "dismount_game_mobile_smash_button_landscape" : "game_mobile_smash_button_landscape"
    //     }[props.isLandscape && window.innerWidth < 1024]
    //   }[props.showMobileSmashButton]}
    // >
    //   <button
    //     className={{
    //       false: "blank",
    //       true: {
    //         false: props.smashed ? "smash_button_on_smash_portrait" : "smash_button_portrait",
    //         true: props.smashed ? "smash_button_on_smash_landscape" : "smash_button_landscape"
    //       }[props.isLandscape && window.innerWidth < 1024]
    //     }[props.showMobileSmashButton]}
    //     onClick={props.onSmash}
    //   >
    //     SMASH!
    //   </button>
    // </div>