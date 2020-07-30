import React from 'react'

import { connect } from 'react-redux'

import { footerButton } from '../../FooterFunctions/classSwitch'

import footerMobileButtonOpen from '../../../../assets/footer_mobile_button/footer_mobile_button_open.png'
import footerMobileButtonClosed from '../../../../assets/footer_mobile_button/footer_mobile_button_closed.png'

import './FooterButton.scss'

const FooterButton = (props) => {

  const onClickFunctions = () => {
    if(props.ui.footerLogosContainer) props.onDismountLogoContainer()
    else props.onMountLogoContainer()
  }

  return(
    <button
      className={ footerButton(props).status }
      name="footer_mobile_button"
      onClick={ onClickFunctions }
    >
      <img
        alt='Display Mobile Footer'
        className={ footerButton(props).img }
        src={ props.ui.footerLogosContainer ? footerMobileButtonOpen : footerMobileButtonClosed }
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

export default connect(mapStateToProps)(FooterButton)