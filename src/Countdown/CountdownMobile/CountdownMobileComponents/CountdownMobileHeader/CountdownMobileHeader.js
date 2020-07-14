import React from 'react'

import './CountdownMobileHeader.css'
import './CountdownMobileHeaderDismount.css'

const CountdownDesktopHeader = (props) => {
  return(
    <div className={props.initDismount ? "dismount_countdown_mobile_header" : "countdown_mobile_header"}>
      <h3>GET READY</h3>
    </div>
  )
}

export default CountdownMobileHeader