import React from 'react'

import { fetch, routes } from '../../utility/paths'

import scoreboardFunctions from '../../utility/scoreboardFunctions'

import ScoreboardContainer from '../../Scoreboard/ScoreboardContainer'

import './PostGameContainer.css'
import './PostGameDismount.css'

export default class PostGameContainer extends React.Component {

  state = {
    scoreboard: [],
    mounted: false,
    initDismount: false
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Scoreboard'
    scoreboardFunctions('get', fetch.get)
    .then(resObj => { this.setState({ scoreboard: Object.entries(resObj.players) }) })
  }

  componentDidUpdate(){
    if (!this.state.mounted && this.state.scoreboard.length > 0) this.setState({ mounted: true })
    if (this.state.initDismount) this.onDismount()
  }

  onClickButtonFunctions = (event) => {
    let buttonNav = event.target.attributes.nav.value

    this.setState({ initDismount: true })

    // if (buttonNav === 'game') this.resetTimeout = setTimeout(() => { this.props.history.push('/spacebarsmasher/' + buttonNav) }, 500 )
    if (buttonNav === 'game') this.resetTimeout = setTimeout(() => { this.props.history.push( routes.game ) }, 500 )
    // else this.resetTimeout = setTimeout(() => { this.props.history.push('/spacebarsmasher') }, 500 )
    else this.resetTimeout = setTimeout(() => { this.props.history.push( routes.home ) }, 500 )
  }

  onDismount = () => { this.clearTimersTimeout = setTimeout(() => { this.clearTimers() }, 750) }

  clearTimers = () => {
    clearTimeout(this.resetTimeout)
    clearTimeout(this.dismountTimeout)
    clearTimeout(this.clearTimersTimeout)
  }

  componentWillUnmount(){ this.clearTimers() }

  render(){
    return(
      <div className="post_game_wrapper">
        <ScoreboardContainer
          mounted={this.state.mounted}
          scoreboard={this.state.scoreboard}
          submittedPlayer={this.props.player}
          initDismount={this.state.initDismount}
        />
        <div className="post_game_buttons_container">
          <button
            nav="main_menu"
            name="main_menu_button"
            className={this.state.initDismount ? "dismount_post_game_main_menu_button" : "post_game_main_menu_button" }
            onClick={ this.onClickButtonFunctions }

          >
            MAIN MENU
          </button>
          <button
            nav="game"
            name="play_again_button"
            className={this.state.initDismount ? "dismount_post_game_play_again_button" : "post_game_play_again_button" }
            onClick={ this.onClickButtonFunctions }
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }
}