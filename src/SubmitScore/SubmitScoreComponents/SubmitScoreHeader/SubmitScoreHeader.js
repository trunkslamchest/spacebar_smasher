import React from 'react'
import { connect } from 'react-redux'

import { submitScoreHeader } from '../../SubmitScoreFunctions/classSwitch'

import './SubmitScoreDesktopHeader.css'
import './SubmitScoreDesktopHeaderOnmount.css'
import './SubmitScoreDesktopHeaderDismount.css'

import './SubmitScoreMobileHeaderLandscape.css'
import './SubmitScoreMobileHeaderPortrait.css'

const SubmitScoreHeader = (props) => {
  return(
    <div className={ submitScoreHeader(props).header }>
      <h1>OUTTA TIME!</h1>
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