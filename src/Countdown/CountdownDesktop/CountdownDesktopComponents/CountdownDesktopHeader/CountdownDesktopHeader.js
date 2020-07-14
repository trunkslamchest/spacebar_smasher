import React from 'react'

import './CountdownDesktopHeader.css'
import './CountdownDesktopHeaderDismount.css'

const CountdownDesktopHeader = (props) => {
  return(
    <div className={props.initDismount ? "dismount_countdown_desktop_header" : "countdown_desktop_header"}>
      <h3>GET READY</h3>
    </div>
  )
}

export default CountdownDesktopHeader