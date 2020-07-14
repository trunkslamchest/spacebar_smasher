import React from 'react'

import './SubmitScoreCounter.css'

const SubmitScoreCounter = (props) => {

  const count = <h1>{ props.count ? props.count : 0 }</h1>

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_submit_score_counter" : "submit_score_counter"
        }[props.showCounter]}
    >
      <h2>SMASHES</h2>
      { count }
    </div>
  )
}

export default SubmitScoreCounter