import React from 'react'

import './SubmitScorePower.css'

const SubmitScorePower = (props) => {
  return(
    <div className={{
          false: "blank",
          true: props.initDismount ? "dismount_submit_score_power" : "submit_score_power"
        }[props.showPower]}
    >
      <h2>POWER</h2>
      <div className={ props.showPower ? "submit_score_power_bar": "blank" }>
        <meter value={ props.power } min="0.0" low="1.0" optimum="2.0" high="4.0" max="6.0">
        </meter>
      </div>
    </div>
  )
}

export default SubmitScorePower