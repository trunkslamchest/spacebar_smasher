import React from 'react'

import { connect } from 'react-redux'

import { postGameButtonsContainer, postGameButton } from '../../PostGameFunctions/classSwitch'

import PostGameButton from '../PostGameButton/PostGameButton'

import './PostGameDesktopButtonsContainer.css'
import './PostGameDesktopButtonsContainerOnmount.css'
import './PostGameDesktopButtonsContainerDismount.css'

import './PostGameMobileButtonsContainerOnmount.css'
import './PostGameMobileButtonsContainerDismount.css'
import './PostGameMobileButtonsContainerLandscape.css'
import './PostGameMobileButtonsContainerPortrait.css'

const PostGameButtonsContainer = (props) => {

  return(
    <div className={ postGameButtonsContainer(props).buttonsContainer }>
    { props.scoreboard.allScores.length ?
      <>
        <PostGameButton
          classSwitch={ postGameButton(props).mainMenuButton }
          name={ "main_menu_button" }
          nav={ "main_menu" }
          onDismount={ props.onDismount }
        >
          MAIN MENU
        </PostGameButton>
        <PostGameButton
          classSwitch={ postGameButton(props).playAgainButton  }
          name={ "play_again_button" }
          nav={ "game" }
          onDismount={ props.onDismount }
        >
          PLAY AGAIN
        </PostGameButton>
      </>
    :
      <>
        <PostGameButton
          classSwitch={ postGameButton(props).mainMenuButtonDisabled }
          name={ "disabled_main_menu_button" }
        >
          <span />
        </PostGameButton>
        <PostGameButton
          classSwitch={ postGameButton(props).playAgainButtonDisabled }
          name={ "disabled_play_again_button" }
        >
          <span />
        </PostGameButton>
      </>
    }
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    scoreboard: state.scoreboard,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(PostGameButtonsContainer)
