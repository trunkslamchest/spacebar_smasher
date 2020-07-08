import React from 'react'

import { Redirect } from 'react-router-dom'

import scoreboardFunctions from '../utility/scoreboardFunctions'

import broNames from '../datasets/broNames'

import './SubmitScore.css'

export default class SubmitScore extends React.Component {

  state = {
    player: '',
    showHeader: false,
    showScore: false,
    showRank: false,
    showPower: false,
    showForm: false,
    showBottomButtons: false,
    showSubmitScore: true,
    initDismount: false
  }

  componentDidMount(){
    this.headerTimeout = setTimeout(() => { this.setState({ showHeader: true })}, 500)
    this.scoreTimeout = setTimeout(() => { this.setState({ showScore: true })}, 500)
    this.rankTimeout = setTimeout(() => { this.setState({ showRank: true })}, 500)
    this.powerTimeout = setTimeout(() => { this.setState({ showPower: true })}, 500)
    this.formTimeout = setTimeout(() => { this.setState({ showForm: true })}, 500)
    this.bottomButtonsTimeout = setTimeout(() => { this.setState({ showBottomButtons: true })}, 500)
  }

  onSubmitScoreChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

  onSubmitScoreFunctions = (event) => {
    event.persist()
    this.addScore(event)
  }

  addScore = (event) => {
    event.preventDefault()

    let playerObj = {
      name: this.state.player,
      score: this.props.count,
      power_level: this.props.power,
      timestamp: 'test'
    }

    let name = event.target[0].value.trim()
    let randomBroName = broNames[Math.floor(Math.random() * broNames.length)]

    if (name === "") alert(`Enter Your Name, ${randomBroName}`)
    else {
      scoreboardFunctions('post', 'http://localhost:5001/spacebarsmasher-96ba1/us-east1/addScore', playerObj)
      // scoreboardFunctions('post', 'https://us-east1-spacebarsmasher-96ba1.cloudfunctions.net/addScore', playerObj)
      .then( this.onDismount() )
    }
  }

  onClickButtonFunctions = (event) => {

    let buttonNav = event.target.attributes.nav.value

    this.setState({ initDismount: true })

    this.initResetTimeout = setTimeout(() => {
      this.setState({
        showHeader: false,
        showScore: false,
        showRank: false,
        showPower: false,
        showForm: false,
        showBottomButtons: false
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
    this.props.getPlayer(this.state.player)
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

    const blank = <></>

    const score = <h1>{ this.props.count }</h1>
    const rank = <h1>{ this.props.rank }</h1>
    const power = this.props.power

    const submit_score =
      <>
        <div className={{
              false: "blank",
              true: this.state.initDismount ? "dismount_submit_score_header" : "submit_score_header"
            }[this.state.showHeader]}
        >
          <h1>OUTTA TIME!</h1>
        </div>

        <div className={{
              false: "blank",
              true: this.state.initDismount ? "dismount_submit_score_counter" : "submit_score_counter"
            }[this.state.showScore]}
        >
          <h2>SMASHES</h2>
          { this.state.showScore ? score : blank }
        </div>

        <div className={{
              false: "blank",
              true: this.state.initDismount ? "dismount_submit_score_rank" : "submit_score_rank"
            }[this.state.showRank]}
        >
          <h2>RANK</h2>
          { this.state.showRank ? rank : blank }
        </div>

        <div className={{
              false: "blank",
              true: this.state.initDismount ? "dismount_submit_score_power" : "submit_score_power"
            }[this.state.showPower]}
        >
          <h2>POWER</h2>

          <div className={this.state.showPower ? "game_power_bar": "blank"}>
            <meter value={ power } min="0.0" low="1.0" optimum="2.0" high="4.0" max="6.0">
            </meter>
          </div>

        </div>

        <div className={{
              false: "blank",
              true: this.state.initDismount ? "dismount_submit_score_form" : "submit_score_form"
            }[this.state.showForm]}
        >
          <h2>Submit Score</h2>

          <form
            name="submit_score_form"
            onSubmit={ this.onSubmitScoreFunctions }
          >
            <input
              name="player"
              type="text"
              className="submit_score_text_box"
              placeholder="Enter Your Name"
              autoComplete="off"
              value={ this.state.player }
              onChange={ this.onSubmitScoreChange }
            />
            <input
              className="submit_score_button"
              type="submit"
              value="Confirm"
            />
          </form>

        </div>

        <div className={{
              false: "blank",
              true: this.state.initDismount ? "dismount_submit_score_bottom_buttons_container" : "submit_score_bottom_buttons_container"
            }[this.state.showBottomButtons]}
        >
          <button
            nav="main_menu"
            name="main_menu_button"
            className="main_menu_button"
            onClick={ this.onClickButtonFunctions }
          >
            Main Menu
          </button>
          <button
            nav="game"
            name="try_again_button"
            className="try_again_button"
            onClick={ this.onClickButtonFunctions }
          >
            Try Again
          </button>
        </div>
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