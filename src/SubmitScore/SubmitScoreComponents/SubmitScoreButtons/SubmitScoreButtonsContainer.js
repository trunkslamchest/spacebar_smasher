import React from 'react'
import { connect } from 'react-redux'

import './SubmitScoreDesktopButtonsContainer.css'
import './SubmitScoreMobileButtonsContainerLandscape.css'
import './SubmitScoreMobileButtonsContainerPortrait.css'

import './SubmitScoreDesktopButtonsContainerOnmount.css'
import './SubmitScoreMobileButtonsContainerOnmount.css'

import './SubmitScoreDesktopButtonsContainerDismount.css'
import './SubmitScoreMobileButtonsContainerDismount.css'

const SubmitScoreButtonsContainer = (props) => {

  const onClickFunctions = (event) => { props.onClickButtonFunctions(event) }

  let wrapperClass, mainMenuButtonClass, tryAgainButtonClass

  if(props.detect.device === "mobile"){
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) {
        wrapperClass = "dismount_submit_score_mobile_buttons_container_landscape"
        mainMenuButtonClass = "submit_score_mobile_main_menu_button_landscape"
        tryAgainButtonClass = "submit_score_mobile_try_again_button_landscape"
      } else {
        wrapperClass = "submit_score_mobile_buttons_container_landscape"
        mainMenuButtonClass = "submit_score_mobile_main_menu_button_landscape"
        tryAgainButtonClass = "submit_score_mobile_try_again_button_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        wrapperClass = "dismount_submit_score_mobile_buttons_container_portrait"
        mainMenuButtonClass = "submit_score_mobile_main_menu_button_portrait"
        tryAgainButtonClass = "submit_score_mobile_try_again_button_portrait"
      } else {
        wrapperClass = "submit_score_mobile_buttons_container_portrait"
        mainMenuButtonClass = "submit_score_mobile_main_menu_button_portrait"
        tryAgainButtonClass = "submit_score_mobile_try_again_button_portrait"
      }
    }
  } else {
    if(props.ui.initDismount) {
        wrapperClass = "dismount_submit_score_desktop_buttons_container"
        mainMenuButtonClass = "submit_score_desktop_main_menu_button"
        tryAgainButtonClass = "submit_score_desktop_try_again_button"
    } else {
        wrapperClass = "submit_score_desktop_buttons_container"
        mainMenuButtonClass = "submit_score_desktop_main_menu_button"
        tryAgainButtonClass = "submit_score_desktop_try_again_button"
    }
  }

  return(
    <div className={ wrapperClass }>
      <button
        nav="main_menu"
        name="submit_score_main_menu_button"
        className={ mainMenuButtonClass }
        onClick={ onClickFunctions }
      >
        MAIN MENU
      </button>
      <button
        nav="game"
        name="submit_score_try_again_button"
        className={ tryAgainButtonClass }
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