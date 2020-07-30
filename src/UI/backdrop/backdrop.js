import React from 'react'

import './backdrop.scss'

const Backdrop = (props) => {
  return( props.show ? <div className={ props.initDismount ? 'dismount_backdrop' : 'backdrop'}></div> : null )
}

export default Backdrop