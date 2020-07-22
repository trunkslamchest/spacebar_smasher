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
    event.preventDefault()

    this.addScore(event)

    this.setState({ submitClicked: true })
  }

  addScore = (event) => {
    event.preventDefault()

    let playerObj = {
      name: this.state.player,
      score: this.props.count,
      power_level: this.props.powerRaw,
      power_percent: this.props.power,
      timestamp: getTime('fullDate')
    }

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
        scoreboardFunctions('post', fetch.post, playerObj)
        .then(resObj => {
          if(!!resObj){
            this.props.onStorePlayer(this.state.player)
            this.props.onDismount()
          }
        })
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
              count={ this.props.count }
              validationErrors={ this.state.modal.validationErrors }
              initDismountModal={ this.initDismountModal }
            />
          </Modal>
        :
          null
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
    device: state.detect.device,
    orientation: state.detect.orientation,
    player: state.player.name,
    ui: state.ui
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onStorePlayer: (name) => dispatch(actions.storePlayer(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitScoreFormContainer)
