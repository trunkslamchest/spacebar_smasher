import React from 'react'

import './SubmitScoreHeader.css'

const SubmitScoreHeader = (props) => {

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_submit_score_header" : "submit_score_header"
        }[props.showHeader]}
    >
      <h1>OUTTA TIME!</h1>
    </div>
  )
}

export default SubmitScoreHeader