import React from 'react'
import { connect } from 'react-redux'

import { gameMobileSmashButton } from '../../GameFunctions/classSwitch'

import './GameMobileSmashButtonPortrait.css'
import './GameMobileSmashButtonLandscape.css'

const GameMobileSmashButton = (props) => {

  const onMobileSmashFunctions = (event) => {
    props.onMobileSmash(event)
  }

  return(
    <div className={ gameMobileSmashButton(props).container }>
      <button
        className={ gameMobileSmashButton(props).button }
        onClick={ onMobileSmashFunctions }
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