import React from 'react'

import { fetch, routes } from '../utility/paths'

import Footer from '../UI/Footer/Footer'

import scoreboardFunctions from '../utility/scoreboardFunctions'

import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'

import './HomeContainer.css'
import './HomeDismount.css'

export default class HomeContainer extends React.Component {

  state = {
    scoreboard: [],
    mounted: false,
    initDismount: false
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Home'
    scoreboardFunctions('get', fetch.get)
    .then(resObj => { this.setState({ scoreboard: Object.entries(resObj.players) }) })
  }

  componentDidUpdate(){
    if (!this.state.mounted && this.state.scoreboard.length > 0) this.setState({ mounted: true })
    if (this.state.initDismount) this.onDismount()
  }

  onClickStartButtonFunctions = (event) => {
    this.setState({ initDismount: true})
    this.startGameTimeout = setTimeout(() => { this.props.history.push( routes.game ) }, 500 )
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
        <div className="home_wrapper">
          <div className="home_header_wrapper">
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
          </div>
          <ScoreboardContainer
            isPostGame={false}
            mounted={this.state.mounted}
            scoreboard={this.state.scoreboard}
            submittedPlayer={this.props.player}
            initDismount={this.state.initDismount}
          />
        </div>
        <Footer
          initDismount={ this.state.initDismount }
        />
      </>
    )
  }
}