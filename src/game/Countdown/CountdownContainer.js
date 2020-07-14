import React from 'react'

import Footer from '../../UI/Footer/Footer'

import CountdownHeader from './CountdownComponents/CountdownHeader'
import CountdownTimer from './CountdownComponents/CountdownTimer'
import CountdownTutorial from './CountdownComponents/CountdownTutorial'

import GameContainer from '../GameContainer.js'

import './CountdownContainer.css'
import './CountdownDismount.css'

export default class CountdownContainer extends React.Component {

  state = {
    time: 1,
    showCountdown: true,
    showHeader: false,
    showTimer: false,
    showGo: false,
    showTutorial: false,
    initGame: false,
    initDismount: false
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Countdown'
    this.startTimer = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 1000)}, 1000)
    this.headerTimeout = setTimeout(() => { this.setState({ showHeader: true })}, 250)
    this.timerTimeout = setTimeout(() => { this.setState({ showTimer: true })}, 500)
    this.tutorialTimeout = setTimeout(() => { this.setState({ showTutorial: true })}, 500)
  }

  componentDidUpdate(){
    if(this.state.time === 0 && !this.state.initGame) this.startGame()
    if(this.state.initDismount) this.onDismount()
  }

  startGame = () => {
    this.initGameTimeout = setTimeout(() => { this.setState({ initGame: true, showCountdown: false})}, 1000)
    this.initDismountTimeout = setTimeout(() => { this.setState({ initDismount: true })}, 750)
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
    clearTimeout(this.headerTimeout)
    clearTimeout(this.timerTimeout)
    clearTimeout(this.tutorialTimeout)
    clearTimeout(this.initGameTimeout)
    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.clearTimersTimeout)
  }

  componentWillUnmount(){ this.clearTimers() }

  render(){

    const countdown =
      <>
        <div className="countdown_wrapper">
          <div className='countdown_pill'>
            <CountdownHeader
              showHeader={ this.state.showHeader }
              initDismount={ this.state.initDismount }
            />
            <CountdownTimer
              time={ this.state.time }
              showTimer={ this.state.showTimer }
              initDismount={ this.state.initDismount }
            />
            <CountdownTutorial
              showTutorial={ this.state.showTutorial }
              initDismount={ this.state.initDismount }
            />
          </div>
        </div>
        <Footer
          initDismount={ this.state.initDismount }
        />
      </>

    return(
      <>
        { this.state.showCountdown ?
          countdown
        :
          <GameContainer
            history={ this.props.history }
            getPlayer={ this.props.getPlayer }
            isMobile={ this.props.isMobile }
          />
        }
      </>
    )
  }
}