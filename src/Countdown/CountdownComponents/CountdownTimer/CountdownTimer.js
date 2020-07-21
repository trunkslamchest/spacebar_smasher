import React from 'react'

import { connect } from 'react-redux'

import './CountdownDesktopTimer.css'
import './CountdownDesktopTimerDismount.css'
import './CountdownDesktopTimerOnmount.css'
import './CountdownMobileTimerLandscape.css'
import './CountdownMobileTimerPortrait.css'
import './CountdownMobileTimerDismount.css'
import './CountdownMobileTimerOnmount.css'

const CountdownTimer = (props) => {

  let currentParentClass, currentChildClass

  // if(props.isMobile){
  if(props.device === "mobile") {
    if(props.orientation === "landscape") {
      if(props.initDismount) currentParentClass = "dismount_countdown_mobile_timer_landscape"
      else currentParentClass = "countdown_mobile_timer_landscape"
    } else {
      if(props.initDismount) currentParentClass = "dismount_countdown_mobile_timer_portrait"
      else currentParentClass = "countdown_mobile_timer_portrait"
    }
  } else {
    if(props.initDismount) currentParentClass = "dismount_countdown_desktop_timer"
    else currentParentClass = "countdown_desktop_timer"
  }

  // if(props.isMobile){
  if(props.device === "mobile") {
    if(props.orientation === "landscape") {
      (props.time === 5 || props.time === 4) ?
          currentChildClass = "countdown_mobile_timer_five_landscape"
        :
          (props.time === 3 || props.time === 2) ?
            currentChildClass = "countdown_mobile_timer_three_landscape"
          :
            (props.time === 1) ?
              currentChildClass = "countdown_mobile_timer_one_landscape"
            :
              (props.time === 0) ?
                currentChildClass = "countdown_mobile_timer_go_landscape"
              :
                currentChildClass = "countdown_mobile_timer_blank_landscape"
    } else {
      (props.time === 5 || props.time === 4) ?
          currentChildClass = "countdown_mobile_timer_five_portrait"
        :
          (props.time === 3 || props.time === 2) ?
            currentChildClass = "countdown_mobile_timer_three_portrait"
          :
            (props.time === 1) ?
              currentChildClass = "countdown_mobile_timer_one_portrait"
            :
              (props.time === 0) ?
                currentChildClass = "countdown_mobile_timer_go_portrait"
              :
                currentChildClass = "countdown_mobile_timer_blank_portrait"
    }
  } else {
      (props.time === 5 || props.time === 4) ?
        currentChildClass = "countdown_desktop_timer_five"
      :
        (props.time === 3 || props.time === 2) ?
          currentChildClass = "countdown_desktop_timer_three"
        :
          (props.time === 1) ?
            currentChildClass = "countdown_desktop_timer_one"
          :
            (props.time === 0) ?
              currentChildClass = "countdown_desktop_timer_go"
            :
              currentChildClass = "countdown_desktop_timer_blank"
  }

  return(
    <div className={ currentParentClass }>
      <div className={ currentChildClass }>
        <h1>
          { props.time > 0 ? props.time : "GO" }
        </h1>
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

export default connect(mapStateToProps)(CountdownTimer)