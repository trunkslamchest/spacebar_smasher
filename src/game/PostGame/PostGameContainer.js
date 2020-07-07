import React from 'react'

import scoreboardFunctions from '../../utility/scoreboardFunctions'

import ScoreboardContainer from '../../Scoreboard/ScoreboardContainer'

import './PostGame.css'

export default class PostGameContainer extends React.Component {

  state = {
    scoreboard: [],
    mounted: false,
    initDismount: false
  }

  componentDidMount(){
    // scoreboardFunctions('get', 'http://localhost:5001/spacebarsmasher-96ba1/us-east1/players')
    scoreboardFunctions('get', 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/players')
    .then(resObj => { this.setState({ scoreboard: Object.entries(resObj.players) }) })
  }

  componentDidUpdate(){
    if (!this.state.mounted && this.state.scoreboard.length > 0) this.setState({ mounted: true })
    if (this.state.initDismount) this.onDismount()
  }

  onClickMainMenuButtonFunctions = (event) => {
    this.setState({ initDismount: true })
    this.mainMenuTimeout = setTimeout(() => { this.props.history.push('/spacebarsmasher') }, 500 )
  }

  onClickPlayAgainButtonFunctions = (event) => {
    this.setState({ initDismount: true })
    this.playAgainTimeout = setTimeout(() => { this.props.history.push('/spacebarsmasher/game') }, 500 )
  }

  onDismount = () => { this.clearTimersTimeout = setTimeout(() => { this.clearTimers() }, 800) }

  clearTimers = () => {
    clearTimeout(this.dismountTimeout)
    clearTimeout(this.mainMenuTimeout)
    clearTimeout(this.playAgainTimeout)
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
            name="main_menu_button"
            className={this.state.initDismount ? "dismount_post_game_main_menu_button" : "post_game_main_menu_button" }
            onClick={ this.onClickMainMenuButtonFunctions }
          >
            MAIN MENU
          </button>
          <button
            name="play_again_button"
            className={this.state.initDismount ? "dismount_post_game_play_again_button" : "post_game_play_again_button" }
            onClick={ this.onClickPlayAgainButtonFunctions }
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }
}