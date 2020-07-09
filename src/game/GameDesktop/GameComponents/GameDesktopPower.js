import React from 'react'

import './GameDesktopPower.css'

const GameDesktopPower = (props) => {

  const blank = <></>

  const power = <h1>{ (props.power).toFixed(3) }</h1>

  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_game_power" : "game_power"
        }[props.showPower]}
    >
      <h2>POWER</h2>
      { props.showPower ? power : blank }

      <div className={ props.showPower ? "game_power_bar": "blank" }>
        <meter value={ props.power } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0">
        </meter>
      </div>
    </div>
  )
}

  export default GameDesktopPower