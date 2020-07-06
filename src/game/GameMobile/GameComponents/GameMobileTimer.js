import React from 'react'

import './GameMobileTimer.css'

const GameMobileTimer = (props) => {

  const blank = <></>

  const time = <h1>{ props.time ? props.time : (0.00).toFixed(2) }</h1>

  return(
    <div className={{
        false: "blank",
        true: {
          false: props.initDismount ? "dismount_game_mobile_timer_portrait" : "game_mobile_timer_portrait",
          true: props.initDismount ? "dismount_game_mobile_timer_landscape" : "game_mobile_timer_landscape"
        }[props.isLandscape && window.innerWidth < 1024]
      }[props.showTimer]}
    >
      <h2>TIME</h2>
      { props.showTimer ? time : blank }
    </div>
  )
}

export default GameMobileTimer