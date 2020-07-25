import React from 'react'

import { connect } from 'react-redux'

import footerMobileButton from '../../../../assets/footer_mobile_button.png'

import './FooterMobileButton.css'

const FooterMobileButton = (props) => {

  const onClickFunctions = (event) => {
    props.showLandscapeFooter()
  }

  return(
    <button
      className={props.landscapeFooter ? 'footer_mobile_button_open' : 'footer_mobile_button_closed' }
      name="footer_mobile_button"
      onClick={ onClickFunctions }
    >
      {/* <img
        alt='Display Mobile Footer'
        className='footer_mobile_button_img'
        src={ footerMobileButton }
      /> */}
      ?
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