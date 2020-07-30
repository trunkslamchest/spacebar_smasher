import React from 'react'
import { connect } from 'react-redux'

import { homeHeader } from '../../HomeFunctions/classSwitch'

import HomeStartButton from '../HomeStartButton/HomeStartButton'

import './HomeHeader.scss'
import './HomeHeaderAnimation.scss'

const HomeHeader = (props) => {
  return(
    <div className={ homeHeader(props).wrapper }>
      <div className={ homeHeader(props).header } >
        <h1>SPACEBAR SMASHER</h1>
      </div>
      <HomeStartButton onClickStartButton={ props.onClickStartButton } />
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