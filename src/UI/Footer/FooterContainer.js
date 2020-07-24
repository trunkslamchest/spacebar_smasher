import React from 'react'
import { connect } from 'react-redux'

import { footerContainer } from './FooterFunctions/classSwitch'

import FooterLogosContainer from './FooterComponents/FooterLogos/FooterLogosContainer'
import FooterFinePrint from './FooterComponents/FooterFinePrint/FooterFinePrint'

import './FooterContainer.css'
import './FooterContainerOnmount.css'
import './FooterContainerDismount.css'

const FooterContainer = (props) => {
  return(
    <>
      { props.ui.footer ?
        <div className={ footerContainer(props).container }>
          <FooterLogosContainer />
          <FooterFinePrint />
        </div>
      :
        null
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    device: state.detect.device,
    orientation: state.detect.orientation,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(FooterContainer)