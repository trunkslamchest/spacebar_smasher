import React from 'react'

import { Redirect } from 'react-router-dom'

import scoreboardFunctions from '../utility/scoreboardFunctions'
import Loading from '../UI/Loading'
import Scoreboard from '../Scoreboard/Scoreboard'

import './Home.css'
import '../Scoreboard/Scoreboard.css'
import '../UI/buttons.css'

export default class Home extends React.Component {

  state = {
    scoreboard: [],
    mounted: false,
    initDismount: false,
    dismounted: false
  }

  componentDidMount(){
    // scoreboardFunctions('get', 'http://localhost:5001/spacebarsmasher-96ba1/us-east1/players')
    scoreboardFunctions('get', 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/players')
    .then(resObj => { this.setState({ scoreboard: Object.entries(resObj.players) }) })
  }

  componentDidUpdate(){
    if (!this.state.mounted && this.state.scoreboard.length > 0) this.setState({ mounted: true })
    if (this.state.initDismount && !this.state.dismounted) this.onDismount()
  }

  onClickStartButtonFunctions = (event) => { this.setState({ initDismount: true}) }

  onDismount = () => { this.timerTimeout = setTimeout(() => { this.setState({ dismounted: true })}, 500) }

  componentWillUnmount(){ clearTimeout(this.timerTimeout) }

  render(){

    const scores = this.state.scoreboard.map(score =>
      <Scoreboard
        key={score[0]}
        score={score[1]}
        submittedPlayer={this.props.player}
      />
    )

    const scoreboard_table =
      <div className={this.state.initDismount ? "dismount_scoreboard_table" : "scoreboard_table" } >
          <div className={this.state.initDismount ? "dismount_scoreboard_header" : "scoreboard_header"}>
              <h1>
                HIGH SCORES
              </h1>
          </div>
          <div className="scoreboard_head_row">
            <h1>NAME</h1>
            <h1>POWER</h1>
            <h1>SCORE</h1>
          </div>
            { this.state.mounted ? scores : <Loading /> }
      </div>

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