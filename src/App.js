import React from 'react'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from './store/actions/actionIndex'

import { routes } from './utility/paths'

import CountdownContainer from './Countdown/CountdownContainer'
import HomeContainer from './Home/HomeContainer'
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
    <>
      <div className="main_container">
        <Switch>
          <Route exact path={ routes.home }>
            <HomeContainer
              history={ props.history }
            />
          </Route>
          <Route exact path={ routes.game }>
            <CountdownContainer
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
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    device: state.detect.device,
    orientation: state.detect.orientation
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDevice: () => dispatch(actions.device()),
    onOrientation: () => dispatch(actions.orientation())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
