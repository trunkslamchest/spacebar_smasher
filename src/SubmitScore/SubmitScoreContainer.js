import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import * as actions from '../store/actions/actionIndex'

import { routes } from '../utility/paths'
import { submitScoreContainer } from './SubmitScoreFunctions/classSwitch'

import Wrapper from '../UI/Wrapper/Wrapper'

import SubmitScoreButtonsContainer from './SubmitScoreComponents/SubmitScoreButtons/SubmitScoreButtonsContainer'
import SubmitScoreCounter from './SubmitScoreComponents/SubmitScoreCounter/SubmitScoreCounter'
import SubmitScoreHeader from './SubmitScoreComponents/SubmitScoreHeader/SubmitScoreHeader'
import SubmitScoreFormContainer from './SubmitScoreComponents/SubmitScoreForm/SubmitScoreFormContainer'
import SubmitScorePower from './SubmitScoreComponents/SubmitScorePower/SubmitScorePower'
import SubmitScoreRank from './SubmitScoreComponents/SubmitScoreRank/SubmitScoreRank'

import './SubmitScoreDesktopContainer.css'
import './SubmitScoreMobileContainerLandscape.css'
import './SubmitScoreMobileContainerPortrait.css'
import './SubmitScoreMobileDismount.css'
import './SubmitScoreMobileOnmount.css'

const SubmitScoreContainer = (props) => {

  const { onFooter, onWrapper, onInitDismount, scoreboard } = props

  const history = useHistory()

  useEffect(() => {
    if(scoreboard.allScores.length === 0) history.push( routes.home )
    else {
      document.title = 'Spacebar Smasher | Submit Score'
      setTimeout(() => {
        onFooter(true)
        onWrapper(true)
      }, 125)
    }
    // document.title = 'Spacebar Smasher | Submit Score'
    // setTimeout(() => {
    //   onFooter(true)
    //   onWrapper(true)
    // }, 125)
  }, [onFooter, onWrapper, scoreboard, history])

  const onDismount = (event) => {
    let buttonNav = event.target.attributes.nav.value

    setTimeout(() => {
      onInitDismount(true)
    }, 125)

    setTimeout(() => {
      onFooter(false)
      onWrapper(false)
    }, 500)

    setTimeout(() => {
      onInitDismount(false)
      props.history.push( buttonNav === 'game' ? routes.countdown : buttonNav === 'main_menu' ? routes.home : routes.scoreboard )
    }, 750)
  }

  return(
    <Wrapper divClass={ submitScoreContainer(props).wrapper }>
        <div className={ submitScoreContainer(props).pill }>
          <SubmitScoreHeader />
          <div className={ submitScoreContainer(props).row }>
            <SubmitScoreCounter />
            <div className={ submitScoreContainer(props).subRow }>
              <SubmitScoreRank />
              <SubmitScorePower />
            </div>
          </div>
          <SubmitScoreFormContainer onDismount={ onDismount } />
        </div>
        <SubmitScoreButtonsContainer onDismount={ onDismount } />
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
    onFooter: (bool) => dispatch(actions.footer(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitScoreContainer)