import React from 'react'

import './GameDesktopTimer.css'

const GameDesktopTimer = (props) => {

  // const blank = <></>

  const time = <h1>{ props.time ? props.time : (0.00).toFixed(2) }</h1>

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_game_timer" : "game_timer"
        }[props.showTimer]}
    >
      <h2>TIME</h2>
      {/* { props.showTimer ? time : blank } */}
      { time }
    </div>
  )
}

export default GameDesktopTimer