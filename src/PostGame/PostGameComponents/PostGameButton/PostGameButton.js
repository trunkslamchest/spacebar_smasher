import React from 'react'

import { connect } from 'react-redux'

import './PostGameButton.scss'

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
