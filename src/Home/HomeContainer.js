import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import * as actions from '../store/actions/actionIndex'

import { fetch, routes } from '../utility/paths'
import scoreboardFunctions from '../utility/scoreboardFunctions'
import { homeContainer } from './HomeFunctions/classSwitch'

import taglines from '../datasets/taglines'

import Wrapper from '../UI/Wrapper/Wrapper'

import HomeHeader from './HomeComponents/HomeHeader/HomeHeader'
import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'

import './HomeDesktopContainer.css'
import './HomeDesktopDismount.css'

import './HomeMobileContainerLandscape.css'
import './HomeMobileContainerPortrait.css'
import './HomeMobileDismount.css'

const HomeContainer = (props) => {

  const { onWrapper, onFooter, onGetScoreboard, scoreboard } = props

  useEffect(() => {
    // document.body.scrollTop = 0

    onWrapper(true)
    onFooter(true)

    if(scoreboard.allScores.length === 0){
      document.title = `Spacebar Smasher | ${taglines.random()} `
      scoreboardFunctions('get', fetch.get)
      .then(resObj => {
        onGetScoreboard(Object.entries(resObj.players))
      })
    }
  }, [onWrapper, onFooter, onGetScoreboard, scoreboard])

  const onDismount = () => {
    setTimeout(() => {
      props.onInitDismount(true)
    }, 125)

    setTimeout(() => {
      onFooter(false)
      onWrapper(false)
    }, 500)

    setTimeout(() => {
      props.onInitDismount(false)
      props.onClearScore()
      props.history.push( routes.countdown )
    }, 750 )
  }

  return(
    <Wrapper divClass={ homeContainer(props).wrapper }>
      <HomeHeader onClickStartButton={ onDismount } />
      <ScoreboardContainer />
    </Wrapper>
  )
}

const mapStateToProps = (state) => {
  return {
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
    onGetScoreboard: (scoreboard) => dispatch(actions.getScoreboard(scoreboard)),
    onClearScore: () => dispatch(actions.clearScore())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)