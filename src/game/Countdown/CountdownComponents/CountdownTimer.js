import React from 'react'

import './CountdownTimer.css'

const CountdownTimer = (props) => {
  return(
    <div className={props.initDismount ? "dismount_countdown_timer" : "countdown_timer" }>
      <div className={
        (props.time === 5 || props.time === 4) ?
          "countdown_timer_five"
        :
          (props.time === 3 || props.time === 2) ?
            "countdown_timer_three"
          :
            (props.time === 1) ?
              "countdown_timer_one"
            :
              (props.time === 0) ?
                "countdown_timer_go"
              :
                "countdown_timer_blank"
        }
      >
        <h1>
          { props.time > 0 ? props.time : "GO" }
        </h1>
      </div>
    </div>
  )
}

export default CountdownTimer