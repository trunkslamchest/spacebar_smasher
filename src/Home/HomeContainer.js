import React from 'react'

import { fetch, routes } from '../utility/paths'
import scoreboardFunctions from '../utility/scoreboardFunctions'

import HomeHeader from './HomeHeader/HomeHeader'
import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'
import FooterContainer from '../UI/Footer/FooterContainer'

import './HomeDesktopContainer.css'
import './HomeDesktopDismount.css'

import './HomeMobileContainerLandscape.css'
import './HomeMobileContainerPortrait.css'
import './HomeMobileDismount.css'

export default class HomeContainer extends React.Component {

  state = {
    initDismount: false,
    isPostGame: false,
    mounted: false,
    onDismount: false,
    scoreboard: [],
    showFooter: false,
    showWrapper: false
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Home'
    scoreboardFunctions('get', fetch.get)
    .then(resObj => { this.setState({ scoreboard: Object.entries(resObj.players) }, this.onMount()) })
  }

  componentDidUpdate(){
    if (!this.state.mounted && this.state.scoreboard.length > 0) this.setState({ mounted: true })
    if (!this.state.onDismount && this.state.initDismount) this.onDismount()
  }

  onMount = () => {
    this.setState({
      showWrapper: true,
      showFooter: true
    })
  }

  onClickStartButton = (event) => {
    this.setState({ initDismount: true })
    this.startCountdownTimeout = setTimeout(() => { this.props.history.push( routes.game ) }, 750 )
  }

  onDismount = () => {
    this.setState({ onDismount: true })

    this.onDismountTimeout = setTimeout(() => {
      this.setState({
        showWrapper: false,
        showFooter: false
      })
    }, 250)
  }

  componentWillUnmount(){
    clearTimeout(this.startCountdownTimeout)
    clearTimeout(this.onDismountTimeout)
  }

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
        { this.state.showWrapper ?
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
        :
          <></>
        }
        { this.state.showFooter ?
          <FooterContainer
            initDismount={ this.state.initDismount }
            isMobile={ this.props.isMobile }
            orientation={ this.props.orientation }
          />
        :
          <></>
        }
      </>
    )
  }
}