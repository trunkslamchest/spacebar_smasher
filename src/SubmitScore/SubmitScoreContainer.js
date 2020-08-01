import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import * as actions from '../store/actions/actionIndex'

import { routes } from '../utility/paths'
import { submitScoreContainer } from './SubmitScoreFunctions/classSwitch'

import Wrapper from '../UI/Wrapper/Wrapper'

import SubmitScoreButtonsContainer from './SubmitScoreComponents/SubmitScoreButtons/SubmitScoreButtonsContainer'
import SubmitScoreFormContainer from './SubmitScoreComponents/SubmitScoreForm/SubmitScoreFormContainer'

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
        onFooter(false)
        onWrapper(true)
      }, 125)
    }

  }, [onFooter, onWrapper, scoreboard, history])

  const onDismount = (event) => {
    let buttonNav = event.target.attributes.nav.value

    setTimeout(() => { onInitDismount(true) }, 125)
    setTimeout(() => { onWrapper(false) }, 500)
    setTimeout(() => {
      onInitDismount(false)
      props.history.push( buttonNav === 'game' ? routes.countdown : buttonNav === 'main_menu' ? routes.home : routes.scoreboard )
    }, 750)
  }

  return(
    <Wrapper divClass={ submitScoreContainer(props).wrapper }>
      <SubmitScoreFormContainer onDismount={ onDismount } />
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