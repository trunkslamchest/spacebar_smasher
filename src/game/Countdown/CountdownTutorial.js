import React from 'react'

import './CountdownTutorial.css'

const CountdownTutorial = (props) => {
  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_countdown_tutorial" : "countdown_tutorial"
        }[props.showTutorial]}
      >
        <p>
          Press the spacebar as many times as you can in 30 seconds
        </p>
    </div>
  )
}

export default CountdownTutorial