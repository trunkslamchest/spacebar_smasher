import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from './index/Home'
import Footer from './UI/Footer'

import Countdown from './game/Countdown'
import PostGameScoreContainer from './game/PostGameScoreContainer'

import E404 from './error/404'

import './App.css'
import './css/Response.css'
import './css/Loading.css'
import './css/Dismount.css'

export default class App extends React.Component {

  state = {
  }

  componentDidMount(){
  }

  getPlayer = (player) => {
    this.setState({ player: player })
  }

  render(){
    return (
      <>
        <div className="main_container">
          <Switch>
            <Route exact path='/spacebarsmasher'>
              <Home
                player={ this.state.player }
              />
            </Route>
            <Route exact path='/spacebarsmasher/game'>
              <Countdown
                getPlayer={ this.getPlayer }
              />
            </Route>
            <Route exact path='/spacebarsmasher/scoreboard'>
              <PostGameScoreContainer
                player={ this.state.player }
              />
            </Route>
            <Route component={ E404 } />
          </Switch>
        </div>
        <div className="footer_container">
          <Footer/>
        </div>
      </>
    )
  }
}