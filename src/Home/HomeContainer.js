import React from 'react'
import { useEffect } from 'react'

import { connect } from 'react-redux'
import * as actions from '../store/actions/actionIndex'

import { fetch, routes } from '../utility/paths'
import scoreboardFunctions from '../utility/scoreboardFunctions'

import Wrapper from '../UI/Wrapper/Wrapper'

import HomeHeader from './HomeHeader/HomeHeader'
import ScoreboardContainer from '../Scoreboard/ScoreboardContainer'

import './HomeDesktopContainer.css'
import './HomeDesktopDismount.css'

import './HomeMobileContainerLandscape.css'
import './HomeMobileContainerPortrait.css'
import './HomeMobileDismount.css'

const HomeContainer = (props) => {

  const { onWrapper, onFooter, onGetScoreboard, scoreboard } = props

  useEffect(() => {
    document.title = 'Spacebar Smasher - Scoreboard'
    // document.body.scrollTop = 0

    onWrapper(true)
    onFooter(true)

    if(scoreboard.allScores.length === 0){
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

  let wrapperClass

  if(props.detect.device === "mobile"){
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) {
        wrapperClass = "dismount_home_mobile_wrapper_landscape"
      } else {
        wrapperClass = "home_mobile_wrapper_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        wrapperClass = "dismount_home_mobile_wrapper_portrait"
      } else {
        wrapperClass = "home_mobile_wrapper_portrait"
      }
    }
  } else {
    if(props.ui.initDismount) {
      wrapperClass = "dismount_home_desktop_wrapper"
    } else {
      wrapperClass = "home_desktop_wrapper"
    }
  }

  return(
    <Wrapper divClass={ wrapperClass }>
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
