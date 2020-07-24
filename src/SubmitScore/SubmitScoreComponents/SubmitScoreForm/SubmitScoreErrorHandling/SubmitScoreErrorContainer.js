import React from 'react'
import { useEffect } from 'react'

import FixingRedux from './FixingRedux/FixingRedux'

import SubmitScoreErrorMessages from './SubmitScoreErrorMessages'

import './SubmitScoreErrorContainer.css'

const SubmitScoreErrorContainer = (props) => {

  useEffect(() => { document.title = "Spacebar Smasher - Error" }, [])

  const onClickFunctions = (event) => { props.initDismountModal() }

  const onClickFixRedux = (event) => { props.fixRedux(event) }

  return(
    <div className='submit_score_error_container'>
        <SubmitScoreErrorMessages
          fixingRedux={ props.fixingRedux }
          fixedRedux={ props.fixedRedux }
          broName={ props.broName }
          validationErrors={ props.validationErrors }
        />
      { props.validationErrors[0].code === 69 ?
        <button
          nav='scoreboard'
          name='fixing_redux_button'
          className={ props.fixingRedux || props.fixedRedux ? "fixing_redux_button" : 'submit_score_error_button' }
          onClick={ props.fixingRedux ? null : onClickFixRedux }
        >
          { props.fixingRedux || props.fixedRedux ? <FixingRedux /> : "FIX"}
        </button>
      :
        <button
          name='submit_score_error_button'
          className='submit_score_error_button'
          onClick={ onClickFunctions }
        >
          OK
        </button>
      }
    </div>
  )
}

export default SubmitScoreErrorContainer