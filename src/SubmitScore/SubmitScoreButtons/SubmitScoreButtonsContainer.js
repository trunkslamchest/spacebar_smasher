import React from 'react'

import './SubmitScoreButtonsContainer.css'
import './SubmitScoreButtonsContainerOnmount.css'

const SubmitScoreButtonsContainer = (props) => {

  const onClickFunctions = (event) => { props.onClickButtonFunctions(event) }

  return(
    <div className="submit_score_buttons_container">
      <button
        nav="main_menu"
        name="submit_score_main_menu_button"
        className={props.initDismount ? "dismount_submit_score_main_menu_button" : "submit_score_main_menu_button" }
        onClick={ onClickFunctions }
      >
        MAIN MENU
      </button>
      <button
        nav="game"
        name="submit_score_try_again_button"
        className={props.initDismount ? "dismount_submit_score_try_again_button" : "submit_score_try_again_button" }
        onClick={ onClickFunctions }
      >
        TRY AGAIN
      </button>
    </div>
  )
}

export default SubmitScoreButtonsContainer