import React from 'react'

import { Redirect } from 'react-router-dom'
import { routes } from '../utility/paths'

import Footer from '../UI/Footer/Footer'

import SubmitScoreHeader from './SubmitScoreComponents/SubmitScoreHeader/SubmitScoreHeader'
import SubmitScoreCounter from './SubmitScoreComponents/SubmitScoreCounter/SubmitScoreCounter'
import SubmitScoreRank from './SubmitScoreComponents/SubmitScoreRank/SubmitScoreRank'
import SubmitScorePower from './SubmitScoreComponents/SubmitScorePower/SubmitScorePower'

import SubmitScoreFormContainer from './SubmitScoreComponents/SubmitScoreForm/SubmitScoreFormContainer'
import SubmitScoreButtonsContainer from './SubmitScoreComponents/SubmitScoreButtons/SubmitScoreButtonsContainer'

import './SubmitScoreDesktopContainer.css'
import './SubmitScoreMobileContainerLandscape.css'
import './SubmitScoreMobileContainerPortrait.css'

export default class SubmitScoreContainer extends React.Component {

  state = {
    player: '',
    showHeader: false,
    showCounter: false,
    showRank: false,
    showPower: false,
    showForm: false,
    showButtons: false,
    showSubmitScore: true,
    showFooter: false,
    initDismount: false
  }

  componentDidMount(){
    document.title = 'Spacebar Smasher - Submit Score'

    this.componentTimeout = setTimeout(() => {
      this.setState({
        showHeader: true,
        showCounter: true,
        showRank: true,
        showPower: true,
        showForm: true,
        showButtons: true,
        showFooter: true
      })
    }, 500)

  }

  onClickButtonFunctions = (event) => {

    let buttonNav = event.target.attributes.nav.value

    this.setState({ initDismount: true })

    this.initResetTimeout = setTimeout(() => {
      this.setState({
        showHeader: false,
        showCounter: false,
        showRank: false,
        showPower: false,
        showForm: false,
        showButtons: false,
        showFooter: false
      })
    }, 500)

    // if (buttonNav === 'game')  {
    //   this.resetTimeout = setTimeout(() => {
    //     this.props.history.push( routes.game )
    //     this.props.resetGame()
    //   }, 1000 )
    // }
    // else this.resetTimeout = setTimeout(() => { this.props.history.push( routes.home ) }, 1000 )
  }

  onDismount = () => {
    this.setState({ initDismount: true })
    this.dismountedTimeout = setTimeout(() => { this.setState({ showSubmitScore: false })}, 500)
    this.clearTimersTimeout = setTimeout(() => { this.clearTimers() }, 750)
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

    let wrapperClass, pillClass

  if(this.props.isMobile){
    if(this.props.orientation === "landscape" && window.innerWidth < 1024) {
        wrapperClass = "submit_score_mobile_wrapper_landscape"
        pillClass = "submit_score_mobile_pill_landscape"
    } else {
        wrapperClass = "submit_score_mobile_wrapper_portrait"
        pillClass = "submit_score_mobile_pill_portrait"
    }
  } else {
    wrapperClass = "submit_score_desktop_wrapper"
    pillClass = "submit_score_desktop_pill"
  }

    const submit_score =
      <>
        <div className={ wrapperClass }>
          <div className={ pillClass }>
            <SubmitScoreHeader
              isMobile={ this.props.isMobile }
              initDismount={ this.state.initDismount }
              orientation={ this.props.orientation }
              showHeader={ this.state.showHeader }
            />
            <SubmitScoreCounter
              count={ this.props.count }
              initDismount={ this.state.initDismount }
              isMobile={ this.props.isMobile }
              orientation={ this.props.orientation }
              showCounter={ this.state.showCounter }
            />
            <SubmitScoreRank
              isMobile={ this.props.isMobile }
              initDismount={ this.state.initDismount }
              orientation={ this.props.orientation }
              rank={ this.props.rank }
              showRank={ this.state.showRank }
            />
            <SubmitScorePower
              isMobile={ this.props.isMobile }
              initDismount={ this.state.initDismount }
              orientation={ this.props.orientation }
              power={ this.props.power }
              powerRaw={ this.props.powerRaw }
              showPower={ this.state.showPower }
            />
            <SubmitScoreFormContainer
              count={ this.props.count }
              getPlayer={ this.props.getPlayer }
              isMobile={ this.props.isMobile }
              initDismount={ this.state.initDismount }
              onDismount={ this.onDismount }
              orientation={ this.props.orientation }
              power={ this.props.power }
              powerRaw={ this.props.powerRaw }
              showForm={ this.state.showForm }
            />
          </div>
          <SubmitScoreButtonsContainer
            initDismount={ this.state.initDismount }
            isMobile={ this.props.isMobile }
            onClickButtonFunctions={ this.onClickButtonFunctions }
            orientation={ this.props.orientation }
            showButtons={ this.state.showButtons }
          />
        </div>
        { this.state.showFooter ?
          <Footer
            initDismount={ this.state.initDismount }
          />
        :
          <></>
        }
      </>

    return(
      <>
        { this.state.showSubmitScore ?
          submit_score
        :
          <Redirect to={ routes.scoreboard } />
        }
      </>
    )
  }
}