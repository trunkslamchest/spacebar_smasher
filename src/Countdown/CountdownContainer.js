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

  state = { time: 5 }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Countdown'
    this.startCountdown()
  }

  startCountdown = () => {
    this.startTimer = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 1000)}, 1000)
    this.startCountdownTimeout = setTimeout(() => {
      this.props.onShowFooter()
      this.props.onShowWrapper(false)
    }, 250)
  }

  initGame = () => {
    this.props.onInitDismount()
    this.onDismountTimeout = setTimeout(() => {
      this.props.onExitDismount()
      this.props.onHideFooter()
      this.props.onHideWrapper()
    }, 250)

    this.showCountdownTimeout = setTimeout(() => {
      this.props.history.push( routes.game )
    }, 500)
  }

  timerFunctions = () => {
    if (this.state.time <= 0 || this.state.time === 0) {
      this.setState({ time: 0 })
      this.initGame()
      clearInterval(this.timerInterval)
    }
    else this.setState({ time: (this.state.time - 1) })
  }

  componentWillUnmount(){
    clearTimeout(this.startTimer)
    clearInterval(this.timerInterval)
    clearTimeout(this.startCountdownTimeout)
    clearTimeout(this.showCountdownTimeout)
    clearTimeout(this.onDismountTimeout)
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
        { this.props.ui.showWrapper ?
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
    game: state.game,
    ui: state.ui
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onShowFooter: () => dispatch(actions.showFooter()),
    onHideFooter: () => dispatch(actions.hideFooter()),
    onShowWrapper: () => dispatch(actions.showWrapper()),
    onHideWrapper: () => dispatch(actions.hideWrapper()),
    onInitDismount: () => dispatch(actions.initDismount()),
    onExitDismount: () => dispatch(actions.exitDismount()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownContainer)