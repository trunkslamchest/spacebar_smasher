import React from 'react'

import './GameMobileCounter.css'

const GameMobileCounter = (props) => {

  const blank = <></>

  const counter = <h1>{ props.count ? props.count : 0 }</h1>

  return(
    <div className={{
        false: "blank",
        true: {
          false: props.initDismount ? "dismount_game_mobile_counter_portrait" : "game_mobile_counter_portrait",
          true: props.initDismount ? "dismount_game_mobile_counter_landscape" : "game_mobile_counter_landscape"
        }[props.isLandscape]
      }[props.showCounter]}
    >
      <h2>SMASHES</h2>
      { props.showCounter ? counter : blank }
    </div>
  )
}

export default GameMobileCounter