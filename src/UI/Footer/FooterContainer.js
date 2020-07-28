import React from 'react'

import { connect } from 'react-redux'
import * as actions from '../../store/actions/actionIndex'


import { footerContainer } from './FooterFunctions/classSwitch'

import FooterButton from './FooterComponents/FooterButton/FooterButton'
import FooterLogosContainer from './FooterComponents/FooterLogos/FooterLogosContainer'
import FooterFinePrint from './FooterComponents/FooterFinePrint/FooterFinePrint'

import Backdrop from '../backdrop/backdrop'

import './FooterContainer.css'
import './FooterContainerOnmount.css'
import './FooterContainerDismount.css'

const FooterContainer = (props) => {

  const onDismountLogoContainer = () => {
    props.onFooterInitDismountLogosContainer(true)

    setTimeout(() => { props.onFooterLogosContainer(false) }, 125)

    setTimeout(() => { props.onFooterInitDismountLogosContainer(false) }, 250)
  }

  const onMountLogoContainer = () => { props.onFooterLogosContainer(true) }

  let footer

  if(props.ui.footer){
    if(props.ui.home || props.ui.postGame) footer = <FooterButton onMountLogoContainer={ onMountLogoContainer } onDismountLogoContainer={ onDismountLogoContainer } />
    else footer = null
  } else footer = null

  return(
    <div className={ footerContainer(props).container }>
      { footer }
      { props.ui.footerLogosContainer ?
        <>
        <Backdrop
          show={props.ui.footerLogosContainer }
          initDismount={ props.ui.footerInitDismountLogosContainer }
        />
        <div className={ footerContainer(props).wrapper }>
          <FooterLogosContainer />
          <FooterFinePrint />
        </div>
      </>
      :
        null
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onFooterLogosContainer: (bool) => dispatch(actions.footerLogosContainer(bool)),
    onFooterInitDismountLogosContainer: (bool) => dispatch(actions.footerInitDismountLogosContainer(bool)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer)