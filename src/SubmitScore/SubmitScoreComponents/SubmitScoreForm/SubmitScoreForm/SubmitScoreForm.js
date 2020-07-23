import React from 'react'
import { connect } from 'react-redux'

import LoadingSubmitScore from '../../../../UI/Loading/LoadingSubmitScore/LoadingSubmitScore'

import './SubmitScoreDesktopForm.css'
import './SubmitScoreDesktopFormDismount.css'
import './SubmitScoreDesktopFormOnmount.css'

import './SubmitScoreMobileFormLandscape.css'
import './SubmitScoreMobileFormPortrait.css'

const SubmitScoreForm = (props) => {

  let formWrapperClass, formClass, textBoxClass, buttonClass

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      formWrapperClass = "submit_score_mobile_form_container_landscape"
      formClass = "submit_score_mobile_form_landscape"
      textBoxClass = "submit_score_mobile_text_box_landscape"
      buttonClass = "submit_score_mobile_button_landscape"
    } else {
      formWrapperClass = "submit_score_mobile_form_container_portrait"
      formClass = "submit_score_mobile_form_portrait"
      textBoxClass = "submit_score_mobile_text_box_portrait"
      buttonClass = "submit_score_mobile_button_portrait"
    }
  } else {
    if(props.ui.initDismount) {
      formWrapperClass = "dismount_submit_score_desktop_form_container"
      formClass = "submit_score_desktop_form"
      textBoxClass = "submit_score_desktop_text_box"
      buttonClass = "submit_score_desktop_button"
    } else {
      formWrapperClass = "submit_score_desktop_form_container"
      formClass = "submit_score_desktop_form"
      textBoxClass = "submit_score_desktop_text_box"
      buttonClass = "submit_score_desktop_button"
    }
  }

  return(
    <>
      { props.submitClicked ?
        <div className={ formWrapperClass }>
          <LoadingSubmitScore />
        </div>
      :
        <div className={ formWrapperClass }>
          <h2>Submit Score</h2>
          <form
            className={ formClass }
            disabled={ props.submitClicked }
            name="submit_score_form"
            nav="scoreboard"
            onSubmit={ props.onSubmit }
          >
            <input
              autoComplete="off"
              className={ textBoxClass }
              name="player"
              maxLength="12"
              onChange={ props.onNameChange }
              placeholder="Enter Your Name"
              type="text"
              value={ props.player }
            />
            <input
              className={ buttonClass }
              disabled={ props.submitClicked }
              type="submit"
              value="Confirm"
            />
          </form>
        </div>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(SubmitScoreForm)