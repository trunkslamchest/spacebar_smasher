import React from 'react'

import { Route, Switch } from 'react-router-dom'

import detectDevice from './utility/detectDevice'

import Home from './index/Home'
import Footer from './UI/Footer'

import Countdown from './game/Countdown'
import PostGameScoreContainer from './game/PostGameScoreContainer'

import E404 from './error/E404'

import './App.css'
import './UI/Response.css'
import './UI/Loading.css'
import './UI/Dismount.css'

export default class App extends React.Component {

  state = {}

  constructor(props){
    super(props)
    this.isMobile = detectDevice;
  }

  componentDidMount(){}

  getPlayer = (player) => { this.setState({ player: player }) }

  render(){

    // console.log(this.isMobile)

    return (
      <>
        <div className="main_container">
          <div className="wrapper">
            <Switch>
              <Route exact path='/spacebarsmasher'>
                <Home
                  player={ this.state.player }
                  isMobile={ this.isMobile }
                />
              </Route>
              <Route exact path='/spacebarsmasher/game'>
                <Countdown
                  getPlayer={ this.getPlayer }
                  isMobile={ this.isMobile }
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
        </div>
        <div className="footer_container">
          <Footer/>
        </div>
      </>
    )
  }
}