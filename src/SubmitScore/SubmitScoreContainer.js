import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'
import * as actions from '../store/actions/actionIndex'

import { routes } from '../utility/paths'

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
    // if(scoreboard.allScores.length === 0){
    //   history.push( routes.home )
    // } else {
      document.title = 'Spacebar Smasher | Submit Score'
      setTimeout(() => {
        onFooter(true)
        onWrapper(true)
      }, 125)
    // }
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

  let wrapperClass, pillClass, rowClass1, subRowClass1

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      rowClass1 = 'submit_score_mobile_landscapeR1'
      subRowClass1 = 'submit_score_mobile_landscapeSR1'
        if(props.ui.initDismount) {
            wrapperClass = "submit_score_mobile_wrapper_landscape"
            pillClass = "dismount_submit_score_mobile_pill_landscape"
        } else {
            wrapperClass = "submit_score_mobile_wrapper_landscape"
            pillClass = "submit_score_mobile_pill_landscape"
        }
    } else {
      rowClass1 = 'submit_score_mobile_portraitR1'
      subRowClass1 = 'submit_score_mobile_portraitSR1'
      if(props.ui.initDismount) {
        wrapperClass = "submit_score_mobile_wrapper_portrait"
        pillClass = "dismount_submit_score_mobile_pill_portrait"
      } else {
        wrapperClass = "submit_score_mobile_wrapper_portrait"
        pillClass = "submit_score_mobile_pill_portrait"
      }
    }
  } else {
    wrapperClass = "submit_score_desktop_wrapper"
    pillClass = "submit_score_desktop_pill"
  }

  return(
    <Wrapper divClass={ wrapperClass }>
        <div className={ pillClass }>
          <SubmitScoreHeader />
          <div className={ rowClass1 }>
            <SubmitScoreCounter />
            <div className={ subRowClass1 }>
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