import React from 'react'

import { fetch, routes } from '../utility/paths'
import scoreboardFunctions from '../utility/scoreboardFunctions'

import HomeHeader from './HomeHeader/HomeHeader'
import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'
import Footer from '../UI/Footer/Footer'

import './HomeDesktopContainer.css'
import './HomeDesktopDismount.css'

import './HomeMobileContainerLandscape.css'
import './HomeMobileContainerPortrait.css'
import './HomeMobileDismount.css'

export default class HomeContainer extends React.Component {

  state = {
    scoreboard: [],
    mounted: false,
    initDismount: false,
    isPostGame: false
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Home'
    scoreboardFunctions('get', fetch.get)
    .then(resObj => { this.setState({ scoreboard: Object.entries(resObj.players) }) })
  }

  componentDidUpdate(){
    if (!this.state.mounted && this.state.scoreboard.length > 0) this.setState({ mounted: true })
    if (this.state.initDismount) this.onDismount()
  }

  onClickStartButton = (event) => {
    this.setState({ initDismount: true})
    this.startGameTimeout = setTimeout(() => { this.props.history.push( routes.game ) }, 500 )
  }

  onDismount = () => { this.clearTimersTimeout = setTimeout(() => { this.clearTimers() }, 800) }

  clearTimers = () => {
    clearTimeout(this.startGameTimeout)
    clearTimeout(this.clearTimersTimeout)
  }

  componentWillUnmount(){ this.clearTimers() }

  render(){

  let wrapperClass

  if(this.props.isMobile){
    if(this.props.orientation === "landscape" && window.innerWidth < 1024) {
      if(this.props.initDismount) {
        wrapperClass = "dismount_home_mobile_wrapper_landscape"
      } else {
        wrapperClass = "home_mobile_wrapper_landscape"
      }
    } else {
      if(this.props.initDismount) {
        wrapperClass = "dismount_home_mobile_wrapper_portrait"
      } else {
        wrapperClass = "home_mobile_wrapper_portrait"
      }
    }
  } else {
    if(this.props.initDismount) {
      wrapperClass = "dismount_home_desktop_wrapper"
    } else {
      wrapperClass = "home_desktop_wrapper"
    }
  }

    return(
      <>
        <div className={ wrapperClass }>
          <HomeHeader
            initDismount={ this.state.initDismount }
            isMobile={ this.props.isMobile }
            onClickStartButton={ this.onClickStartButton }
            orientation={ this.props.orientation }
          />
          <ScoreboardContainer
            initDismount={ this.state.initDismount }
            isMobile={ this.props.isMobile }
            isPostGame={ this.state.isPostGame }
            mounted={ this.state.mounted }
            orientation={ this.props.orientation }
            scoreboard={ this.state.scoreboard }
            submittedPlayer={ this.props.player }
          />
        </div>
        <Footer
          initDismount={ this.state.initDismount }
        />
      </>
    )
  }
}