import React from 'react'

import './SubmitScoreRank.css'

const SubmitScoreRank = (props) => {
  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_submit_score_rank" : "submit_score_rank"
        }[props.showRank]}
    >
      <h2>RANK</h2>
      <h1>{ props.rank }</h1>
    </div>
  )
}

export default SubmitScoreRank