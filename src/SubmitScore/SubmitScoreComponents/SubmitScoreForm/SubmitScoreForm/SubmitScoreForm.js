import React from 'react'
import { connect } from 'react-redux'

import { submitScoreForm } from '../../../SubmitScoreFunctions/classSwitch'

import LoadingSubmitScore from '../../../../UI/Loading/LoadingSubmitScore/LoadingSubmitScore'

import './SubmitScoreDesktopForm.css'
import './SubmitScoreDesktopFormDismount.css'
import './SubmitScoreDesktopFormOnmount.css'

import './SubmitScoreMobileFormLandscape.css'
import './SubmitScoreMobileFormPortrait.css'

const SubmitScoreForm = (props) => {
  return(
    <>
      { props.submitClicked && !props.modal ?
        <div className={ submitScoreForm(props).wrapper }>
          <LoadingSubmitScore />
        </div>
      :
        <div className={ submitScoreForm(props).wrapper }>
          <h2>Submit Score</h2>
          <form
            className={ submitScoreForm(props).form }
            disabled={ props.submitClicked }
            name="submit_score_form"
            nav="scoreboard"
            onSubmit={ props.onSubmit }
          >
            <input
              autoComplete="off"
              className={ submitScoreForm(props).textbox }
              name="player"
              maxLength="12"
              onChange={ props.onNameChange }
              placeholder="Enter Your Name"
              type="text"
              value={ props.player }
            />
            <input
              className={ submitScoreForm(props).button }
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