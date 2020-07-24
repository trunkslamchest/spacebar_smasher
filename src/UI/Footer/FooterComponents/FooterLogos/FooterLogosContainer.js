import React from 'react'
import { connect } from 'react-redux'

import { footerLogos } from '../../FooterFunctions/classSwitch'

import FooterLogoButton from './FooterLogoButton/FooterLogoButton'

import firebase_logo from '../../../../assets/footer_logo_firebase.png'
import flatiron_logo from '../../../../assets/footer_logo_flatiron2.png'
import github_logo from '../../../../assets/footer_logo_github.png'
import HVH_logo from '../../../../assets/footer_logo_HVH4.png'
import react_logo from '../../../../assets/footer_logo_react2.png'

import './FooterLogosContainer.css'

const FooterLogos = (props) => {

  return(
    <div className={ footerLogos(props).container }>
      <FooterLogoButton
        altText={ "Firebase" }
        buttonClass={ footerLogos(props).button }
        buttonName={ "footer_logo_firebase" }
        link={ "https://firebase.google.com/" }
        logo={ firebase_logo }
      />
      <FooterLogoButton
        altText={ "The Flatiron School" }
        buttonClass={ footerLogos(props).button }
        buttonName={ "footer_logo_flatiron" }
        link={ "https://flatironschool.com/" }
        logo={ flatiron_logo  }
      />
      <FooterLogoButton
        altText={ "Github Repository" }
        buttonClass={ footerLogos(props).button }
        buttonName={ "footer_logo_github" }
        link={ "https://github.com/trunkslamchest/spacebar_smasher" }
        logo={ github_logo }
      />
      <FooterLogoButton
        altText={ "Hudson Valley Host" }
        buttonClass={ footerLogos(props).button }
        buttonName={ "footer_logo_HVH" }
        link={ "https://hudsonvalleyhost.com/" }
        logo={ HVH_logo }
      />
      <FooterLogoButton
        altText={ "React" }
        buttonClass={ footerLogos(props).button }
        buttonName={ "footer_logo_react" }
        link={ "https://reactjs.org/" }
        logo={ react_logo }
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    device: state.detect.device,
    orientation: state.detect.orientation
  }
}

export default connect(mapStateToProps)(FooterLogos)