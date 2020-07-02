import React from 'react'

import { Redirect } from 'react-router-dom'

import scoreboardFunctions from '../utility/scoreboardFunctions'

import Score from './Score.js'

import './Home.css'
import '../UI/Scoreboard.css'
import '../UI/buttons.css'

export default class Home extends React.Component {

  state = {
    scoreboard: [],
    initDismount: false,
    dismounted: false
  }

  componentDidMount(){
    scoreboardFunctions('get', 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/players')
    .then(resObj => { this.setState({ scoreboard: Object.entries(resObj.players) }) })
  }

  componentDidUpdate(){ if(this.state.initDismount && !this.state.dismounted) this.onDismount() }

  onClickStartButtonFunctions = (event) => { this.setState({ initDismount: true}) }

  onDismount = () => { this.timerTimeout = setTimeout(() => { this.setState({ dismounted: true })}, 500) }

  componentWillUnmount(){ clearTimeout(this.timerTimeout) }

  render(){
    const scores = this.state.scoreboard.map(score =>
      <Score
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

    const home_page =
      <>
        <div className={this.state.initDismount ? "dismount_home_header" : "home_header" } >
          <h3>SPACEBAR SMASHER</h3>
        </div>
        <div className="start_button_container">
          <button
            key={ "start_button" }
            to='/game'
            name="start_button"
            interaction="click"
            className={this.state.initDismount ? "dismount_start_button" : "start_button"}
            onClick={ this.onClickStartButtonFunctions }
          >
            START
          </button>
        </div>
        { scoreboard_table }
      </>

    return(
      <>
        { this.state.dismounted ? <Redirect to='/spacebarsmasher/game' /> : home_page }
      </>
    )
  }
}