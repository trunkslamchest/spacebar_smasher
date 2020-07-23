import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/actionIndex'

import { routes } from '../utility/paths'

import FooterContainer from 'UI/Footer/FooterContainer'

import CountdownHeader from './CountdownComponents/CountdownHeader/CountdownHeader'
import CountdownTimer from './CountdownComponents/CountdownTimer/CountdownTimer'
import CountdownTutorial from './CountdownComponents/CountdownTutorial/CountdownTutorial'

import './CountdownDesktopContainer.css'
import './CountdownMobileContainerLandscape.css'
import './CountdownMobileContainerPortrait.css'

class CountdownContainer extends React.Component {

  state = { time: 1 }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Countdown'
    this.onMount()
  }

  onMount = () => {
    this.onMountTimeout = setTimeout(() => {
      this.props.onFooter(true)
      this.props.onWrapper(true)
    }, 125)

    this.startTimerTimeout = setTimeout(() => {
      this.startTimerInterval = setInterval(
        this.timerFunctions, 1000
      )
    }, 1000)
  }

  onDismount = () => {

    this.initDismountTimeout = setTimeout(() => {
      this.props.onInitDismount(true)
    }, 125)

    this.onDismountTimeout = setTimeout(() => {
      this.props.onFooter(false)
      this.props.onWrapper(false)
    }, 250)

    this.exitDismountTimeout = setTimeout(() => {
      this.props.onInitDismount(false)
      this.props.history.push( routes.game )
    }, 500)
  }

  timerFunctions = () => {
    if (this.state.time <= 0 || this.state.time === 0) {
      this.setState({ time: 0 })
      this.onDismount()
      clearInterval(this.timerInterval)
    }
    else this.setState({ time: (this.state.time - 1) })
  }

  componentWillUnmount(){
    clearTimeout(this.startTimerTimeout)
    clearInterval(this.startTimerInterval)
    clearTimeout(this.onMountTimeout)
    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.onDismountTimeout)
    clearTimeout(this.exitDismountTimeout)
  }

  render(){

    let wrapperClass, pillClass

    if(this.props.detect.device === "mobile") {
      if(this.props.detect.orientation === "landscape") {
        wrapperClass = "countdown_mobile_wrapper_landscape"
        pillClass = "countdown_mobile_pill_landscape"
      } else {
        wrapperClass = "countdown_mobile_wrapper_portrait"
        pillClass = "countdown_mobile_pill_portrait"
      }
    } else {
      wrapperClass = "countdown_desktop_wrapper"
      pillClass = "countdown_desktop_pill"
    }

    return(
      <>
        { this.props.ui.wrapper ?
          <>
            <div className={ wrapperClass }>
              <div className={ pillClass }>
                <CountdownHeader />
                <CountdownTimer
                  time={ this.state.time }
                />
                <CountdownTutorial />
              </div>
            </div>
            <FooterContainer />
          </>
        :
          <></>
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onInitDismount: (bool) => dispatch(actions.initDismount(bool)),
    onWrapper: (bool) => dispatch(actions.wrapper(bool)),
    onFooter: (bool) => dispatch(actions.footer(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownContainer)