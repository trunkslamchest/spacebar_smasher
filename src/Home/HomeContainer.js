import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/actionIndex'

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

class HomeContainer extends React.Component {

  state = {
    mounted: false,
    onDismount: false
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Home'

    this.props.onHideFooter()
    this.props.onHideWrapper()
    this.props.onExitDismount()
    this.onMount()

    if(this.props.scoreboard.allScores.length === 0){
      scoreboardFunctions('get', fetch.get)
      .then(resObj => {
        this.props.onGetScoreboard(Object.entries(resObj.players))
      })
    }
  }

  componentDidUpdate(){
    if (!this.state.mounted && this.props.scoreboard.allScores.length > 0) this.setState({ mounted: true })
    if (!this.state.onDismount && this.props.ui.initDismount) this.onDismount()
  }

  onMount = () => {
    this.props.onShowFooter()
    this.props.onShowWrapper()
  }

  onClickStartButton = (event) => {
    this.props.onClearScore()
    this.props.onInitDismount()
    this.startCountdownTimeout = setTimeout(() => {
      this.props.onExitDismount()
      this.props.history.push( routes.game )
    }, 750 )
  }

  onDismount = () => {
    this.setState({ onDismount: true })

    this.onDismountTimeout = setTimeout(() => {
      this.props.onHideFooter()
      this.props.onHideWrapper()
    }, 250)
  }

  componentWillUnmount(){
    clearTimeout(this.startCountdownTimeout)
    clearTimeout(this.onDismountTimeout)
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
        { this.props.ui.showWrapper ?
          <div className={ wrapperClass }>
            <HomeHeader
              onClickStartButton={ this.onClickStartButton }
            />
            <ScoreboardContainer
              mounted={ this.state.mounted }
            />
          </div>
        :
          <></>
        }
        { this.props.ui.showFooter ?
          <FooterContainer />
        :
          <></>
        }
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
    onShowFooter: () => dispatch(actions.showFooter()),
    onHideFooter: () => dispatch(actions.hideFooter()),
    onShowWrapper: () => dispatch(actions.showWrapper()),
    onHideWrapper: () => dispatch(actions.hideWrapper()),
    onInitDismount: () => dispatch(actions.initDismount()),
    onExitDismount: () => dispatch(actions.exitDismount()),
    onGetScoreboard: (scoreboard) => dispatch(actions.getScoreboard(scoreboard)),
    onClearScore: () => dispatch(actions.clearScore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
