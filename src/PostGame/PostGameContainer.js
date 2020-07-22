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
    isPostGame: true,
    scoreboard: []
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Scoreboard'
    // document.body.scrollTop = 0

    this.props.onHideFooter()
    this.props.onHideWrapper()
    this.onMount()

    if(this.props.scoreboard.allScores.length === 0){
      scoreboardFunctions('get', fetch.get)
      .then(resObj => {
        // this.setState({ scoreboard: Object.entries(resObj.players) })
        this.props.onGetScoreboard(Object.entries(resObj.players))
      })
    }
  }

  componentDidUpdate(){
    if (!this.state.mounted && this.props.scoreboard.allScores.length > 0) this.setState({ mounted: true })
  }

  onMount = () => {
    this.startPostGameTimeout = setTimeout(() => {
      this.props.onShowFooter()
      this.props.onShowWrapper()
    }, 500)
  }

  onClickButtonFunctions = (event) => {
    let buttonNav = event.target.attributes.nav.value

    this.props.onInitDismount()

    this.onDismountTimeout = setTimeout(() => {
      this.props.onHideFooter()
      this.props.onHideWrapper()
    }, 250)

    if (buttonNav === 'game')  {
      this.resetTimeout = setTimeout(() => {
        this.props.onExitDismount()
        this.props.onClearScore()
        this.props.history.push( routes.game )
      }, 500 )
    }
    else this.resetTimeout = setTimeout(() => {
      this.props.onExitDismount()
      this.props.history.push( routes.home )
    }, 500 )
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
        if(this.props.ui.initDismount) {
          buttonsContainerClass = "dismount_post_game_mobile_buttons_container_landscape"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_landscape"
          playAgainButtonClass = "post_game_mobile_play_again_button_landscape"
        } else {
          buttonsContainerClass = "post_game_mobile_buttons_container_landscape"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_landscape"
          playAgainButtonClass = "post_game_mobile_play_again_button_landscape"
        }
      } else {
        if(this.props.ui.initDismount) {
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
      if(this.props.ui.initDismount) {
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
              isPostGame={ this.state.isPostGame }
              mounted={ this.state.mounted }
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
          <FooterContainer />
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
    ui: state.ui,
    scoreboard: state.scoreboard
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

export default connect(mapStateToProps, mapDispatchToProps)(PostGameContainer)