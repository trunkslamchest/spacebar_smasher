import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/actionIndex'

import { fetch, routes } from '../utility/paths'
import scoreboardFunctions from '../utility/scoreboardFunctions'

import Wrapper from '../UI/Wrapper/Wrapper'

import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'

import './PostGameDesktopContainer.css'
import './PostGameDesktopOnmount.css'
import './PostGameDesktopDismount.css'

import './PostGameMobileContainerLandscape.css'
import './PostGameMobileContainerPortrait.css'
import './PostGameMobileOnmount.css'
import './PostGameMobileDismount.css'

const PostGameContainer = (props) => {

  const { onWrapper, onFooter, onGetScoreboard, scoreboard } = props

  useEffect(() => {
    document.title = 'Spacebar Smasher | Scoreboard'
    // document.body.scrollTop = 0

    onWrapper(true)
    onFooter(true)

    if(scoreboard.allScores.length === 0){
      scoreboardFunctions('get', fetch.get)
      .then(resObj => {
        onGetScoreboard(Object.entries(resObj.players))
      })
    }
  }, [onWrapper, onFooter, onGetScoreboard, scoreboard])

  const onDismount = (event) => {
    setTimeout(() => {
      props.onInitDismount(true)
    }, 125)

    setTimeout(() => {
      onWrapper(false)
      onFooter(false)
    }, 500)

    if (event.target.attributes.nav.value === 'game')  {
      setTimeout(() => {
        props.onInitDismount(false)
        props.onClearScore()
        props.onPostGame(false)
        props.history.push( routes.countdown )
      }, 750 )
    }
    else setTimeout(() => {
      props.onInitDismount(false)
      props.onPostGame(false)
      props.history.push( routes.home )
    }, 750 )
  }

  let wrapperClass, buttonsContainerClass, mainMenuButtonClass, playAgainButtonClass

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) {
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
      if(props.ui.initDismount) {
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
    if(props.ui.initDismount) {
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
    <Wrapper divClass={ wrapperClass }>
      <ScoreboardContainer />
      <div className={ buttonsContainerClass }>
        <button
          nav="main_menu"
          name="main_menu_button"
          className={ mainMenuButtonClass }
          onClick={ onDismount }
        >
          MAIN MENU
        </button>
        <button
          nav="game"
          name="play_again_button"
          className={ playAgainButtonClass }
          onClick={ onDismount }
        >
          PLAY AGAIN
        </button>
      </div>
    </Wrapper>
    )
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