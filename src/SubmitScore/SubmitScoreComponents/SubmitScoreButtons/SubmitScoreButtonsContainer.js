import React from 'react'
import { connect } from 'react-redux'

import { submitScoreButtons } from '../../SubmitScoreFunctions/classSwitch'

import './SubmitScoreDesktopButtonsContainer.css'
import './SubmitScoreDesktopButtonsContainerOnmount.css'
import './SubmitScoreDesktopButtonsContainerDismount.css'

import './SubmitScoreMobileButtonsContainerLandscape.css'
import './SubmitScoreMobileButtonsContainerPortrait.css'

import './SubmitScoreMobileButtonsContainerOnmount.css'
import './SubmitScoreMobileButtonsContainerDismount.css'

const SubmitScoreButtonsContainer = (props) => {

  const onClickFunctions = (event) => { props.onDismount(event) }

  return(
    <div className={ submitScoreButtons(props).wrapper }>
      <button
        className={ submitScoreButtons(props).mainMenuButton }
        name="submit_score_main_menu_button"
        nav="main_menu"
        onClick={ onClickFunctions }
      >
        MAIN MENU
      </button>
      <button
        className={ submitScoreButtons(props).tryAgainButton }
        name="submit_score_try_again_button"
        nav="game"
        onClick={ onClickFunctions }
      >
        TRY AGAIN
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(SubmitScoreButtonsContainer)