import React from 'react'

import './CountdownDesktopHeader.css'
import './CountdownDesktopHeaderDismount.css'

import './CountdownMobileHeader.css'
import './CountdownMobileHeaderDismount.css'

const CountdownHeader = (props) => {
  return(
    <div className={{
      false: props.initDismount ? "dismount_countdown_desktop_header" : "countdown_desktop_header",
      true: props.initDismount ? "dismount_countdown_mobile_header" : "countdown_mobile_header",
    }[props.isMobile]}>
      <h3>GET READY</h3>
    </div>
  )
}

export default CountdownHeader