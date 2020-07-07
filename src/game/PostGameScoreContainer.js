import React from 'react'

import { Redirect } from 'react-router-dom'

import PostGameScore from './PostGameScore'

import scoreboardFunctions from '../utility/scoreboardFunctions'

import './PostGame.css'

export default class PostGameScoreContainer extends React.Component {

  state = {
    display: "scoreboard",
    scoreboard: [],
    updatedScoreboard: false,
    mounted: false,
    initDismount: false,
    dismounted: false
  }

  componentDidMount(){ this.setState({ mounted: true }) }

  componentDidUpdate(){ if(this.state.mounted && !this.state.updatedScoreboard) this.getScoreboard() }

  getScoreboard(){
    scoreboardFunctions('get', 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/players')
    // scoreboardFunctions('get', 'http://localhost:5001/spacebarsmasher-96ba1/us-east1/players')
    .then(resObj => {
      this.setState({
        scoreboard: Object.entries(resObj.players),
        updatedScoreboard: true
      })
    })
  }

  onClickMainMenuButtonFunctions = (event) => {
    this.setState({ initDismount: true })
    this.mainMenuTimeout = setTimeout(() => { this.setState({ display: "main_menu" })}, 500 )
  }

  onClickPlayAgainButtonFunctions = (event) => {
    this.setState({ initDismount: true })
    this.playAgainTimeout = setTimeout(() => { this.setState({ display: "game" })}, 500 )
  }

  componentWillUnmount(){
    clearTimeout(this.mainMenuTimeout)
    clearTimeout(this.playAgainTimeout)
  }

  render(){
    const blank = <></>

    const scores = this.state.scoreboard.map(score =>
      <PostGameScore
        key={score[0]}
        score={score[1]}
        submittedPlayer={this.props.player}
      />
    )

    const scoreboard_table =
      <>
        <table
          key={"scoreboard_table"}
          className={this.state.initDismount ? "dismount_scoreboard_table" : "scoreboard_table" }
        >
          <tbody>
            <tr className={this.state.initDismount ? "dismount_scoreboard_header" : "scoreboard_header"}>
              <td>
                HIGH SCORES
              </td>
            </tr>
            <tr className="scoreboard_head_row">
              <th>NAME</th>
              <th>POWER</th>
              <th>SCORE</th>
            </tr>
              { scores }
          </tbody>
        </table>
      </>

    const scoreboard_buttons =
      <div className="post_game_buttons_container">
        <button
          key={ "main_menu_button" }
          name="main_menu_button"
          interaction="click"
          className={this.state.initDismount ? "dismount_post_game_main_menu_button" : "post_game_main_menu_button" }
          onClick={ this.onClickMainMenuButtonFunctions }
        >
          MAIN MENU
        </button>
        <button
          key={ "play_again_button" }
          name="play_again_button"
          interaction="click"
          className={this.state.initDismount ? "dismount_post_game_play_again_button" : "post_game_play_again_button" }
          onClick={ this.onClickPlayAgainButtonFunctions }
        >
          PLAY AGAIN
        </button>
      </div>

    const scoreboard =
      <div className="post_game_wrapper">
        { scoreboard_table }
        { scoreboard_buttons }
      </div>

    return(
      <>
        {
          (() => {
            switch(this.state.display) {
              case 'scoreboard': return scoreboard;
              case 'main_menu': return <Redirect to="/spacebarsmasher" />
              case 'game': return <Redirect to="/spacebarsmasher/game" />;
              default: return blank;
            }
          })()
        }
      </>
    )
  }
}