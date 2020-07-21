import React from 'react'
import { connect } from 'react-redux'

import FooterContainer from 'UI/Footer/FooterContainer'

import CountdownHeader from './CountdownComponents/CountdownHeader/CountdownHeader'
import CountdownTimer from './CountdownComponents/CountdownTimer/CountdownTimer'
import CountdownTutorial from './CountdownComponents/CountdownTutorial/CountdownTutorial'

import GameContainer from 'game/GameContainer.js'

import './CountdownDesktopContainer.css'
import './CountdownMobileContainerLandscape.css'
import './CountdownMobileContainerPortrait.css'

class CountdownContainer extends React.Component {

  state = {
    initDismount: false,
    showFooter: false,
    showGame: false,
    showWrapper: false,
    startGame: false,
    time: 1,
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Countdown'

    this.startCountdown()
  }

  componentDidUpdate(){ if(this.state.time === 0 && !this.state.startGame) this.startGame() }

  startCountdown = () => {
    this.startTimer = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 1000)}, 1000)
    this.componentTimeout = setTimeout(() => { this.setState({ showFooter: true, showWrapper: true }) }, 250)
  }

  startGame = () => {
    this.setState({ startGame: true })

    this.initDismountTimeout = setTimeout(() => { this.setState({ initDismount: true })}, 500)
    this.onDismountTimeout = setTimeout(() => { this.setState({ showFooter: false, showWrapper: false }) }, 750)
    this.showGameTimeout = setTimeout(() => { this.setState({ showGame: true })}, 1000)
  }

  timerFunctions = () => {
    if (this.state.time <= 0) { this.setState({ time: 0 }, clearInterval(this.timerInterval)) }
    else this.setState({ time: (this.state.time - 1) })
  }

  componentWillUnmount(){
    clearTimeout(this.startTimer)
    clearInterval(this.timerInterval)
    clearTimeout(this.componentTimeout)
    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.onDismountTimeout)
    clearTimeout(this.startGameTimeout)
  }

  render(){

    let wrapperClass, pillClass

    if(this.props.device === "mobile") {
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
        { this.state.showWrapper ?
          <>
            <div className={ wrapperClass }>
              <div className={ pillClass }>
                <CountdownHeader
                  initDismount={ this.state.initDismount }
                />
                <CountdownTimer
                  time={ this.state.time }
                  initDismount={ this.state.initDismount }
                />
                <CountdownTutorial
                  initDismount={ this.state.initDismount }
                />
              </div>
            </div>
            { this.state.showFooter ?
              <FooterContainer
                initDismount={ this.state.initDismount }
              />
            :
              <></>
            }
          </>
        :
          <></>
        }
      </>

    return(
      <>
        { this.state.showGame ?
          <GameContainer
            getPlayer={ this.props.getPlayer }
            history={ this.props.history }
          />
        :
          countdown
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    device: state.detect.device,
    orientation: state.detect.orientation
  }
}

export default connect(mapStateToProps)(CountdownContainer)