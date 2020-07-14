import React from 'react'

import './GameDesktopCounter.css'

const GameDesktopCounter = (props) => {

  // const blank = <></>

  const counter = <h1>{ props.counts ? props.count : 0 }</h1>

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_game_counter" : "game_counter"
        }[props.showCounter]}
    >
      <h2>SMASHES</h2>
      {/* { props.showCounter ? counter : blank } */}
      { counter }
    </div>
  )
}

export default GameDesktopCounter