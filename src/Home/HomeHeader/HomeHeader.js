import React from 'react'

import { connect } from 'react-redux'

import './HomeDesktopHeader.css'
import './HomeDesktopHeaderDismount.css'
import './HomeDesktopHeaderOnmount.css'

import './HomeMobileHeaderLandscape.css'
import './HomeMobileHeaderPortrait.css'
import './HomeMobileHeaderDismount.css'
import './HomeMobileHeaderOnmount.css'

const HomeHeader = (props) => {

  console.log(props)

  let wrapperClass, headerClass, startButtonContainerClass, startButtonClass

  // if(props.isMobile){
  if(props.device === "mobile"){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      if(props.initDismount) {
        wrapperClass = "dismount_home_header_mobile_wrapper_landscape"
        headerClass = "dismount_home_header_mobile_landscape"
        startButtonContainerClass = "dismount_start_button_container_mobile_landscape"
        startButtonClass = "start_button_mobile_landscape"
      } else {
        wrapperClass = "home_header_mobile_wrapper_landscape"
        headerClass = "home_header_mobile_landscape"
        startButtonContainerClass = "start_button_container_mobile_landscape"
        startButtonClass = "start_button_mobile_landscape"
      }
    } else {
      if(props.initDismount) {
        wrapperClass = "dismount_home_header_mobile_wrapper_portrait"
        headerClass = "dismount_home_header_mobile_portrait"
        startButtonContainerClass = "dismount_start_button_container_mobile_portrait"
        startButtonClass = "start_button_mobile_portrait"
      } else {
        wrapperClass = "home_header_mobile_wrapper_portrait"
        headerClass = "home_header_mobile_portrait"
        startButtonContainerClass = "start_button_container_mobile_portrait"
        startButtonClass = "start_button_mobile_portrait"
      }
    }
  } else {
    if(props.initDismount){
      wrapperClass = "dismount_home_header_desktop_wrapper"
      headerClass = "dismount_home_header_desktop"
      startButtonContainerClass = "dismount_start_button_container_desktop"
      startButtonClass = "start_button_desktop"
    } else {
      wrapperClass = "home_header_desktop_wrapper"
      headerClass = "home_header_desktop"
      startButtonContainerClass = "start_button_container_desktop"
      startButtonClass = "start_button_desktop"
    }
  }

  return(
    <div className={ wrapperClass }>
      <div className={ headerClass } >
        <h1>SPACEBAR SMASHER</h1>
      </div>
      <div className={ startButtonContainerClass }>
        <button
          name="start_button"
          className={ startButtonClass }
          onClick={ props.onClickStartButton }
        >
          START
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    device: state.detect.device,
    orientation: state.detect.orientation
  }
}

export default connect(mapStateToProps)(HomeHeader)