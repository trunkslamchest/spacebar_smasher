import React from 'react'

import './SubmitScoreDesktopForm.css'
import './SubmitScoreDesktopFormDismount.css'
import './SubmitScoreDesktopFormOnmount.css'

import './SubmitScoreMobileFormLandscape.css'
import './SubmitScoreMobileFormPortrait.css'

const SubmitScoreForm = (props) => {

  let formWrapperClass, formClass, textBoxClass, buttonClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
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
    if(props.initDismount) {
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
    <div className={ formWrapperClass }>
      <h2>Submit Score</h2>
      <form
        name="submit_score_form"
        className={ formClass }
        disabled={ props.submitClicked }
        onSubmit={ props.onSubmit }
      >
        <input
          name="player"
          type="text"
          maxLength="12"
          className={ textBoxClass }
          placeholder="Enter Your Name"
          autoComplete="off"
          value={ props.player }
          onChange={ props.onNameChange }
        />
        <input
          className={ buttonClass }
          disabled={ props.submitClicked }
          type="submit"
          value="Confirm"
        />
      </form>
    </div>
  )
}

export default SubmitScoreForm