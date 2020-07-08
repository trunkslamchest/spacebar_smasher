import React from 'react'

import './SubmitScoreButtonsContainer.css'

const SubmitScoreButtonsContainer = (props) => {

  const onClickFunctions = (event) => { props.onClickButtonFunctions(event) }

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_submit_score_buttons_container" : "submit_score_buttons_container"
        }[props.showButtons]}
    >
      <button
        nav="main_menu"
        name="main_menu_button"
        className="main_menu_button"
        onClick={ onClickFunctions }
      >
        Main Menu
      </button>
      <button
        nav="game"
        name="try_again_button"
        className="try_again_button"
        onClick={ onClickFunctions }
      >
        Try Again
      </button>
    </div>
  )
}

export default SubmitScoreButtonsContainer