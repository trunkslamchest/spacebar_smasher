import React from 'react'

import './SubmitScoreRank.css'

const SubmitScoreRank = (props) => {

  const rank = <h1>{ props.rank ? props.rank : "SUPER BABY FINGERS" }</h1>

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_submit_score_rank" : "submit_score_rank"
        }[props.showRank]}
    >
      <h2>RANK</h2>
      { rank }
    </div>
  )
}

export default SubmitScoreRank