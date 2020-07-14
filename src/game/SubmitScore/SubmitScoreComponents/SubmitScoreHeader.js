import React from 'react'

import './SubmitScoreHeader.css'

const SubmitScoreHeader = (props) => {

  const blank = <></>

  const header = <h1>OUTTA TIME!</h1>

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_submit_score_header" : "submit_score_header"
        }[props.showHeader]}
    >
      { props.showHeader ? header : blank }
    </div>
  )
}

export default SubmitScoreHeader