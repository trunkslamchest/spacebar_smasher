import React from 'react'

import './CountdownHeader.css'

const CountdownHeader = (props) => {
  return(
    <div className={{
          true: props.initDismount ? "dismount_countdown_header" : "countdown_header",
          false: "blank"
        }[props.showHeader]}
    >
      <h3>
        GET READY
      </h3>
    </div>
  )
}

export default CountdownHeader