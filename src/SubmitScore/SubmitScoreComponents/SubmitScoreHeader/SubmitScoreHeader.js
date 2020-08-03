import React from 'react'
import { connect } from 'react-redux'

import { submitScoreHeader } from '../../SubmitScoreFunctions/classSwitch'

import './SubmitScoreHeader.scss'
import './SubmitScoreHeaderAnimation.scss'

const SubmitScoreHeader = (props) => {
  return(
    <div className={ submitScoreHeader(props).header }>
      <h1>OUTTA TIME</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(SubmitScoreHeader)