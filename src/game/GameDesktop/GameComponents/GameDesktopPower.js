import React from 'react'

import './GameDesktopPower.css'

const GameDesktopPower = (props) => {

  // const blank = <></>

  const power = <h1>{ props.power ? (props.power).toFixed(2) : (0.00).toFixed(2) } %</h1>

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_game_power" : "game_power"
        }[props.showPower]}
    >
      <h2>POWER</h2>
      {/* { props.showPower ? power : blank } */}
      { power }

      {/* <div className={ props.showPower ? "game_power_bar": "blank" }> */}
      <div className={ "game_power_bar" }>
        <meter value={ props.powerRaw } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0">
        </meter>
      </div>
    </div>
  )
}

  export default GameDesktopPower