import React from 'react'

import './CountdownTimer.css'

const CountdownTimer = (props) => {

  const countdown_timer = <h1>{ props.time }</h1>

  return(
    <>
      <div className={ (props.time === 5 || props.time === 4) && props.showTimer ? "countdown_timer_five" : "blank" } >
        { countdown_timer }
      </div>
      <div className={ (props.time === 3 || props.time === 2) && props.showTimer ? "countdown_timer_three" : "blank" } >
        { countdown_timer }
      </div>
      <div className={ (props.time === 1) && props.showTimer ? "countdown_timer_one" : "blank" } >
        { countdown_timer }
      </div>
      <div className={{
            false: "blank",
            true: props.initDismount ? "dismount_countdown_go" : "countdown_go"
          }[props.time === 0]}
      >
        <h1>
          GO
        </h1>
      </div>
    </>
  )
}

export default CountdownTimer