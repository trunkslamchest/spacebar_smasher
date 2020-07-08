import React from 'react'

import scoreboardFunctions from '../utility/scoreboardFunctions'

import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'

import './Home.css'
import '../UI/buttons.css'

export default class Home extends React.Component {

  state = {
    scoreboard: [],
    mounted: false,
    initDismount: false
  }

  componentDidMount(){
    scoreboardFunctions('get', 'http://localhost:5001/spacebarsmasher-96ba1/us-east1/players')
    // scoreboardFunctions('get', 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/players')
    .then(resObj => { this.setState({ scoreboard: Object.entries(resObj.players) }) })
  }

  componentDidUpdate(){
    if (!this.state.mounted && this.state.scoreboard.length > 0) this.setState({ mounted: true })
    if (this.state.initDismount) this.onDismount()
  }

  onClickStartButtonFunctions = (event) => {
    this.setState({ initDismount: true})
    this.startGameTimeout = setTimeout(() => { this.props.history.push('/spacebarsmasher/game') }, 500 )
  }

  onDismount = () => { this.clearTimersTimeout = setTimeout(() => { this.clearTimers() }, 800) }

  clearTimers = () => {
    clearTimeout(this.startGameTimeout)
    clearTimeout(this.clearTimersTimeout)
  }

  componentWillUnmount(){ this.clearTimers() }

  render(){
    return(
      <>
        <div className={this.state.initDismount ? "dismount_home_header" : "home_header" } >
          <h3>SPACEBAR SMASHER</h3>
        </div>
        <div className="start_button_container">
          <button
            name="start_button"
            className={this.state.initDismount ? "dismount_start_button" : "start_button"}
            onClick={ this.onClickStartButtonFunctions }
          >
            START
          </button>
        </div>
        <ScoreboardContainer
          mounted={this.state.mounted}
          scoreboard={this.state.scoreboard}
          submittedPlayer={this.props.player}
          initDismount={this.state.initDismount}
        />
      </>
    )
  }
}