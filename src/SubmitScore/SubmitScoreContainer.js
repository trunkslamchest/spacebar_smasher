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
    this.onMount()
  }

  onMount = () => {
    this.onMountTimeout = setTimeout(() => {
      this.props.onFooter(true)
      this.props.onWrapper(true)
    }, 250)
  }

  onDismount = (event) => {
    let buttonNav = event.target.attributes.nav.value

    this.initDismountTimeout = setTimeout(() => {
      this.props.onInitDismount(true)
    }, 125)

    this.onDismountTimeout = setTimeout(() => {
      this.props.onFooter(false)
      this.props.onWrapper(false)
    }, 250)

    this.exitDismountTimeout = setTimeout(() => {
      this.props.onInitDismount(false)
      this.props.history.push( buttonNav === 'game' ? routes.countdown : buttonNav === 'main_menu' ? routes.home : routes.scoreboard )
    }, 500)
  }

  componentWillUnmount(){
    clearTimeout(this.onMountTimeout)
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
        { this.props.ui.wrapper ?
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
    onInitDismount: (bool) => dispatch(actions.initDismount(bool)),
    onWrapper: (bool) => dispatch(actions.wrapper(bool)),
    onFooter: (bool) => dispatch(actions.footer(bool))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitScoreContainer)