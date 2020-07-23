import React from 'react'

import './backdrop.css'

const Backdrop = (props) => {
  return( props.show ? <div className={ props.initDismount ? 'dismount_backdrop' : 'backdrop'}></div> : null )
}

export default Backdrop