import React from 'react'

import { connect } from 'react-redux'
import * as actions from '../store/actions/actionIndex'

import { routes } from '../utility/paths'
import { countdownContainer } from './CountdownFunctions/classSwitch'

import Wrapper from '../UI/Wrapper/Wrapper'

import CountdownHeader from './CountdownComponents/CountdownHeader/CountdownHeader'
import CountdownTimer from './CountdownComponents/CountdownTimer/CountdownTimer'
import CountdownTutorial from './CountdownComponents/CountdownTutorial/CountdownTutorial'

import './CountdownContainer.scss'

class CountdownContainer extends React.Component {

  state = { time: 5 }

  componentDidMount(){
    if(this.props.scoreboard.allScores.length === 0) this.props.history.push( routes.home )
    else {
      document.title = 'Spacebar Smasher | Countdown'
      this.onMount()
    }
  }

  onMount = () => {
    this.onMountTimeout = setTimeout(() => {
      this.props.onClearScore()
      this.props.onFooter(false)
      this.props.onWrapper(true)
    }, 125)

    this.startTimerTimeout = setTimeout(() => { this.startTimerInterval = setInterval( this.timerFunctions, 1000 ) }, 1000)
  }

  onDismount = () => {
    this.initDismountTimeout = setTimeout(() => { this.props.onInitDismount(true) }, 125)
    this.onDismountTimeout = setTimeout(() => { this.props.onWrapper(false) }, 250)
    this.exitDismountTimeout = setTimeout(() => {
      this.props.onInitDismount(false)
      this.props.history.push( routes.game )
    }, 500)
  }

  timerFunctions = () => {
    if (this.state.time <= 0 || this.state.time === 0) {
      // this.setState({ time: 0 })
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
    return(
      <Wrapper divClass={ countdownContainer(this.props).wrapper }>
        <div className={ countdownContainer(this.props).pill }>
          <CountdownHeader />
          <CountdownTimer time={ this.state.time } />
          <CountdownTutorial />
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    scoreboard: state.scoreboard,
    ui: state.ui
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onInitDismount: (bool) => dispatch(actions.initDismount(bool)),
    onWrapper: (bool) => dispatch(actions.wrapper(bool)),
    onFooter: (bool) => dispatch(actions.footer(bool)),
    onClearScore: () => dispatch(actions.clearScore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownContainer)