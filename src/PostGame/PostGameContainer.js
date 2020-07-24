import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/actionIndex'

import { fetch, routes } from '../utility/paths'
import { postGameContainer } from './PostGameFunctions/classSwitch'
import scoreboardFunctions from '../utility/scoreboardFunctions'

import Wrapper from '../UI/Wrapper/Wrapper'
import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'
import PostGameButtonsContainer from './PostGameComponents/PostGameButtonsContainer/PostGameButtonsContainer'

import './PostGameDesktopContainer.css'
import './PostGameMobileContainerLandscape.css'
import './PostGameMobileContainerPortrait.css'

const PostGameContainer = (props) => {

  const { onWrapper, onFooter, onGetScoreboard, scoreboard } = props

  useEffect(() => {
    // document.body.scrollTop = 0

    onWrapper(true)
    onFooter(true)

    if(scoreboard.allScores.length === 0){
      document.title = 'Spacebar Smasher | Scoreboard'
      scoreboardFunctions('get', fetch.get)
      .then(resObj => {
        onGetScoreboard(Object.entries(resObj.players))
      })
    }
  }, [onWrapper, onFooter, onGetScoreboard, scoreboard])

  const onDismount = (event) => {
    setTimeout(() => {
      props.onInitDismount(true)
    }, 125)

    setTimeout(() => {
      onWrapper(false)
      onFooter(false)
    }, 500)

    if (event.target.attributes.nav.value === 'game')  {
      setTimeout(() => {
        props.onInitDismount(false)
        props.onClearScore()
        props.onPostGame(false)
        props.history.push( routes.countdown )
      }, 750 )
    }
    else setTimeout(() => {
      props.onInitDismount(false)
      props.onPostGame(false)
      props.history.push( routes.home )
    }, 750 )
  }

  return(
    <Wrapper divClass={ postGameContainer(props).container }>
      <ScoreboardContainer />
      <PostGameButtonsContainer onDismount={ onDismount } />
    </Wrapper>
    )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    scoreboard: state.scoreboard,
    ui: state.ui
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onInitDismount: (bool) => dispatch(actions.initDismount(bool)),
    onWrapper: (bool) => dispatch(actions.wrapper(bool)),
    onFooter: (bool) => dispatch(actions.footer(bool)),
    onPostGame: (bool) => dispatch(actions.postGame(bool)),
    onGetScoreboard: (scoreboard) => dispatch(actions.getScoreboard(scoreboard)),
    onClearScore: () => dispatch(actions.clearScore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostGameContainer)