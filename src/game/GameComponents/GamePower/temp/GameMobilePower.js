import React from 'react'

import './GameMobilePower.css'

const GameMobilePower = (props) => {

  const blank = <></>

  const power = <h1>{ (props.power).toFixed(3) }</h1>

  return(
        <div className={{
            false: "blank",
            true: {
              false: props.initDismount ? "dismount_game_mobile_power_portrait" : "game_mobile_power_portrait",
              true: props.initDismount ? "dismount_game_mobile_power_landscape" : "game_mobile_power_landscape"
            }[props.isLandscape && window.innerWidth < 1024]
          }[props.showPower]}
        >
          <h2>POWER</h2>
          { props.showPower ? power : blank }

          <div className={{
            false: "blank",
            true: {
              false: props.initDismount ? "dismount_game_mobile_power_bar_portrait" : "game_mobile_power_bar_portrait",
              true: props.initDismount ? "dismount_game_mobile_power_bar_landscape" : "game_mobile_power_bar_landscape"
            }[props.isLandscape && window.innerWidth < 1024]
          }[props.showPower]}
          >
            <meter value={props.power} min="0.0" low="1.0" optimum="2.0" high="4.0" max="6.0">
            </meter>
          </div>

        </div>
  )

}

export default GameMobilePower