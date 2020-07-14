import React from 'react'

import './SubmitScoreHeader.css'

const SubmitScoreHeader = (props) => {

  const header = <h1>OUTTA TIME!</h1>

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_submit_score_header" : "submit_score_header"
        }[props.showHeader]}
    >
      { header }
    </div>
  )
}

export default SubmitScoreHeader