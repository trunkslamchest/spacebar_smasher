import React from 'react'
import { useEffect } from 'react'

import SubmitScoreErrorMessages from './SubmitScoreErrorMessages'

import './SubmitScoreErrorContainer.css'

const SubmitScoreErrorContainer = (props) => {

  const onClickFunctions = (event) => { props.initDismountModal() }

  useEffect(() => { document.title = "Spacebar Smasher - Error" }, [])

  return(
    <div className='submit_score_error_container'>
        <SubmitScoreErrorMessages
          broName={ props.broName }
          count={ props.count }
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