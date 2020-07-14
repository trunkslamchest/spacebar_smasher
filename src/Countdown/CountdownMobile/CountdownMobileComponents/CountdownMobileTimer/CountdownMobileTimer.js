import React from 'react'

import './CountdownMobileTimer.css'
import './CountdownMobileTimerDismount.css'

const CountdownMobileTimer = (props) => {
  return(
    <div className={props.initDismount ? "dismount_countdown_mobile_timer" : "countdown_mobile_timer" }>
      <div className={
        (props.time === 5 || props.time === 4) ?
          "countdown_mobile_timer_five"
        :
          (props.time === 3 || props.time === 2) ?
            "countdown_mobile_timer_three"
          :
            (props.time === 1) ?
              "countdown_mobile_timer_one"
            :
              (props.time === 0) ?
                "countdown_mobile_timer_go"
              :
                "countdown_mobile_timer_blank"
        }
      >
        <h1>
          { props.time > 0 ? props.time : "GO" }
        </h1>
      </div>
    </div>
  )
}

export default CountdownMobileTimer