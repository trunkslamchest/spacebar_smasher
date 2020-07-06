import React from 'react'

import './GameMobileSmashButton.css'

const GameMobileSmashButton = (props) => {
  return(
    <div
      className={{
        false: "blank",
        true: {
          false: props.initDismount ? "dismount_game_mobile_smash_button_portrait" : "game_mobile_smash_button_portrait",
          true: props.initDismount ? "dismount_game_mobile_smash_button_landscape" : "game_mobile_smash_button_landscape"
        }[props.isLandscape && window.innerWidth < 1024]
      }[props.showMobileSmashButton]}
    >
      <button
        className={{
          false: "blank",
          true: {
            false: props.smashed ? "smash_button_on_smash_portrait" : "smash_button_portrait",
            true: props.smashed ? "smash_button_on_smash_landscape" : "smash_button_landscape"
          }[props.isLandscape && window.innerWidth < 1024]
        }[props.showMobileSmashButton]}
        onClick={props.onSmash}
      >
        SMASH!
      </button>
    </div>
  )
}

export default GameMobileSmashButton