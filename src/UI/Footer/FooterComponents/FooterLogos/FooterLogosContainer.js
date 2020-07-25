import React from 'react'
import { connect } from 'react-redux'

import { footerLogosContainer, footerLogos } from '../../FooterFunctions/classSwitch'

import FooterLogoButton from './FooterLogoButton/FooterLogoButton'

import firebase_logo from '../../../../assets/footer_logos/footer_logo_firebase.png'
import flatiron_logo from '../../../../assets/footer_logos/footer_logo_flatiron.png'
import github_logo from '../../../../assets/footer_logos/footer_logo_github.png'
import HVH_logo from '../../../../assets/footer_logos/footer_logo_HVH.png'
import react_logo from '../../../../assets/footer_logos/footer_logo_react.png'

import firebase_logo_mobile from '../../../../assets/footer_logos/footer_logo_firebase_mobile.png'
import flatiron_logo_mobile from '../../../../assets/footer_logos/footer_logo_flatiron_mobile.png'
import github_logo_mobile from '../../../../assets/footer_logos/footer_logo_github_mobile.png'
import HVH_logo_mobile from '../../../../assets/footer_logos/footer_logo_HVH_mobile.png'
import react_logo_mobile from '../../../../assets/footer_logos/footer_logo_react_mobile.png'

import './FooterLogosContainer.css'

const FooterLogos = (props) => {

  return(
    <div className={ footerLogosContainer(props).logosContainer }>
      <FooterLogoButton
        altText={ "Firebase" }
        buttonClass={ footerLogos(props).button }
        buttonName={ "footer_logo_firebase" }
        link={ "https://firebase.google.com/" }
        logo={ props.detect.device === "mobile" ? firebase_logo_mobile : firebase_logo }
      />
      <FooterLogoButton
        altText={ "The Flatiron School" }
        buttonClass={ footerLogos(props).button }
        buttonName={ "footer_logo_flatiron" }
        link={ "https://flatironschool.com/" }
        logo={ props.detect.device === "mobile" ? flatiron_logo_mobile : flatiron_logo }
      />
      <FooterLogoButton
        altText={ "Github Repository" }
        buttonClass={ footerLogos(props).button }
        buttonName={ "footer_logo_github" }
        link={ "https://github.com/trunkslamchest/spacebar_smasher" }
        logo={ props.detect.device === "mobile" ? github_logo_mobile : github_logo }
      />
      <FooterLogoButton
        altText={ "Hudson Valley Host" }
        buttonClass={ footerLogos(props).button }
        buttonName={ "footer_logo_HVH" }
        link={ "https://hudsonvalleyhost.com/" }
        logo={ props.detect.device === "mobile" ? HVH_logo_mobile : HVH_logo }
      />
      <FooterLogoButton
        altText={ "React" }
        buttonClass={ footerLogos(props).button }
        buttonName={ "footer_logo_react" }
        link={ "https://reactjs.org/" }
        logo={ props.detect.device === "mobile" ? react_logo_mobile : react_logo }
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(FooterLogos)