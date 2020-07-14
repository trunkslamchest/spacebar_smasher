import React from 'react'

import Backdrop from '../backdrop/backdrop'

import './modal.css'
import './modalDismount.css'
import './modalOnmount.css'

const Modal = (props) => {
  return(
    <>
      { props.show ?
        <>
          <Backdrop
            show={ props.show }
            initDismount={ props.initDismount }
          />
          <div className={ props.initDismount ? 'dismount_modal_wrapper': 'modal_wrapper' } >
            { props.children }
          </div>
        </>
      :
        null
      }
    </>
  )
}

export default Modal
