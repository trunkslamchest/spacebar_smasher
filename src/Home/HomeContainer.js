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
    initDismount: false,
    isPostGame: false,
    mounted: false,
    onDismount: false,
    scoreboard: [],
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Home'

    this.props.onHideFooter()
    this.props.onHideWrapper()

    scoreboardFunctions('get', fetch.get)
    .then(resObj => { this.setState({ scoreboard: Object.entries(resObj.players) }, this.onMount()) })
  }

  componentDidUpdate(){
    if (!this.state.mounted && this.state.scoreboard.length > 0) this.setState({ mounted: true })
    if (!this.state.onDismount && this.state.initDismount) this.onDismount()
  }

  onMount = () => {
    this.props.onShowFooter()
    this.props.onShowWrapper()
  }

  onClickStartButton = (event) => {
    this.props.onResetPlayer()
    this.setState({ initDismount: true })
    this.startCountdownTimeout = setTimeout(() => { this.props.history.push( routes.game ) }, 750 )
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

    if(this.props.device === "mobile"){
      if(this.props.orientation === "landscape") {
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
        { this.props.ui.showWrapper ?
          <div className={ wrapperClass }>
            <HomeHeader
              initDismount={ this.state.initDismount }
              onClickStartButton={ this.onClickStartButton }
            />
            <ScoreboardContainer
              initDismount={ this.state.initDismount }
              isPostGame={ this.state.isPostGame }
              mounted={ this.state.mounted }
              scoreboard={ this.state.scoreboard }
            />
          </div>
        :
          <></>
        }
        { this.props.ui.showFooter ?
          <FooterContainer
            initDismount={ this.state.initDismount }
          />
        :
          <></>
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    device: state.detect.device,
    orientation: state.detect.orientation,
    player: state.player.name,
    ui: state.ui
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onResetPlayer: () => dispatch(actions.resetPlayer()),
    onShowFooter: () => dispatch(actions.showFooter()),
    onHideFooter: () => dispatch(actions.hideFooter()),
    onShowWrapper: () => dispatch(actions.showWrapper()),
    onHideWrapper: () => dispatch(actions.hideWrapper())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
