import React from 'react'

import FooterLogoButton from './FooterLogoButton/FooterLogoButton'

import firebase_logo from '../../../../assets/footer_logo_firebase.png'
import flatiron_logo from '../../../../assets/footer_logo_flatiron2.png'
import github_logo from '../../../../assets/footer_logo_github.png'
import HVH_logo from '../../../../assets/footer_logo_HVH4.png'
import react_logo from '../../../../assets/footer_logo_react2.png'

import './FooterLogosContainer.css'

const FooterLogos = (props) => {

  let containerClass, buttonClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      containerClass = "footer_logos_mobile_container_landscape"
      buttonClass = "logo_rectangle_mobile_landscape"
    } else {
      containerClass = "footer_logos_mobile_container_portrait"
      buttonClass = "logo_rectangle_mobile_portrait"
    }
  } else {
    containerClass = "footer_logos_desktop_container"
    buttonClass = "logo_rectangle_desktop"
  }


  return(
    <div className={ containerClass }>
      <FooterLogoButton
        altText={ "Firebase" }
        buttonClass={ buttonClass }
        buttonName={ "footer_logo_firebase" }
        link={ "https://firebase.google.com/" }
        logo={ firebase_logo }
      />
      <FooterLogoButton
        altText={ "The Flatiron School" }
        buttonClass={ buttonClass }
        buttonName={ "footer_logo_flatiron" }
        link={ "https://flatironschool.com/" }
        logo={ flatiron_logo  }
      />
      <FooterLogoButton
        altText={ "Github Repository" }
        buttonClass={ buttonClass }
        buttonName={ "footer_logo_github" }
        link={ "https://github.com/trunkslamchest/spacebar_smasher" }
        logo={ github_logo }
      />
      <FooterLogoButton
        altText={ "Hudson Valley Host" }
        buttonClass={ buttonClass }
        buttonName={ "footer_logo_HVH" }
        link={ "https://hudsonvalleyhost.com/" }
        logo={ HVH_logo }
      />
      <FooterLogoButton
        altText={ "React" }
        buttonClass={ buttonClass }
        buttonName={ "footer_logo_react" }
        link={ "https://reactjs.org/" }
        logo={ react_logo }
      />
    </div>
  )
}

export default FooterLogos