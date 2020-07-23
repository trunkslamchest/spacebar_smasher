import React from 'react'
import { useEffect } from 'react'

import SubmitScoreErrorMessages from './SubmitScoreErrorMessages'

import './SubmitScoreErrorContainer.css'

const SubmitScoreErrorContainer = (props) => {

  useEffect(() => { document.title = "Spacebar Smasher - Error" }, [])

  const onClickFunctions = (event) => { props.initDismountModal() }

  return(
    <div className='submit_score_error_container'>
        <SubmitScoreErrorMessages
          broName={ props.broName }
          validationErrors={ props.validationErrors }
          specialChars={ props.specialChars }
        />
      <button
        name='submit_score_error_button'
        className='submit_score_error_button'
        onClick={ onClickFunctions }
      >
        OK
      </button>
    </div>
  )
}

export default SubmitScoreErrorContainer