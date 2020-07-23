import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/actionIndex'

import { fetch, routes } from '../utility/paths'
import scoreboardFunctions from '../utility/scoreboardFunctions'

import Wrapper from '../UI/Wrapper/Wrapper'
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

  componentDidMount(){
    document.title = 'Spacebar Smasher - Scoreboard'
    // document.body.scrollTop = 0

    this.props.onWrapper(false)
    this.props.onFooter(false)
    this.props.onPostGame(true)

    this.onMount()
  }

  onMount = () => {
    this.onMountTimeout = setTimeout(() => {
      this.props.onWrapper(true)
      this.props.onFooter(true)
    }, 125)

    if(this.props.scoreboard.allScores.length === 0){
      scoreboardFunctions('get', fetch.get)
      .then(resObj => {
        this.props.onGetScoreboard(Object.entries(resObj.players))
      })
    }
  }

  onDismount = (event) => {
    this.initDismountTimeout = setTimeout(() => {
      this.props.onInitDismount(true)
    }, 125)

    this.onDismountTimeout = setTimeout(() => {
      this.props.onWrapper(false)
      this.props.onFooter(false)
    }, 500)

    if (event.target.attributes.nav.value === 'game')  {
      this.exitDismountTimeout = setTimeout(() => {
        this.props.onInitDismount(false)
        this.props.onClearScore()
        this.props.history.push( routes.countdown )
      }, 750 )
    }
    else this.exitDismountTimeout = setTimeout(() => {
      this.props.onInitDismount(false)
      this.props.history.push( routes.home )
    }, 750 )
  }

  componentWillUnmount(){
    this.props.onPostGame(false)
    clearTimeout(this.onMountTimeout)
    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.onDismountTimeout)
    clearTimeout(this.exitDismountTimeout)
  }

  render(){
    let wrapperClass, buttonsContainerClass, mainMenuButtonClass, playAgainButtonClass

    if(this.props.detect.device === "mobile") {
      if(this.props.detect.orientation === "landscape") {
        if(this.props.ui.initDismount) {
          wrapperClass = "dismount_post_game_mobile_wrapper_landscape"
          buttonsContainerClass = "dismount_post_game_mobile_buttons_container_landscape"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_landscape"
          playAgainButtonClass = "post_game_mobile_play_again_button_landscape"
        } else {
          wrapperClass = "post_game_mobile_wrapper_landscape"
          buttonsContainerClass = "post_game_mobile_buttons_container_landscape"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_landscape"
          playAgainButtonClass = "post_game_mobile_play_again_button_landscape"
        }
      } else {
        if(this.props.ui.initDismount) {
          wrapperClass = "dismount_post_game_mobile_wrapper_portrait"
          buttonsContainerClass = "dismount_post_game_mobile_buttons_container_portrait"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_portrait"
          playAgainButtonClass = "post_game_mobile_play_again_button_portrait"
        } else {
          wrapperClass = "post_game_mobile_wrapper_portrait"
          buttonsContainerClass = "post_game_mobile_buttons_container_portrait"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_portrait"
          playAgainButtonClass = "post_game_mobile_play_again_button_portrait"
        }
      }
    } else {
      if(this.props.ui.initDismount) {
        wrapperClass = "dismount_post_game_desktop_wrapper"
        buttonsContainerClass = "dismount_post_game_desktop_buttons_container"
        mainMenuButtonClass = "post_game_desktop_main_menu_button"
        playAgainButtonClass = "post_game_desktop_play_again_button"
      } else {
        wrapperClass = "post_game_desktop_wrapper"
        buttonsContainerClass = "post_game_desktop_buttons_container"
        mainMenuButtonClass = "post_game_desktop_main_menu_button"
        playAgainButtonClass = "post_game_desktop_play_again_button"
      }
    }

    return(
      <>
        <Wrapper divClass={ wrapperClass }>
          <ScoreboardContainer />
          <div className={ buttonsContainerClass }>
            <button
              nav="main_menu"
              name="main_menu_button"
              className={ mainMenuButtonClass }
              onClick={ this.onDismount }
            >
              MAIN MENU
            </button>
            <button
              nav="game"
              name="play_again_button"
              className={ playAgainButtonClass }
              onClick={ this.onDismount }
            >
              PLAY AGAIN
            </button>
          </div>
        </Wrapper>
        <FooterContainer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
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
    onPostGame: (bool) => dispatch(actions.postGame(bool)),
    onGetScoreboard: (scoreboard) => dispatch(actions.getScoreboard(scoreboard)),
    onClearScore: () => dispatch(actions.clearScore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostGameContainer)