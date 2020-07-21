import React from 'react'
import { connect } from 'react-redux'

import FooterContainer from '../UI/Footer/FooterContainer'

import GameTimer from './GameComponents/GameTimer/GameTimer'
import GameCounter from './GameComponents/GameCounter/GameCounter'
import GameRank from './GameComponents/GameRank/GameRank'
import GamePower from './GameComponents/GamePower/GamePower'
import GameMobileSmashButton from './GameComponents/GameMobileSmashButton/GameMobileSmashButton'

import SubmitScoreContainer from '../SubmitScore/SubmitScoreContainer'

import './GameDesktopContainer.css'
import './GameMobileContainerLandscape.css'
import './GameMobileContainerPortrait.css'
import './GameMobileDismount.css'
import './GameMobileOnmount.css'

class GameContainer extends React.Component {

  state = {
    avgPress: 1,
    count: 0,
    initDismount: false,
    power: 0,
    powerRaw: 0,
    rank: "SUPER BABY FINGERS",
    showFooter: false,
    showMobileSmashButton: false,
    showSubmitScore: false,
    showWrapper: false,
    startTimer: false,
    time: (3.00).toFixed(2),
    timeMark: (3.00).toFixed(2),
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

    this.startGameTimeout = setTimeout(() => {
      this.setState({
        showFooter: true,
        showMobileSmashButton: this.props.device === "mobile" ? true : false,
        showWrapper: true
      })
    }, 250)

    this.startTimer = setTimeout(() => { this.timerInterval = setInterval(this.timerFunctions, 10)}, 1000)
    this.startPower = setTimeout(() => { this.powerInterval = setInterval(this.powerFunctions, 25)}, 1000)

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

    // if( (this.state.avgPress < 0.01 && this.state.time < 28.00) || this.state.count > 400){
    //   document.removeEventListener('keydown', this.spacebarDown)
    //   document.removeEventListener('keyup', this.spacebarUp)

    //   this.setState({
    //     count: 0,
    //     initDismount: false,
    //     power: 0,
    //     powerRaw: 0,
    //     rank: "CHEATER",
    //     time: 0.00,
    //   }, this.onDismount())
    // }
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

  onSmash = (event) => {
    event.preventDefault()

    this.setState({
      count: this.state.count + 1,
      power: ((this.state.powerRaw) / 4).toFixed(3) * 100,
      powerRaw: this.state.powerRaw + 0.025,
    })

    this.getRank()
  }

  resetGame = () => {
    document.title = 'Spacebar Smasher - Game'

    this.setState({
      avgPress: 1,
      count: 0,
      initDismount: false,
      power: 0,
      powerRaw: 0,
      showFooter: false,
      showSubmitScore: false,
      rank: "SUPER BABY FINGERS",
      time: (3.00).toFixed(2),
      timeMark: (3.00).toFixed(2),
    })

    this.restartGameTimeout = setTimeout(() => { this.startGame() }, 250)
  }

  onDismount = () => {
    document.removeEventListener('keydown', this.spacebarDown)
    document.removeEventListener('keyup', this.spacebarUp)

    this.initDismountTimeout = setTimeout(() => { this.setState({ initDismount: true })}, 500)
    this.stopGameTimeout = setTimeout(() => { this.setState({ showWrapper: false, showFooter: false })}, 750)
    this.showSubmitScoreTimeout = setTimeout(() => { this.setState({ showSubmitScore: true }, this.clearTimers())}, 1000)
  }

  clearTimers = () => {
    clearInterval(this.powerInterval)
    clearInterval(this.timerInterval)

    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.mobileSmashButtonTimeout)
    clearTimeout(this.restartGameTimeout)
    clearTimeout(this.showSubmitScoreTimeout)
    clearTimeout(this.spacebarDownListener)
    clearTimeout(this.spacebarUpListener)
    clearTimeout(this.startGameTimeout)
    clearTimeout(this.startPower)
    clearTimeout(this.startTimer)
    clearTimeout(this.stopGameTimeout)
  }

  componentWillUnmount() { this.clearTimers() }

  render(){

    let wrapperClass, pillClass, rowClass1, subRowClass1

    if(this.props.device === "mobile") {
      if(this.props.orientation === 'landscape') {
        rowClass1 = 'game_mobile_landscapeR1'
        subRowClass1 = 'game_mobile_landscapeSR1'
        if(this.state.initDismount) {
            wrapperClass = "game_mobile_wrapper_landscape"
            pillClass = "dismount_game_mobile_pill_landscape"
        } else {
            wrapperClass = "game_mobile_wrapper_landscape"
            pillClass = "game_mobile_pill_landscape"
        }
      } else {
        rowClass1 = 'game_mobile_portraitR1'
        subRowClass1 = 'game_mobile_portraitSR1'
        if(this.state.initDismount) {
          wrapperClass = "game_mobile_wrapper_portrait"
          pillClass = "dismount_game_mobile_pill_portrait"
        } else {
          wrapperClass = "game_mobile_wrapper_portrait"
          pillClass = "game_mobile_pill_portrait"
        }
      }
    } else {
      wrapperClass = "game_desktop_wrapper"
      pillClass = "game_desktop_pill"
    }

    const game =
      <>
        { this.state.showWrapper ?
          <div className={ wrapperClass }>
            <div className={ pillClass }>
                <GameTimer
                  initDismount={ this.state.initDismount }
                  time={ this.state.time }
                />
              <div className={ rowClass1 }>
                <GameCounter
                  count={ this.state.count }
                  initDismount={ this.state.initDismount }
                />
                <div className={ subRowClass1 }>
                  <GameRank
                    initDismount={ this.state.initDismount }
                    rank={ this.state.rank }
                  />
                  <GamePower
                    initDismount={ this.state.initDismount }
                    power={ this.state.power }
                    powerRaw={ this.state.powerRaw }
                  />
                </div>
              </div>
            { this.props.device === "mobile" ?
                <GameMobileSmashButton
                  initDismount={this.state.initDismount}
                  onSmash={this.onSmash}
                  smashed={this.state.smashed}
                />
              :
                <></>
              }
            </div>
          </div>
        :
          <></>
        }
        { this.state.showFooter ?
          <FooterContainer
            initDismount={ this.state.initDismount }
          />
        :
          <></>
        }
      </>

    return(
      <>
        { this.state.showSubmitScore ?
          <SubmitScoreContainer
            count={ this.state.count }
            history={ this.props.history }
            power={ this.state.power }
            powerRaw={ this.state.powerRaw }
            rank={ this.state.rank }
            resetGame={ this.resetGame }
          />
        :
          game
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

export default connect(mapStateToProps)(GameContainer)