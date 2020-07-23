import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/actionIndex'

import { routes } from '../utility/paths'

import FooterContainer from '../UI/Footer/FooterContainer'

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

class SubmitScoreContainer extends React.Component {

  componentDidMount(){
    document.title = 'Spacebar Smasher - Submit Score'
    this.startSubmitScore()
  }

  startSubmitScore = () => {
    this.startSubmitScoreTimeout = setTimeout(() => {
      this.props.onShowFooter()
      this.props.onShowWrapper()
    }, 500)
  }

  onDismount = (event) => {
    let buttonNav = event.target.attributes.nav.value

    this.initDismountTimeout = setTimeout(() => { this.props.onInitDismount() }, 500)

    this.onDismountTimeout = setTimeout(() => {
      this.props.onHideFooter()
      this.props.onHideWrapper()
    }, 750)

    this.exitDismountTimeout = setTimeout(() => {
      this.props.onExitDismount()
      this.props.history.push( buttonNav === 'game' ? routes.countdown : buttonNav === 'main_menu' ? routes.home : routes.scoreboard )
    }, 1000)
  }

  componentWillUnmount(){
    clearTimeout(this.startSubmitScoreTimeout)
    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.onDismountTimeout)
    clearTimeout(this.exitDismountTimeout)
  }

  render(){

  let wrapperClass, pillClass, rowClass1, subRowClass1

  if(this.props.detect.device === "mobile") {
    if(this.props.detect.orientation === "landscape") {
      rowClass1 = 'submit_score_mobile_landscapeR1'
      subRowClass1 = 'submit_score_mobile_landscapeSR1'
        if(this.props.ui.initDismount) {
            wrapperClass = "submit_score_mobile_wrapper_landscape"
            pillClass = "dismount_submit_score_mobile_pill_landscape"
        } else {
            wrapperClass = "submit_score_mobile_wrapper_landscape"
            pillClass = "submit_score_mobile_pill_landscape"
        }
    } else {
      rowClass1 = 'submit_score_mobile_portraitR1'
      subRowClass1 = 'submit_score_mobile_portraitSR1'
      if(this.props.ui.initDismount) {
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
      <>
        { this.props.ui.showWrapper ?
          <div className={ wrapperClass }>
            <div className={ pillClass }>
              <SubmitScoreHeader />
              <div className={ rowClass1 }>
                <SubmitScoreCounter />
                <div className={ subRowClass1 }>
                  <SubmitScoreRank />
                  <SubmitScorePower />
                </div>
              </div>
              <SubmitScoreFormContainer onDismount={ this.onDismount } />
            </div>
            <SubmitScoreButtonsContainer onDismount={ this.onDismount } />
          </div>
        :
          <></>
        }
        <FooterContainer />
      </>
    )
  }
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
    onShowFooter: () => dispatch(actions.showFooter()),
    onHideFooter: () => dispatch(actions.hideFooter()),
    onShowWrapper: () => dispatch(actions.showWrapper()),
    onHideWrapper: () => dispatch(actions.hideWrapper()),
    onInitDismount: () => dispatch(actions.initDismount()),
    onExitDismount: () => dispatch(actions.exitDismount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitScoreContainer)