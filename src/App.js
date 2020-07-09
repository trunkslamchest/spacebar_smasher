import React from 'react'

import { Route, Switch } from 'react-router-dom'

import detectDevice from './utility/detectDevice'

import Home from './index/Home'
import Footer from './UI/Footer/Footer'

import CountdownContainer from './game/Countdown/CountdownContainer'
import PostGameContainer from './game/PostGame/PostGameContainer'

import E404 from './error/E404'

import './App.css'

import './UI/Loading.css'
import './UI/Dismount.css'

export default class App extends React.Component {

  state = {}

  constructor(props){
    super(props)
    this.isMobile = detectDevice;
  }

  getPlayer = (player) => { this.setState({ player: player }) }

  render(){
    return (
      <>
        <div className="main_container">
          <div className="wrapper">
            <Switch>
              <Route exact path='/spacebarsmasher'>
                <Home
                  history={ this.props.history }
                  player={ this.state.player }
                  isMobile={ this.isMobile }
                />
              </Route>
              <Route exact path='/spacebarsmasher/game'>
                <CountdownContainer
                  history={ this.props.history }
                  getPlayer={ this.getPlayer }
                  isMobile={ this.isMobile }
                />
              </Route>
              <Route exact path='/spacebarsmasher/scoreboard'>
                <PostGameContainer
                  history={ this.props.history }
                  player={ this.state.player }
                />
              </Route>
              <Route component={ E404 } />
            </Switch>
          </div>
          <Footer/>
        </div>
      </>
    )
  }
}