import React from 'react'

import './SubmitScoreRank.css'

const SubmitScoreRank = (props) => {

  // const rank = <h1>{ this.props.rank }</h1>

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_submit_score_rank" : "submit_score_rank"
        }[props.showRank]}
    >
      <h2>RANK</h2>
      {/* { this.state.showRank ? rank : blank } */}
      <h1>{ props.rank }</h1>
    </div>
  )
}

export default SubmitScoreRank