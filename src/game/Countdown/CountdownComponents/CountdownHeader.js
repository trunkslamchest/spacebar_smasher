import React from 'react'

import './CountdownHeader.css'

const CountdownHeader = (props) => {
  return(
    <div className={props.initDismount ? "dismount_countdown_header" : "countdown_header"}
    >
      <h3>
        GET READY
      </h3>
    </div>
  )
}

export default CountdownHeader