import React from 'react'

import { connect } from 'react-redux'
import * as actions from '../store/actions/actionIndex'

import { routes } from '../utility/paths'
import getTime from '../utility/getTime'
import getRank from './GameFunctions/getRank'
import { gameContainer } from './GameFunctions/classSwitch'

import Wrapper from '../UI/Wrapper/Wrapper'

import GameTimer from './GameComponents/GameTimer/GameTimer'
import GameCounter from './GameComponents/GameCounter/GameCounter'
import GameRank from './GameComponents/GameRank/GameRank'
import GamePower from './GameComponents/GamePower/GamePower'
import GameMobileSmashButton from './GameComponents/GameMobileSmashButton/GameMobileSmashButton'

import './GameContainer.scss'
import './GameContainerAnimation.scss'

class GameContainer extends React.Component {

  state = {
    avgPress: 1,
    count: 0,
    power: 0,
    powerRaw: 0,
    rank: "SUPER BABY FINGERS",
    time: (30.00).toFixed(2),
    timeMark: (30.00).toFixed(2),
  }

  constructor(props) {
    super(props);
    this.spacebarDown = this.spacebarDown.bind(this);
    this.spacebarUp = this.spacebarUp.bind(this);
  }

  componentDidMount(){
    if(this.props.scoreboard.allScores.length === 0) this.props.history.push( routes.home )
    else {
      document.title = 'Spacebar Smasher | Game'
      this.onMount()
    }
  }

  onMount = () => {
    this.spacebarDownListener = setTimeout(() => { document.addEventListener('keydown', this.spacebarDown) }, 1000)
    this.spacebarUpListener = setTimeout(() => { document.addEventListener('keyup', this.spacebarUp) }, 1000)

    this.startTimerTimeout = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 10)}, 1000)
    this.startPowerTimeout = setTimeout(() => { this.powerInterval = setInterval(this.powerFunctions, 25)}, 1000)

    this.onMountTimeout = setTimeout(() => {
      this.props.onFooter(false)
      this.props.onWrapper(true)
    }, 125)
  }

  spacebarDown(event){
    if(this.props.detect.device === "computer"){
      if((event.keyCode === 32 || event.which === 32)) {
        event.preventDefault()
        this.setState({
          count: this.state.count + 1,
          power: ((this.state.powerRaw) / 4).toFixed(3) * 100,
          powerRaw: this.state.powerRaw + 0.025,
          timeMark: this.state.time,
          rank: getRank(this.state.count)
        }, document.removeEventListener('keydown', this.spacebarDown))
      }
    }
  }

  spacebarUp(event){
    if(this.props.detect.device === "computer") document.addEventListener('keydown', this.spacebarDown)

    if((event.keyCode === 32 || event.which === 32)) {
      let pressAvg = ((this.state.timeMark - this.state.time) + this.state.avgPress) / 2
      this.setState({ avgPress: pressAvg })
    }

    if( (this.state.avgPress < 0.01 && this.state.time < 28.00) || this.state.count > 400){
      document.removeEventListener('keydown', this.spacebarDown)
      document.removeEventListener('keyup', this.spacebarUp)

      this.setState({
        count: 0,
        power: 0,
        powerRaw: 0,
        rank: "CHEATER",
        time: 0.00,
      }, this.onDismount())
    }
  }

  timerFunctions = () => {
    if (this.state.time <= 0 || this.state.time === 0) {
      this.setState({ time: 0 })
      this.props.onStoreScore({
        name: '',
        avgPress: this.state.avgPress,
        score: this.state.count,
        power_level: this.state.powerRaw,
        power_percent: this.state.power,
        rank: this.state.rank,
        timestamp: getTime('fullDate')
      })
      this.onDismount()
      clearInterval(this.timerInterval)
    }
    else this.setState({ time: (this.state.time - 0.01).toFixed(2) })
  }

  powerFunctions = () => {
    if (this.state.time === 0) this.setState({ power: this.state.power }, clearInterval(this.powerInterval))
    if (this.state.power <= 0) this.setState({ power: 0 })
    else this.setState({
      power: ((this.state.powerRaw - 0.003) / 4).toFixed(3) * 100,
      powerRaw: this.state.powerRaw - 0.003
    })
  }

  onMobileSmash = (event) => {
    if(this.state.time > 0 && this.state.time < 30) {
      if(event.nativeEvent.detail) {
        this.setState({
          count: this.state.count + 1,
          power: ((this.state.powerRaw) / 4).toFixed(3) * 100,
          powerRaw: this.state.powerRaw + 0.025,
          rank: getRank(this.state.count)
        })
      }
    }
  }

  onDismount = () => {
    document.removeEventListener('keydown', this.spacebarDown)
    document.removeEventListener('keyup', this.spacebarUp)

    this.initDismountTimeout = setTimeout(() => { this.props.onInitDismount(true) }, 500)
    this.onDismountTimeout = setTimeout(() => { this.props.onWrapper(false) }, 750)
    this.exitDismountTimeout = setTimeout(() => {
      this.props.onInitDismount(false)
      this.props.history.push( routes.submitScore )
    }, 1000)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.spacebarDown)
    document.removeEventListener('keyup', this.spacebarUp)
    clearInterval(this.timerInterval)
    clearInterval(this.powerInterval)
    clearTimeout(this.startTimerTimeout)
    clearTimeout(this.startPowerTimeout)
    clearTimeout(this.spacebarUpListener)
    clearTimeout(this.spacebarDownListener)
    clearTimeout(this.onMountTimeout)
    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.onDismountTimeout)
    clearTimeout(this.exitDismountTimeout)
  }

  render(){

    return(
      <Wrapper divClass={ gameContainer(this.props).wrapper }>
        <div className={ gameContainer(this.props).pill }>
          <GameTimer time={ this.state.time } />
          <div className={ gameContainer(this.props).row }>
            <GameCounter count={ this.state.count } />
            <div className={ gameContainer(this.props).subRow }>
              <GameRank rank={ this.state.rank } />
              <GamePower power={ this.state.power } powerRaw={ this.state.powerRaw } />
            </div>
          </div>
          { this.props.detect.device === "mobile" ?
            <GameMobileSmashButton onMobileSmash={this.onMobileSmash} />
          :
            null
          }
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
    onStoreScore: (score) => dispatch(actions.storeScore(score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)