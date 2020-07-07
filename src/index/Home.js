import React from 'react'

import { Redirect } from 'react-router-dom'

import scoreboardFunctions from '../utility/scoreboardFunctions'

import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'

import './Home.css'
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

  onClickStartButtonFunctions = (event) => {
    this.setState({ initDismount: true})
    this.startGameTimeout = setTimeout(() => { this.props.history.push('/spacebarsmasher/game') }, 500 )
  }

  onDismount = () => {
    this.dismountTimeout = setTimeout(() => { this.setState({ dismounted: true })}, 500)
    this.clearTimersTimeout = setTimeout(() => { this.clearTimers() }, 1000)
  }

  clearTimers = () => {
    clearTimeout(this.dismountTimeout)
    clearTimeout(this.clearTimersTimeout)
    clearTimeout(this.stateGameTimeout)
  }

  componentWillUnmount(){ this.clearTimers() }

  render(){
    // const home_page =
    //   <>
    //     <div className={this.state.initDismount ? "dismount_home_header" : "home_header" } >
    //       <h3>SPACEBAR SMASHER</h3>
    //     </div>
    //     <div className="start_button_container">
    //       <button
    //         key={ "start_button" }
    //         to='/game'
    //         name="start_button"
    //         interaction="click"
    //         className={this.state.initDismount ? "dismount_start_button" : "start_button"}
    //         onClick={ this.onClickStartButtonFunctions }
    //       >
    //         START
    //       </button>
    //     </div>
    //     <ScoreboardContainer
    //       mounted={this.state.mounted}
    //       scoreboard={this.state.scoreboard}
    //       submittedPlayer={this.props.player}
    //       initDismount={this.state.initDismount}
    //     />
    //   </>

    return(
      <>
        {/* { this.state.dismounted ? <Redirect to='/spacebarsmasher/game' /> : home_page } */}
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