import React from 'react'

import { Redirect } from 'react-router-dom'

import SubmitScoreHeader from './SubmitScoreComponents/SubmitScoreHeader'
import SubmitScoreCounter from './SubmitScoreComponents/SubmitScoreCounter'
import SubmitScoreRank from './SubmitScoreComponents/SubmitScoreRank'
import SubmitScorePower from './SubmitScoreComponents/SubmitScorePower'

import SubmitScoreFormContainer from './SubmitScoreForm/SubmitScoreFormContainer'
import SubmitScoreButtonsContainer from './SubmitScoreButtons/SubmitScoreButtonsContainer'

import './SubmitScoreContainer.css'

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
    initDismount: false
  }

  componentDidMount(){
    this.headerTimeout = setTimeout(() => { this.setState({ showHeader: true })}, 500)
    this.scoreTimeout = setTimeout(() => { this.setState({ showCounter: true })}, 500)
    this.rankTimeout = setTimeout(() => { this.setState({ showRank: true })}, 500)
    this.powerTimeout = setTimeout(() => { this.setState({ showPower: true })}, 500)
    this.formTimeout = setTimeout(() => { this.setState({ showForm: true })}, 500)
    this.bottomButtonsTimeout = setTimeout(() => { this.setState({ showButtons: true })}, 500)
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
        showButtons: false
      })
    }, 500)

    if (buttonNav === 'game')  {
      this.resetTimeout = setTimeout(() => {
        this.props.history.push('/spacebarsmasher/' + buttonNav)
        this.props.resetGame()
      }, 1000 )
    }
    else this.resetTimeout = setTimeout(() => { this.props.history.push('/spacebarsmasher') }, 1000 )
  }


  onDismount = () => {
    this.setState({ initDismount: true })
    this.dismountedTimeout = setTimeout(() => { this.setState({ showSubmitScore: false })}, 500)
    this.clearTimersTimeout = setTimeout(() => { this.clearTimers() }, 750)
  }

  clearTimers = () => {
    clearTimeout(this.headerTimeout)
    clearTimeout(this.scoreTimeout)
    clearTimeout(this.rankTimeout)
    clearTimeout(this.powerTimeout)
    clearTimeout(this.formTimeout)
    clearTimeout(this.bottomButtonsTimeout)
    clearTimeout(this.initResetTimeout)
    clearTimeout(this.resetTimeout)
    clearTimeout(this.dismountedTimeout)
  }

  componentWillUnmount(){ this.clearTimers() }

  render(){
    const submit_score =
      <>
        <SubmitScoreHeader
          showHeader={ this.state.showHeader }
          initDismount={ this.state.initDismount }
        />
        <SubmitScoreCounter
          count={ this.props.count }
          showCounter={ this.state.showCounter }
          initDismount={ this.state.initDismount }
        />
        <SubmitScoreRank
          rank={ this.props.rank }
          showRank={ this.state.showRank }
          initDismount={ this.state.initDismount }
        />
        <SubmitScorePower
          power={ this.props.power }
          showPower={ this.state.showPower }
          initDismount={ this.state.initDismount }
        />
        <SubmitScoreFormContainer
          showForm={ this.state.showForm }
          count={ this.props.count }
          power={ this.props.power }
          getPlayer={ this.props.getPlayer }
          initDismount={ this.state.initDismount }
          onDismount={ this.onDismount }
        />
        <SubmitScoreButtonsContainer
          showButtons={ this.state.showButtons }
          initDismount={ this.state.initDismount }
          onClickButtonFunctions={ this.onClickButtonFunctions }
        />
      </>

    return(
      <>
        { this.state.showSubmitScore ?
          submit_score
        :
          <Redirect to="/spacebarsmasher/scoreboard" />
        }
      </>
    )
  }
}