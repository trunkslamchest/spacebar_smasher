import React from 'react'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from './store/actions/actionIndex'

import { routes } from './utility/paths'

import HomeContainer from './Home/HomeContainer'
import CountdownContainer from './Countdown/CountdownContainer'
import GameContainer from './game/GameContainer'
import SubmitScoreContainer from './SubmitScore/SubmitScoreContainer'
import PostGameContainer from './PostGame/PostGameContainer'

import E404 from './error/E404'

import './App.css'

const App = (props) => {

  const { onDevice, onOrientation } = props

  useEffect(() => { window.addEventListener("resize", () => {
    onDevice()
    onOrientation()
  }) }, [onDevice, onOrientation])

  return (
    <div className="main_container">
      <Switch>
        <Route exact path={ routes.home }>
          <HomeContainer
            history={ props.history }
          />
        </Route>
        <Route exact path={ routes.countdown }>
          <CountdownContainer
            history={ props.history }
          />
        </Route>
        <Route exact path={ routes.game }>
          <GameContainer
            history={ props.history }
          />
        </Route>
        <Route exact path={ routes.submitScore }>
          <SubmitScoreContainer
            history={ props.history }
          />
        </Route>
        <Route exact path={ routes.scoreboard } >
          <PostGameContainer
            history={ props.history }
          />
        </Route>
        <Route component={ E404 } />
      </Switch>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onDevice: () => dispatch(actions.device()),
    onOrientation: () => dispatch(actions.orientation())
  }
}

export default connect(null, mapDispatchToProps)(App)
