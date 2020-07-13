import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { routes } from './utility/paths'

import detectDevice from './utility/detectDevice'

import CountdownContainer from './game/Countdown/CountdownContainer'
import Footer from './UI/Footer/Footer'
import HomeContainer from './index/HomeContainer'
import PostGameContainer from './game/PostGame/PostGameContainer'

import E404 from './error/E404'

import './App.css'

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
              {/* <Route exact path='/spacebarsmasher'> */}
              <Route exact path={ routes.home }>
                <HomeContainer
                  history={ this.props.history }
                  player={ this.state.player }
                  isMobile={ this.isMobile }
                />
              </Route>
              {/* <Route exact path='/spacebarsmasher/game'> */}
              <Route exact path={ routes.game }>
                <CountdownContainer
                  history={ this.props.history }
                  getPlayer={ this.getPlayer }
                  isMobile={ this.isMobile }
                />
              </Route>
              {/* <Route exact path='/spacebarsmasher/scoreboard'> */}
              <Route exact path={ routes.scoreboard } >
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