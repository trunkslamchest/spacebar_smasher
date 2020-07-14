import React from 'react'

import Footer from '../UI/Footer/Footer'

import GameDesktopContainer from './GameDesktop/GameDesktopContainer'
import GameMobileContainer from './GameMobile/GameMobileContainer'

import SubmitScoreContainer from './SubmitScore/SubmitScoreContainer'

import './GameContainer.css'
import './GameDismount.css'

export default class Game extends React.Component {

  state = {
    time: (30.00).toFixed(2),
    timeMark: (30.00).toFixed(2),
    count: 0,
    avgPress: 1,
    rank: "SUPER BABY FINGERS",
    power: 0,
    powerRaw: 0,
    showGame: true,
    showTimer: false,
    startTimer: false,
    showCounter: false,
    showRank: false,
    showPower: false,
    showFooter: false,
    showMobileSmashButton: false,
    initDismount: false
  }

  constructor(props) {
    super(props);
    this.spacebarDown = this.spacebarDown.bind(this);
    this.spacebarUp = this.spacebarUp.bind(this);
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Game'
    this.startGame()
  }

  startGame = () => {
    this.spacebarDownListener = setTimeout(() => { document.addEventListener('keydown', this.spacebarDown) }, 1000)
    this.spacebarUpListener = setTimeout(() => { document.addEventListener('keyup', this.spacebarUp) }, 1000)

    this.componentTimeout = setTimeout(() => {
      this.setState({
        showTimer: true,
        showCounter: true,
        showRank: true,
        showPower: true,
        showFooter: true
      })
    }, 250)

    // this.timerTimeout = setTimeout(() => { this.setState({ showTimer: true })}, 250)
    // this.counterTimeout = setTimeout(() => { this.setState({ showCounter: true })}, 250)
    // this.rankTimeout = setTimeout(() => { this.setState({ showRank: true })}, 250)
    // this.powerTimeout = setTimeout(() => { this.setState({ showPower: true })}, 250)
    this.startTimer = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 10)}, 1000)
    this.startPower = setTimeout(() => { this.powerInterval = setInterval(this.powerFunctions, 25)}, 1000)

    if(this.props.isMobile) this.mobileSmashButtonTimeout = setTimeout(() => { this.setState({ showMobileSmashButton: true })}, 250)
  }

  spacebarDown(event){
    if((event.keyCode === 32 || event.which === 32)) {
      event.preventDefault()
      this.setState({
        count: this.state.count + 1,
        power: ((this.state.powerRaw) / 4).toFixed(3) * 100,
        powerRaw: this.state.powerRaw + 0.025,
        timeMark: this.state.time
      }, document.removeEventListener('keydown', this.spacebarDown))
    }


    this.getRank()
  }

  spacebarUp(event){
    document.addEventListener('keydown', this.spacebarDown)

    if((event.keyCode === 32 || event.which === 32)) {
      let pressAvg = ((this.state.timeMark - this.state.time) + this.state.avgPress) / 2
      this.setState({ avgPress: pressAvg })
    }

    if( (this.state.avgPress < 0.01 && this.state.time < 28.00) || this.state.count > 400){
      document.removeEventListener('keydown', this.spacebarDown)
      document.removeEventListener('keyup', this.spacebarUp)

      this.setState({
        time: 0.0,
        count: 0,
        rank: "CHEATER",
        power: 0,
        powerRaw: 0,
        initDismount: false
      }, this.onDismount())
    }
  }

  timerFunctions = () => {
    if (this.state.time <= 0) this.setState({ time: 0.0 }, this.onDismount())
    else this.setState({ time: (this.state.time - 0.01).toFixed(2) })
  }

  getRank = () => {
    if (this.state.count >= 0 && this.state.count < 25) this.setState({ rank: "SUPER BABY FINGERS" })
    else if (this.state.count >= 25 && this.state.count < 50) this.setState({ rank: "SLOW HANDS McOLD PERSON" })
    else if (this.state.count >= 50 && this.state.count < 75) this.setState({ rank: "CEMENT WRISTS" })
    else if (this.state.count >= 75 && this.state.count < 100) this.setState({ rank: "BIG MEATY CLAWS" })
    else if (this.state.count >= 100 && this.state.count < 125) this.setState({ rank: "HAIRY KNUCKLES" })
    else if (this.state.count >= 125 && this.state.count < 150) this.setState({ rank: "EDWARD SCISSOR HANDS" })
    else if (this.state.count >= 150 && this.state.count < 175) this.setState({ rank: "UNTRUSTABLE ALI" })
    else if (this.state.count >= 175 && this.state.count < 200) this.setState({ rank: "FURIOUS TIGER" })
    else if (this.state.count >= 200 && this.state.count < 225) this.setState({ rank: "JACKY FENG" })
    else if (this.state.count >= 225 && this.state.count < 250) this.setState({ rank: "RUSSIAN SPY" })
    else if (this.state.count >= 250 && this.state.count < 275) this.setState({ rank: "FROG" })
    else if (this.state.count >= 275 && this.state.count < 300) this.setState({ rank: "SUPER FROG" })
  }

  powerFunctions = () => {
    if (this.state.power <= 0) this.setState({ power: 0 })
    else this.setState({
      power: ((this.state.powerRaw - 0.003) / 4).toFixed(3) * 100,
      powerRaw: this.state.powerRaw - 0.003
    })
    if (this.state.time === 0) this.setState({ power: this.state.power }, clearInterval(this.powerInterval))
  }

  onSmash = () => {
    this.setState({
      count: this.state.count + 1,
      power: ((this.state.powerRaw) / 4).toFixed(3) * 100,
      powerRaw: this.state.powerRaw + 0.025,
    })
  }

  resetGame = () => {
    document.title = 'Spacebar Smasher - Game'
    this.setState({
      time: (30.00).toFixed(2),
      timeMark: (30.00).toFixed(2),
      count: 0,
      avgPress: 1,
      rank: "SUPER BABY FINGERS",
      power: 0,
      powerRaw: 0,
      showGame: true,
      showFooter: false,
      initDismount: false
    }, this.startGame())
  }

  onDismount = () => {
    document.removeEventListener('keydown', this.spacebarDown)
    document.removeEventListener('keyup', this.spacebarUp)

    this.initDismountTimeout = setTimeout(() => { this.setState({ initDismount: true })}, 500)
    this.dismountedTimeout = setTimeout(() => { this.setState({ showGame: false, showFooter: false })}, 750)
    this.clearTimersTimeout = setTimeout(() => { this.clearTimers() }, 800)
  }

  clearTimers = () => {
    document.removeEventListener('keydown', this.spacebarDown)
    document.removeEventListener('keyup', this.spacebarUp)

    clearTimeout(this.componentTimeout)

    clearTimeout(this.startTimer)
    clearInterval(this.timerInterval)
    clearTimeout(this.startPower)
    clearInterval(this.powerInterval)
    // clearTimeout(this.timerTimeout)
    // clearTimeout(this.counterTimeout)
    // clearTimeout(this.rankTimeout)
    // clearTimeout(this.powerTimeout)
    clearTimeout(this.spacebarDownListener)
    clearTimeout(this.spacebarUpListener)
    clearTimeout(this.mobileSmashButtonTimeout)
    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.dismountTimeout)
    clearTimeout(this.clearTimersTimeout)
  }

  componentWillUnmount(){ this.clearTimers() }

  render(){

    let game

    if(this.props.isMobile){
      game = <GameMobileContainer
              time={ this.state.time }
              count={ this.state.count }
              rank={ this.state.rank }
              power={ this.state.power }
              powerRaw={ this.state.powerRaw }
              onSmash={ this.onSmash }
              showTimer={ this.state.showTimer }
              showCounter={ this.state.showCounter }
              showRank={ this.state.showRank }
              showPower={ this.state.showPower }
              showMobileSmashButton={ this.state.showMobileSmashButton }
              initDismount={ this.state.initDismount }
            />
    } else {
      game = <>
        <div className="game_wrapper">
          <div className="game_pill">
            <GameDesktopContainer
              time={ this.state.time }
              count={ this.state.count }
              rank={ this.state.rank }
              power={ this.state.power }
              powerRaw={ this.state.powerRaw }
              showTimer={ this.state.showTimer }
              showCounter={ this.state.showCounter }
              showRank={ this.state.showRank }
              showPower={ this.state.showPower }
              initDismount={ this.state.initDismount }
            />
          </div>
        </div>
        { this.state.showFooter ?
          <Footer
            initDismount={ this.state.initDismount }
          />
        :
          <></>
        }
      </>
    }

    return(
      <>
        { this.state.showGame ?
          game
        :
          <SubmitScoreContainer
            history={ this.props.history }
            count={ this.state.count }
            rank={ this.state.rank }
            power={ this.state.power }
            powerRaw={ this.state.powerRaw }
            getPlayer={ this.props.getPlayer }
            resetGame={ this.resetGame }
          />
        }
      </>
    )
  }
}