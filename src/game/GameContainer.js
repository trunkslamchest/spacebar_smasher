import React from 'react'

import GameDesktop from './GameDesktop'
import GameMobileContainer from './GameMobile/GameMobileContainer'


import SubmitScore from './SubmitScore.js'

import './GameContainer.css'

export default class Game extends React.Component {

  state = {
    display: 'game',
    time: (3.00).toFixed(2),
    timeMark: (3.00).toFixed(2),
    count: 0,
    avgPress: 0,
    rank: "SUPER BABY FINGERS",
    power: 0,
    showTimer: false,
    startTimer: false,
    showCounter: false,
    showRank: false,
    showPower: false,
    showMobileSmashButton: false,
    spacebar_pressed: false,
    updated_rank: false,
    initDismount: false,
    dismounted: false
  }

  constructor(props) {
    super(props);
    this.spacebarDown = this.spacebarDown.bind(this);
    this.spacebarUp = this.spacebarUp.bind(this);
  }

  componentDidMount(){ this.startGame() }

  startGame = () => {
    this.spacebarDownListener = setTimeout(() => { document.addEventListener('keydown', this.spacebarDown) }, 1000)
    this.spacebarUpListener = setTimeout(() => { document.addEventListener('keyup', this.spacebarUp) }, 1000)

    this.timerTimeout = setTimeout(() => { this.setState({ showTimer: true })}, 250)
    this.startTimer = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 10)}, 1000)
    this.counterTimeout = setTimeout(() => { this.setState({ showCounter: true })}, 250)
    this.rankTimeout = setTimeout(() => { this.setState({ showRank: true })}, 250)
    this.powerTimeout = setTimeout(() => { this.setState({ showPower: true })}, 250)
    this.startPower = setTimeout(() => { this.powerInterval = setInterval(this.powerFunctions, 25)}, 1000)

    if(this.props.isMobile) this.mobileSmashButtonTimeout = setTimeout(() => { this.setState({ showMobileSmashButton: true })}, 250)

  }

  spacebarDown(event){
    event.preventDefault()
    if(event.keyCode === 32) {
      this.setState({
        spacebar_pressed: true,
        count: this.state.count + 1,
        power: this.state.power + 0.025,
       timeMark: this.state.time
      }, document.removeEventListener('keydown', this.spacebarDown))
    }

    this.getRank()

  }

  spacebarUp(){
    let diff = this.state.timeMark - this.state.time
    let avg = (diff + this.state.avgPress) / 2

    this.setState({
      spacebar_pressed: false,
      avgPress: avg
    }, document.addEventListener('keydown', this.spacebarDown))

    if( this.state.avgPress < 0.01 && this.state.time < 28.00 ){
      this.setState({
        time: 0.0,
        count: 0,
        rank: "CHEATER",
        power: 0,
        spacebar_pressed: false,
        updated_rank: false,
        mounted: false,
        initDismount: false,
        dismounted: false
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
    else this.setState({ power: this.state.power - 0.003 })

    if (this.state.time === 0) this.setState({ power: this.state.power }, clearInterval(this.powerInterval))
  }

  onSmash = () => {
    this.setState({
      count: this.state.count + 1,
      power: this.state.power + 0.025
    })
  }

  resetGame = () => {
    this.setState({
      display: 'game',
      time: (3.00).toFixed(2),
      timeMark: (3.00).toFixed(2),
      count: 0,
      rank: "SUPER BABY FINGERS",
      power: 0,
      spacebar_pressed: false,
      updated_rank: false,
      mounted: false,
      initDismount: false,
      dismounted: false
    }, this.startGame())
  }

  clearTimers = () => {
    clearInterval(this.powerInterval)
    clearInterval(this.startTimer)
    clearInterval(this.timerInterval)
    clearTimeout(this.counterTimeout)
    clearTimeout(this.powerTimeout)
    clearTimeout(this.rankTimeout)
    clearTimeout(this.timerTimeout)
    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.dismountTimeout)

    // document.removeEventListener('keydown', this.spacebarDown)
    // document.removeEventListener('keyup', this.spacebarUp)
  }

  onDismount = () => {
    document.removeEventListener('keydown', this.spacebarDown)
    document.removeEventListener('keyup', this.spacebarUp)

    this.initDismountTimeout = setTimeout(() => { this.setState({ initDismount: true })}, 500)
    this.dismountedTimeout = setTimeout(() => { this.setState({ dismounted: true, display: 'submit_score' })}, 750)
    this.clearTimersTimeout = setTimeout(() => { this.clearTimers() }, 1000)
  }

  componentWillUnmount(){ this.clearTimers() }

  render(){

    const blank = <></>

    let game

    if(this.props.isMobile){
      game = <GameMobileContainer
              time={ this.state.time }
              count={ this.state.count }
              rank={ this.state.rank }
              power={ this.state.power }
              onSmash={ this.onSmash }
              showTimer={ this.state.showTimer }
              showCounter={ this.state.showCounter }
              showRank={ this.state.showRank }
              showPower={ this.state.showPower }
              showMobileSmashButton={ this.state.showMobileSmashButton }
              initDismount={ this.state.initDismount }
            />
    } else {
      game = <GameDesktop
              time={ this.state.time }
              count={ this.state.count }
              rank={ this.state.rank }
              power={ this.state.power }
              showTimer={ this.state.showTimer }
              showCounter={ this.state.showCounter }
              showRank={ this.state.showRank }
              showPower={ this.state.showPower }
              initDismount={ this.state.initDismount }
            />
    }

    return(
      <>
        {
          (() => {
            switch(this.state.display) {
              case 'game': return game;
              case 'submit_score': return <SubmitScore
                              resetGame={ this.resetGame }
                              getPlayer={ this.props.getPlayer }
                              count={ this.state.count }
                              rank={ this.state.rank }
                              power={ (this.state.power).toFixed(5) }
                            />;
              default: return blank;
            }
          })()
        }
      </>
    )
  }
}