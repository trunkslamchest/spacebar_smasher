import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../../store/actions/actionIndex'

import { fetch } from '../../../utility/paths'

import scoreboardFunctions from '../../../utility/scoreboardFunctions'
import getTime from '../../../utility/getTime'
import validatePost from '../../../utility/validatePost'

import broNames from '../../../datasets/broNames'

import SubmitScoreForm from './SubmitScoreForm/SubmitScoreForm'
import SubmitScoreErrorContainer from './SubmitScoreErrorHandling/SubmitScoreErrorContainer'

import Modal from '../../../UI/modal/modal'

class SubmitScoreFormContainer extends React.Component {

  state={
    broName: '',
    player: '',
    modal: {
      initDismount: false,
      show: false,
      validationErrors: []
    },
    submitClicked: false
  }

  initDismountModal = () => {
    document.title = 'Spacebar Smasher - Submit Score'
    this.setState({
      modal: {
        ...this.state.modal,
        initDismount: true
      }
    }, this.onDismountModal())
  }

  onDismountModal = () => {
    this.dismountModalTimeout = setTimeout(() => {
      this.setState({
        modal: {
          ...this.state.modal,
          show: false,
          initDismount: false,
          validationErrors: []
        }
      })
    }, 250)
  }

  onNameChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

  onSubmit = (event) => {
    event.persist()
    event.preventDefault()
    this.addScore(event)
    this.setState({ submitClicked: true })
  }

  addScore = (event) => {

    let postCheck = validatePost(event.target[0].value.trim(), this.props.count)

    if (!(postCheck.valid)) {
      this.setState({
        modal: {
          ...this.state.modal,
          show: true,
          validationErrors: postCheck.errors
        },
        broName: broNames.random()
      })
    } else {
      if(!this.state.submitClicked){

        let playerObj = {
          ...this.props.scoreboard.score,
          name: this.state.player,
          timestamp: getTime('fullDate')
        }

        if(this.props.scoreboard.allScores.length > 0){

          scoreboardFunctions('post', fetch.post, playerObj)
          .then(resObj => {
            if(!!resObj){
              this.props.onSubmitScore(resObj)
              this.props.onDismount(event)
            }
          })

        } else {

          scoreboardFunctions('get', fetch.get)
          .then(resObj => {
            this.props.onGetScoreboard(Object.entries(resObj.players))
            scoreboardFunctions('post', fetch.post, playerObj)
            .then(resObj => {
              if(!!resObj){
                this.props.onSubmitScore(resObj)
                this.props.onDismount(event)
              }
            })
          })

        }
      }
    }
  }

  componentWillUnmount(){ clearTimeout(this.dismountModalTimeout) }

  render(){
    return(
      <>
      { this.state.modal.show ?
          <Modal
            show={ this.state.modal.show }
            initDismount={ this.state.modal.initDismount }
          >
            <SubmitScoreErrorContainer
              broName={ this.state.broName }
              count={ this.props.game.score.count }
              validationErrors={ this.state.modal.validationErrors }
              initDismountModal={ this.initDismountModal }
            />
          </Modal>
        :
          <></>
        }
        <SubmitScoreForm
          onNameChange={ this.onNameChange }
          submitClicked={ this.state.submitClicked }
          onSubmit={ this.onSubmit }
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    scoreboard: state.scoreboard,
    ui: state.ui
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onGetScoreboard: (scoreboard) => dispatch(actions.getScoreboard(scoreboard)),
    onSubmitScore: (score) => dispatch(actions.submitScore(score)),
    onStoreScore: (score) => dispatch(actions.storeScore(score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitScoreFormContainer)
