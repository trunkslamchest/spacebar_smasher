import React from 'react'

import LoadingSubmitScore from '../../../UI/Loading/LoadingSubmitScore'

import './SubmitScoreForm.css'

const SubmitScoreForm = (props) => {

  return(
    <>
      <div className={{
            false: "blank",
            true: props.initDismount ? "dismount_submit_score_form_container" : "submit_score_form_container"
          }[props.showForm]}
      >
    { props.submittedScore ?
      <LoadingSubmitScore />
    :
      <>
        <h2>Submit Score</h2>
        <form
          name="submit_score_form"
          className="submit_score_form"
          onSubmit={ props.onSubmit }
        >
          <input
            name="player"
            type="text"
            maxLength="12"
            className="submit_score_text_box"
            placeholder="Enter Your Name"
            autoComplete="off"
            value={ props.player }
            onChange={ props.onNameChange }
          />
          <input
            className="submit_score_button"
            type="submit"
            value="Confirm"
          />
        </form>
      </>
    }
      </div>
    </>
  )
}

export default SubmitScoreForm