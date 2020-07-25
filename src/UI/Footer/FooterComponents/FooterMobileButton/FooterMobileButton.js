import React from 'react'

import { connect } from 'react-redux'

import footerMobileButtonOpen from '../../../../assets/footer_mobile_button_open.png'
import footerMobileButtonClosed from '../../../../assets/footer_mobile_button_closed.png'


import './FooterMobileButton.css'

const FooterMobileButton = (props) => {

  const onClickFunctions = (event) => {
    if(props.landscapeFooter) props.onDismountLandscapeFooter()
    else props.onMountLandscapeFooter()
  }

  return(
    <button
      className={ props.landscapeFooter ? 'footer_mobile_button_open' : 'footer_mobile_button_closed' }
      name="footer_mobile_button"
      onClick={ onClickFunctions }
    >
      <img
        alt='Display Mobile Footer'
        className='footer_mobile_button_img'
        src={ props.landscapeFooter ? footerMobileButtonOpen : footerMobileButtonClosed }
      />
    </button>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(FooterMobileButton)