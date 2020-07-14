import React from 'react'

import { fetch, routes } from '../utility/paths'
import scoreboardFunctions from '../utility/scoreboardFunctions'

import HomeHeader from './HomeHeader/HomeHeader'
import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'
import Footer from '../UI/Footer/Footer'

import './HomeContainer.css'
import './HomeDismount.css'

export default class HomeContainer extends React.Component {

  state = {
    scoreboard: [],
    mounted: false,
    initDismount: false,
    isPostGame: false
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

  onClickStartButton = (event) => {
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
          <HomeHeader
            initDismount={ this.state.initDismount }
            onClickStartButton={ this.onClickStartButton }
          />
          <ScoreboardContainer
            isPostGame={ this.state.isPostGame }
            mounted={ this.state.mounted }
            scoreboard={ this.state.scoreboard }
            submittedPlayer={ this.props.player }
            initDismount={ this.state.initDismount }
          />
        </div>
        <Footer
          initDismount={ this.state.initDismount }
        />
      </>
    )
  }
}