import React from 'react'
import { connect } from 'react-redux'

import './GameMobileSmashButtonPortrait.css'
import './GameMobileSmashButtonLandscape.css'

const GameMobileSmashButton = (props) => {

  const onSmashFunctions = (event) => {
    props.onSmash(event)
  }

  let currentClass, buttonClass

    if(props.detect.orientation === "landscape") {
      currentClass = "game_mobile_smash_button_landscape"
      buttonClass = "smash_button_landscape"
    } else {
      currentClass = "game_mobile_smash_button_portrait"
      buttonClass = "smash_button_portrait"
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

const mapStateToProps = (state) => {
  return{
    detect: state.detect
  }
}

export default connect(mapStateToProps)(GameMobileSmashButton)