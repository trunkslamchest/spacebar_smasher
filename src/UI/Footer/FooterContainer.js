import React from 'react'
import { connect } from 'react-redux'

import FooterLogosContainer from './FooterComponents/FooterLogos/FooterLogosContainer'
import FooterFinePrint from './FooterComponents/FooterFinePrint/FooterFinePrint'

import './FooterContainer.css'
import './FooterContainerOnmount.css'
import './FooterContainerDismount.css'

const FooterContainer = (props) => {

  let footerClass

  if(props.device === "mobile"){
    if(props.orientation === "landscape") {
      if(props.ui.initDismount) {
        footerClass = "dismount_footer_mobile_container_landscape"
      } else {
        footerClass = "footer_mobile_container_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        footerClass = "dismount_footer_mobile_container_portrait"
      } else {
        footerClass = "footer_mobile_container_portrait"
      }
    }
  } else {
    if(props.ui.initDismount) {
      footerClass = "dismount_footer_desktop_container"
    } else {
      footerClass = "footer_desktop_container"
    }
  }

  return(
    <div className={ footerClass }>
      <FooterLogosContainer />
      <FooterFinePrint />
    </div>
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