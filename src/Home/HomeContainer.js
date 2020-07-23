import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/actionIndex'

import { fetch, routes } from '../utility/paths'
import scoreboardFunctions from '../utility/scoreboardFunctions'

import Wrapper from '../UI/Wrapper/Wrapper'
import FooterContainer from '../UI/Footer/FooterContainer'

import HomeHeader from './HomeHeader/HomeHeader'
import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'

import './HomeDesktopContainer.css'
import './HomeDesktopDismount.css'

import './HomeMobileContainerLandscape.css'
import './HomeMobileContainerPortrait.css'
import './HomeMobileDismount.css'

class HomeContainer extends React.Component {

  componentDidMount(){
    document.title = 'Spacebar Smasher - Home'

    this.props.onFooter(false)
    this.props.onWrapper(false)
    this.onMount()

    if(this.props.scoreboard.allScores.length === 0){
      scoreboardFunctions('get', fetch.get)
      .then(resObj => {
        this.props.onGetScoreboard(Object.entries(resObj.players))
      })
    }
  }

  onMount = () => {
    this.onMountTimeout = setTimeout(() => {
      this.props.onFooter(true)
      this.props.onWrapper(true)
    }, 125)
  }

  onDismount = () => {
    this.initDismountTimeout = setTimeout(() => {
      this.props.onInitDismount(true)
    }, 125)

    this.onDismountTimeout = setTimeout(() => {
      this.props.onFooter(false)
      this.props.onWrapper(false)
    }, 500)

    this.exitDismountTimeout = setTimeout(() => {
      this.props.onInitDismount(false)
      this.props.onClearScore()
      this.props.history.push( routes.countdown )
    }, 750 )
  }

  componentWillUnmount(){
    clearTimeout(this.onMountTimeout)
    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.onDismountTimeout)
    clearTimeout(this.exitDismountTimeout)
  }

  render(){

    let wrapperClass

    if(this.props.detect.device === "mobile"){
      if(this.props.detect.orientation === "landscape") {
        if(this.props.ui.initDismount) {
          wrapperClass = "dismount_home_mobile_wrapper_landscape"
        } else {
          wrapperClass = "home_mobile_wrapper_landscape"
        }
      } else {
        if(this.props.ui.initDismount) {
          wrapperClass = "dismount_home_mobile_wrapper_portrait"
        } else {
          wrapperClass = "home_mobile_wrapper_portrait"
        }
      }
    } else {
      if(this.props.ui.initDismount) {
        wrapperClass = "dismount_home_desktop_wrapper"
      } else {
        wrapperClass = "home_desktop_wrapper"
      }
    }

    return(
      <>
        <Wrapper divClass={ wrapperClass }>
          <HomeHeader onClickStartButton={ this.onDismount } />
          <ScoreboardContainer />
        </Wrapper>
        <FooterContainer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
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
    onGetScoreboard: (scoreboard) => dispatch(actions.getScoreboard(scoreboard)),
    onClearScore: () => dispatch(actions.clearScore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
