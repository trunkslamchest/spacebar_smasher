import React from 'react'

import FooterContainer from 'UI/Footer/FooterContainer'

import CountdownHeader from './CountdownComponents/CountdownHeader/CountdownHeader'
import CountdownTimer from './CountdownComponents/CountdownTimer/CountdownTimer'
import CountdownTutorial from './CountdownComponents/CountdownTutorial/CountdownTutorial'

import GameContainer from 'game/GameContainer.js'

import './CountdownDesktopContainer.css'
import './CountdownDesktopDismount.css'
import './CountdownMobileContainerLandscape.css'
import './CountdownMobileContainerPortrait.css'
import './CountdownMobileDismount.css'

export default class CountdownContainer extends React.Component {

  state = {
    initDismount: false,
    showCountdown: true,
    showHeader: false,
    showTimer: false,
    showGo: false,
    showTutorial: false,
    showFooter: false,
    time: 1,
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Countdown'

    this.startCountdown()
  }

  componentDidUpdate(){
    if(this.state.time === 0 && this.state.showCountdown) this.startGame()
    if(this.state.initDismount) this.onDismount()
  }

  startCountdown = () => {
    this.startTimer = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 1000)}, 1000)

    this.componentTimeout = setTimeout(() => {
      this.setState({
        showHeader: true,
        showTimer: true,
        showTutorial: true,
        showFooter: true
      })
    }, 500)
  }

  startGame = () => {
    this.initDismountTimeout = setTimeout(() => { this.setState({ initDismount: true })}, 500)
    // this.hideCountdownTimeout = setTimeout(() => { this.setState({ showCountdown: false })}, 1000)
  }

  timerFunctions = () => {
    if (this.state.time <= 0) {
      this.setState({
        time: 0,
        showTimer: false,
        showGo: true,
      }, clearInterval(this.timerInterval))
    }
    else this.setState({ time: (this.state.time - 1) })
  }

  onDismount = () => { this.clearTimersTimeout = setTimeout(() => { this.clearTimers() }, 800) }

  clearTimers = () => {
    clearTimeout(this.startTimer)
    clearInterval(this.timerInterval)
    clearTimeout(this.componentTimeout)
    clearTimeout(this.hideCountdownTimeout)
    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.clearTimersTimeout)
  }

  componentWillUnmount(){ this.clearTimers() }

  render(){

    let wrapperClass, pillClass

    if(this.props.isMobile){
      if(this.props.orientation === "landscape" && window.innerWidth < 1024) {
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

    const countdown =
      <>
        <div className={ this.state.showCountdown ? wrapperClass : "blank" }>
          <div className={ this.state.showCountdown ? pillClass : "blank" }>
            <CountdownHeader
              isMobile={ this.props.isMobile }
              initDismount={ this.state.initDismount }
              showHeader={ this.state.showHeader }
              orientation={ this.props.orientation }
            />
            <CountdownTimer
              isMobile={ this.props.isMobile }
              time={ this.state.time }
              initDismount={ this.state.initDismount }
              showTimer={ this.state.showTimer }
              orientation={ this.props.orientation }
            />
            <CountdownTutorial
              isMobile={ this.props.isMobile }
              initDismount={ this.state.initDismount }
              showTutorial={ this.state.showTutorial }
              orientation={ this.props.orientation }
            />
          </div>
        </div>
        { this.state.showFooter ?
          <FooterContainer
            initDismount={ this.state.initDismount }
            isMobile={ this.props.isMobile }
            orientation={ this.props.orientation }
            showFooter={ this.state.showFooter }
          />
        :
          <></>
        }
      </>

    return(
      <>
        { this.state.showCountdown ?
          countdown
        :
          <GameContainer
            getPlayer={ this.props.getPlayer }
            history={ this.props.history }
            isMobile={ this.props.isMobile }
            orientation={ this.props.orientation }
          />
        }
      </>
    )
  }
}