import React from 'react'

import './GameMobileSmashButton.css'

const GameMobileSmashButton = (props) => {



  return(
    <div
      // className={this.props.showMobileSmashButton ? "game_mobile_smash_button" : "blank"}
      className={{
        false: "blank",
        true: props.initDismount ? "dismount_game_mobile_smash_button" : "game_mobile_smash_button"
      }[props.showMobileSmashButton]}
    >
      <button
        // className={this.props.showMobileSmashButton ? "smash_button" : "blank"}
        className={{
          false: "blank",
          true: props.smashed ? "smash_button_on_smash" : "smash_button"
        }[props.showMobileSmashButton]}
        onClick={props.onSmash}
      >
        SMASH!
      </button>
    </div>
  )

}

export default GameMobileSmashButton