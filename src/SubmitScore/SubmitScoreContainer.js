import React from 'react'
import { Redirect } from 'react-router-dom'
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

  state = {
    player: '',
    showButtons: false,
    showSubmitScore: true
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Submit Score'
    this.startSubmitScore()
  }

  startSubmitScore = () => {
    this.startSubmitScoreTimeout = setTimeout(() => {

      this.props.onShowFooter()
      this.props.onShowWrapper()

      this.setState({
        showButtons: true
      })
    }, 500)
  }

  onClickButtonFunctions = (event) => {

    let buttonNav = event.target.attributes.nav.value

    this.props.onInitDismount()

    this.initResetTimeout = setTimeout(() => {

      // this.props.onShowGame()
      this.props.onHideFooter()
      this.props.onHideWrapper()

      this.setState({ showButtons: false })
    }, 250)

    if (buttonNav === 'game')  {
      this.resetTimeout = setTimeout(() => {
        this.props.onExitDismount()
        this.props.history.push( routes.countdown )
        // this.props.resetGame()
      }, 500 )
    }
    else this.resetTimeout = setTimeout(() => {
      this.props.onExitDismount()
      this.props.history.push( routes.home )
    }, 500 )
  }

  onDismount = () => {
    this.initDismountTimeout = setTimeout(() => { this.props.onInitDismount() }, 500)

    this.onDismountTimeout = setTimeout(() => {
      this.props.onHideFooter()
      this.props.onHideWrapper()
    }, 750)

    this.showScoreboardTimeout = setTimeout(() => {
      this.props.onExitDismount()
      this.setState({ showSubmitScore: false })
    }, 1000)
  }

  componentWillUnmount(){
    clearTimeout(this.startSubmitScoreTimeout)
    clearTimeout(this.initResetTimeout)
    clearTimeout(this.resetTimeout)

    clearTimeout(this.initDismountTimeout)
    clearTimeout(this.onDismountTimeout)
    clearTimeout(this.showScoreboardTimeout)
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

    const submitScore =
      <>
        { this.props.ui.showWrapper ?
          <div className={ wrapperClass }>
            <div className={ pillClass }>
              <SubmitScoreHeader />
              <div className={ rowClass1 }>
                <SubmitScoreCounter
                  // count={ this.props.count }
                />
                <div className={ subRowClass1 }>
                  <SubmitScoreRank
                    // rank={ this.props.rank }
                  />
                  <SubmitScorePower
                    // power={ this.props.power }
                    // powerRaw={ this.props.powerRaw }
                  />
                </div>
              </div>
              <SubmitScoreFormContainer
                // count={ this.props.count }
                onDismount={ this.onDismount }
                // power={ this.props.power }
                // powerRaw={ this.props.powerRaw }
              />
            </div>
            <SubmitScoreButtonsContainer
              onClickButtonFunctions={ this.onClickButtonFunctions }
            />
          </div>
        :
          <></>
        }
        { this.props.ui.showFooter ?
          <FooterContainer />
        :
          <></>
        }
      </>

    return(
      <>
        { this.state.showSubmitScore ?
          submitScore
        :
          <Redirect to={ routes.scoreboard } />
        }
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
    onExitDismount: () => dispatch(actions.exitDismount()),
    // onShowGame: () => dispatch(actions.showGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitScoreContainer)