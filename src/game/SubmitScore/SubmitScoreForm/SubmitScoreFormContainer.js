import React from 'react'

import SubmitScoreForm from './SubmitScoreForm'

import scoreboardFunctions from '../../../utility/scoreboardFunctions'

import broNames from '../../../datasets/broNames'

import './SubmitScoreFormContainer.css'

export default class SubmitScoreFormContainer extends React.Component {

  state={
    player: ''
  }

  onNameChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

  onSubmit = (event) => {
    event.persist()
    this.addScore(event)
    this.props.getPlayer(this.state.player)
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
      .then( this.props.onDismount() )
    }
  }

  render(){
    return(
      <SubmitScoreForm
        player={ this.state.player }
        showForm={ this.props.showForm }
        initDismount={ this.props.initDismount }
        onSubmit={ this.onSubmit }
        onNameChange={ this.onNameChange }
      />
    )
  }
}