import React from 'react'

import { Redirect } from 'react-router-dom'
import { routes } from '../../utility/paths'

import Footer from '../../UI/Footer/Footer'

import SubmitScoreHeader from './SubmitScoreComponents/SubmitScoreHeader'
import SubmitScoreCounter from './SubmitScoreComponents/SubmitScoreCounter'
import SubmitScoreRank from './SubmitScoreComponents/SubmitScoreRank'
import SubmitScorePower from './SubmitScoreComponents/SubmitScorePower'

import SubmitScoreFormContainer from './SubmitScoreForm/SubmitScoreFormContainer'
import SubmitScoreButtonsContainer from './SubmitScoreButtons/SubmitScoreButtonsContainer'

import './SubmitScoreContainer.css'
import './SubmitScoreDismount.css'

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

    if (buttonNav === 'game')  {
      this.resetTimeout = setTimeout(() => {
        this.props.history.push( routes.game )
        this.props.resetGame()
      }, 1000 )
    }
    else this.resetTimeout = setTimeout(() => { this.props.history.push( routes.home ) }, 1000 )
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
    const submit_score =
      <>
        <div className="submit_score_wrapper">
          <div className="submit_score_pill">
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
              powerRaw={ this.props.powerRaw }
              showPower={ this.state.showPower }
              initDismount={ this.state.initDismount }
            />
            <SubmitScoreFormContainer
              showForm={ this.state.showForm }
              count={ this.props.count }
              power={ this.props.power }
              powerRaw={ this.props.powerRaw }
              getPlayer={ this.props.getPlayer }
              initDismount={ this.state.initDismount }
              onDismount={ this.onDismount }
            />
          </div>
          <SubmitScoreButtonsContainer
            showButtons={ this.state.showButtons }
            initDismount={ this.state.initDismount }
            onClickButtonFunctions={ this.onClickButtonFunctions }
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