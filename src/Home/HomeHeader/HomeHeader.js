import React from 'react'
import { connect } from 'react-redux'

import { homeHeader } from '../HomeFunctions/classSwitch'

import './HomeDesktopHeader.css'
import './HomeDesktopHeaderDismount.css'
import './HomeDesktopHeaderOnmount.css'

import './HomeMobileHeaderLandscape.css'
import './HomeMobileHeaderPortrait.css'
import './HomeMobileHeaderDismount.css'
import './HomeMobileHeaderOnmount.css'

const HomeHeader = (props) => {
  return(
    <div className={ homeHeader(props).wrapper }>
      <div className={ homeHeader(props).header } >
        <h1>SPACEBAR SMASHER</h1>
      </div>
      <div className={ homeHeader(props).startButtonContainer }>
        <button
          name="start_button"
          className={ homeHeader(props).startButton }
          onClick={ props.onClickStartButton }
        >
          START
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(HomeHeader)