import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/actionIndex'

import { fetch, routes } from '../utility/paths'
import scoreboardFunctions from '../utility/scoreboardFunctions'

import FooterContainer from '../UI/Footer/FooterContainer'
import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'

import './PostGameDesktopContainer.css'
import './PostGameDesktopOnmount.css'
import './PostGameDesktopDismount.css'

import './PostGameMobileContainerLandscape.css'
import './PostGameMobileContainerPortrait.css'
import './PostGameMobileOnmount.css'
import './PostGameMobileDismount.css'

class PostGameContainer extends React.Component {

  state = {
    mounted: false,
    initDismount: false,
    isPostGame: true,
    scoreboard: []
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Scoreboard'
    // document.body.scrollTop = 0

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
    this.startPostGameTimeout = setTimeout(() => {
      this.props.onShowFooter()
      this.props.onShowWrapper()
    }, 500)
  }

  onClickButtonFunctions = (event) => {
    let buttonNav = event.target.attributes.nav.value

    this.setState({ initDismount: true })

    if (buttonNav === 'game') {
      this.props.onResetPlayer()
      this.resetTimeout = setTimeout(() => { this.props.history.push( routes.game ) }, 500 )
    }
    else this.resetTimeout = setTimeout(() => { this.props.history.push( routes.home ) }, 500 )
  }

  onDismount = () => {
    this.setState({ onDismount: true })

    this.onDismountTimeout = setTimeout(() => {
      this.props.onHideFooter()
      this.props.onHideWrapper()
    }, 250)
  }

  componentWillUnmount(){
    clearTimeout(this.startPostGameTimeout)
    clearTimeout(this.resetTimeout)
    clearTimeout(this.onDismountTimeout)
  }

  render(){
    let buttonsContainerClass, mainMenuButtonClass, playAgainButtonClass

    if(this.props.device === "mobile") {
      if(this.props.orientation === "landscape") {
        if(this.state.initDismount) {
          buttonsContainerClass = "dismount_post_game_mobile_buttons_container_landscape"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_landscape"
          playAgainButtonClass = "post_game_mobile_play_again_button_landscape"
        } else {
          buttonsContainerClass = "post_game_mobile_buttons_container_landscape"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_landscape"
          playAgainButtonClass = "post_game_mobile_play_again_button_landscape"
        }
      } else {
        if(this.state.initDismount) {
          buttonsContainerClass = "dismount_post_game_mobile_buttons_container_portrait"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_portrait"
          playAgainButtonClass = "post_game_mobile_play_again_button_portrait"
        } else {
          buttonsContainerClass = "post_game_mobile_buttons_container_portrait"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_portrait"
          playAgainButtonClass = "post_game_mobile_play_again_button_portrait"
        }
      }
    } else {
      if(this.state.initDismount) {
        buttonsContainerClass = "dismount_post_game_desktop_buttons_container"
        mainMenuButtonClass = "post_game_desktop_main_menu_button"
        playAgainButtonClass = "post_game_desktop_play_again_button"
      } else {
        buttonsContainerClass = "post_game_desktop_buttons_container"
        mainMenuButtonClass = "post_game_desktop_main_menu_button"
        playAgainButtonClass = "post_game_desktop_play_again_button"
      }
    }

    return(
      <>
        { this.props.ui.showWrapper ?
          <>
            <ScoreboardContainer
              initDismount={this.state.initDismount}
              isPostGame={ this.state.isPostGame }
              mounted={ this.state.mounted }
              scoreboard={ this.state.scoreboard }
            />
            <div className={ buttonsContainerClass }>
              <button
                nav="main_menu"
                name="main_menu_button"
                className={ mainMenuButtonClass }
                onClick={ this.onClickButtonFunctions }
              >
                MAIN MENU
              </button>
              <button
                nav="game"
                name="play_again_button"
                className={ playAgainButtonClass }
                onClick={ this.onClickButtonFunctions }
              >
                PLAY AGAIN
              </button>
            </div>
          </>
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
  return{
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

export default connect(mapStateToProps, mapDispatchToProps)(PostGameContainer)