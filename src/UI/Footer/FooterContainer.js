import React from 'react'

import FooterLogosContainer from './FooterComponents/FooterLogos/FooterLogosContainer'
import FooterFinePrint from './FooterComponents/FooterFinePrint/FooterFinePrint'

import './FooterContainer.css'
import './FooterContainerOnmount.css'
import './FooterContainerDismount.css'

const FooterContainer = (props) => {

  let footerClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      if(props.initDismount) {
        footerClass = "dismount_footer_mobile_container_landscape"
      } else {
        footerClass = "footer_mobile_container_landscape"
      }
    } else {
      if(props.initDismount) {
        footerClass = "dismount_footer_mobile_container_portrait"
      } else {
        footerClass = "footer_mobile_container_portrait"
      }
    }
  } else {
    if(props.initDismount) {
      footerClass = "dismount_footer_desktop_container"
    } else {
      footerClass = "footer_desktop_container"
    }
  }

  return(
    <div className={ props.showFooter ? footerClass : "blank" }>
      <FooterLogosContainer
        isMobile={ props.isMobile }
        orientation={ props.orientation }
      />
      <FooterFinePrint
        isMobile={ props.isMobile }
        orientation={ props.orientation }
      />
    </div>
  )
}

export default FooterContainer