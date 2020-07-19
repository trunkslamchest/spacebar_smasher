import React from 'react'

import { Redirect } from 'react-router-dom'
import { routes } from '../utility/paths'

import FooterContainer from '../UI/Footer/FooterContainer'

import SubmitScoreHeader from './SubmitScoreComponents/SubmitScoreHeader/SubmitScoreHeader'
import SubmitScoreCounter from './SubmitScoreComponents/SubmitScoreCounter/SubmitScoreCounter'
import SubmitScoreRank from './SubmitScoreComponents/SubmitScoreRank/SubmitScoreRank'
import SubmitScorePower from './SubmitScoreComponents/SubmitScorePower/SubmitScorePower'

import SubmitScoreFormContainer from './SubmitScoreComponents/SubmitScoreForm/SubmitScoreFormContainer'
import SubmitScoreButtonsContainer from './SubmitScoreComponents/SubmitScoreButtons/SubmitScoreButtonsContainer'

import './SubmitScoreDesktopContainer.css'
import './SubmitScoreMobileContainerLandscape.css'
import './SubmitScoreMobileContainerPortrait.css'
import './SubmitScoreMobileDismount.css'
import './SubmitScoreMobileOnmount.css'

export default class SubmitScoreContainer extends React.Component {

  state = {
    initDismount: false,
    player: '',
    showButtons: false,
    showFooter: false,
    showSubmitScore: true,
    showWrapper: false
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Submit Score'

    this.componentTimeout = setTimeout(() => {
      this.setState({
        showButtons: true,
        showFooter: true,
        showWrapper: true
      })
    }, 500)

  }

  onClickButtonFunctions = (event) => {

    let buttonNav = event.target.attributes.nav.value

    this.setState({ initDismount: true })

    this.initResetTimeout = setTimeout(() => {
      this.setState({
        showButtons: false,
        showFooter: false,
        showWrapper: false,
      })
    }, 250)

    if (buttonNav === 'game')  {
      this.resetTimeout = setTimeout(() => {
        this.props.history.push( routes.game )
        this.props.resetGame()
      }, 750 )
    }
    else this.resetTimeout = setTimeout(() => { this.props.history.push( routes.home ) }, 750 )
  }

  onDismount = () => {
    this.setState({ initDismount: true })
    this.dismountedTimeout = setTimeout(() => { this.setState({ showSubmitScore: false })}, 500)
    this.clearTimersTimeout = setTimeout(() => { this.clearTimers() }, 1000)
  }

  clearTimers = () => {
    clearTimeout(this.componentTimeout)
    clearTimeout(this.initResetTimeout)
    clearTimeout(this.resetTimeout)
    clearTimeout(this.dismountedTimeout)
    clearTimeout(this.clearTimersTimeout)
  }

  componentWillUnmount(){ this.clearTimers() }

  render(){

  let wrapperClass, pillClass, rowClass1, subRowClass1

  if(this.props.isMobile){
    if(this.props.orientation === "landscape") {
      rowClass1 = 'submit_score_mobile_landscapeR1'
      subRowClass1 = 'submit_score_mobile_landscapeSR1'
        if(this.state.initDismount) {
            wrapperClass = "submit_score_mobile_wrapper_landscape"
            pillClass = "dismount_submit_score_mobile_pill_landscape"
        } else {
            wrapperClass = "submit_score_mobile_wrapper_landscape"
            pillClass = "submit_score_mobile_pill_landscape"
        }
    } else {
      rowClass1 = 'submit_score_mobile_portraitR1'
      subRowClass1 = 'submit_score_mobile_portraitSR1'
      if(this.state.initDismount) {
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
        { this.state.showWrapper ?
          <div className={ wrapperClass }>
            <div className={ pillClass }>
              <SubmitScoreHeader
                isMobile={ this.props.isMobile }
                initDismount={ this.state.initDismount }
                orientation={ this.props.orientation }
              />
              <div className={ rowClass1 }>
                <SubmitScoreCounter
                  count={ this.props.count }
                  initDismount={ this.state.initDismount }
                  isMobile={ this.props.isMobile }
                  orientation={ this.props.orientation }
                />
                <div className={ subRowClass1 }>
                  <SubmitScoreRank
                    isMobile={ this.props.isMobile }
                    initDismount={ this.state.initDismount }
                    orientation={ this.props.orientation }
                    rank={ this.props.rank }
                  />
                  <SubmitScorePower
                    isMobile={ this.props.isMobile }
                    initDismount={ this.state.initDismount }
                    orientation={ this.props.orientation }
                    power={ this.props.power }
                    powerRaw={ this.props.powerRaw }
                  />
                </div>
              </div>
              <SubmitScoreFormContainer
                count={ this.props.count }
                getPlayer={ this.props.getPlayer }
                isMobile={ this.props.isMobile }
                initDismount={ this.state.initDismount }
                onDismount={ this.onDismount }
                orientation={ this.props.orientation }
                power={ this.props.power }
                powerRaw={ this.props.powerRaw }
              />
            </div>
            <SubmitScoreButtonsContainer
              initDismount={ this.state.initDismount }
              isMobile={ this.props.isMobile }
              onClickButtonFunctions={ this.onClickButtonFunctions }
              orientation={ this.props.orientation }
            />
          </div>
        :
          <></>
        }
        { this.state.showFooter ?
          <FooterContainer
            initDismount={ this.state.initDismount }
          />
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