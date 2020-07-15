import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { routes } from './utility/paths'

import CountdownContainer from './Countdown/CountdownContainer'
import HomeContainer from './Home/HomeContainer'
import PostGameContainer from './PostGame/PostGameContainer'

import E404 from './error/E404'

import './App.css'

export default class App extends React.Component {

  state = {
    isMobile: !!navigator.maxTouchPoints,
    orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
  }

  componentDidMount(){ this.detectDevice = window.addEventListener("resize", this.detectDevice) }

  detectDevice = () => {
    this.setState({
      isMobile: !!navigator.maxTouchPoints,
      orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
    })
  }

  getPlayer = (player) => { this.setState({ player: player }) }

  render(){
    return (
      <>
        <div className="main_container">
          <Switch>
            <Route exact path={ routes.home }>
              <HomeContainer
                history={ this.props.history }
                isMobile={ this.state.isMobile }
                player={ this.state.player }
                orientation={ this.state.orientation }
              />
            </Route>
            <Route exact path={ routes.game }>
              <CountdownContainer
                history={ this.props.history }
                isMobile={ this.state.isMobile }
                getPlayer={ this.getPlayer }
                orientation={ this.state.orientation }
              />
            </Route>
            <Route exact path={ routes.scoreboard } >
              <PostGameContainer
                history={ this.props.history }
                isMobile={ this.state.isMobile }
                player={ this.state.player }
                orientation={ this.state.orientation }
              />
            </Route>
            <Route component={ E404 } />
          </Switch>
        </div>
      </>
    )
  }
}