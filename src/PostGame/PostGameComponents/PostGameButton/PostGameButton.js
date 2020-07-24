import React from 'react'

import { connect } from 'react-redux'

import './PostGameDesktopButton.css'
import './PostGameMobileButtonLandscape.css'
import './PostGameMobileButtonPortrait.css'

const PostGameButton = (props) => {
  return(
    <button
      nav={ props.nav || null }
      name={ props.name }
      className={ props.classSwitch }
      onClick={ props.onDismount || null }
    >
      {props.children}
    </button>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    scoreboard: state.scoreboard,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(PostGameButton)
