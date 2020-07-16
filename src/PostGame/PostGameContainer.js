import React from 'react'

import { fetch, routes } from '../utility/paths'
import scoreboardFunctions from '../utility/scoreboardFunctions'

import FooterContainer from '../UI/Footer/FooterContainer'
import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'

import './PostGameDesktopContainer.css'
import './PostGameMobileContainerLandscape.css'
import './PostGameMobileContainerPortrait.css'

import './PostGameDesktopOnmount.css'
import './PostGameMobileOnmount.css'

import './PostGameDesktopDismount.css'
import './PostGameMobileDismount.css'

export default class PostGameContainer extends React.Component {

  state = {
    mounted: false,
    initDismount: false,
    isPostGame: true,
    scoreboard: [],
    showFooter: false,
    showWrapper: false
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Scoreboard'
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

  onClickButtonFunctions = (event) => {
    let buttonNav = event.target.attributes.nav.value

    this.setState({ initDismount: true })

    if (buttonNav === 'game') this.resetTimeout = setTimeout(() => { this.props.history.push( routes.game ) }, 500 )
    else this.resetTimeout = setTimeout(() => { this.props.history.push( routes.home ) }, 500 )
  }

  onDismount = () => {
    this.setState({ onDismount: true })

    this.onDismountTimeout = setTimeout(() => {
      this.setState({
        showWrapper: false,
        showFooter: false
      })
    }, 500)
  }

  componentWillUnmount(){
    clearTimeout(this.resetTimeout)
    clearTimeout(this.onDismountTimeout)
  }

  render(){

    let buttonsContainerClass, mainMenuButtonClass, playAgainButtonClass

    if(this.props.isMobile){
      if(this.props.orientation === "landscape" && window.innerWidth < 1024) {
        if(this.state.initDismount) {
          buttonsContainerClass = "post_game_mobile_buttons_container_landscape"
          mainMenuButtonClass = "dismount_post_game_mobile_main_menu_button_landscape"
          playAgainButtonClass = "dismount_post_game_mobile_play_again_button_landscape"
        } else {
          buttonsContainerClass = "post_game_mobile_buttons_container_landscape"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_landscape"
          playAgainButtonClass = "post_game_mobile_play_again_button_landscape"
        }
      } else {
        if(this.state.initDismount) {
          buttonsContainerClass = "post_game_mobile_buttons_container_portrait"
          mainMenuButtonClass = "dismount_post_game_mobile_main_menu_button_portrait"
          playAgainButtonClass = "dismount_post_game_mobile_play_again_button_portrait"
        } else {
          buttonsContainerClass = "post_game_mobile_buttons_container_portrait"
          mainMenuButtonClass = "post_game_mobile_main_menu_button_portrait"
          playAgainButtonClass = "post_game_mobile_play_again_button_portrait"
        }
      }
    } else {
      if(this.state.initDismount) {
        buttonsContainerClass = "post_game_desktop_buttons_container"
        mainMenuButtonClass = "dismount_post_game_desktop_main_menu_button"
        playAgainButtonClass = "dismount_post_game_desktop_play_again_button"
      } else {
        buttonsContainerClass = "post_game_desktop_buttons_container"
        mainMenuButtonClass = "post_game_desktop_main_menu_button"
        playAgainButtonClass = "post_game_desktop_play_again_button"
      }
    }

    return(
      <>
        { this.state.showWrapper ?
          <>
            <ScoreboardContainer
              initDismount={this.state.initDismount}
              isMobile={ this.props.isMobile }
              isPostGame={ this.state.isPostGame }
              mounted={ this.state.mounted }
              orientation={ this.props.orientation }
              scoreboard={ this.state.scoreboard }
              submittedPlayer={ this.props.player }
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