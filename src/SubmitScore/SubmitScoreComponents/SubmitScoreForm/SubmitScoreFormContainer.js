import React from 'react'

import { connect } from 'react-redux'
import * as actions from '../../../store/actions/actionIndex'

import { fetch } from '../../../utility/paths'
import scoreboardFunctions from '../../../utility/scoreboardFunctions'
import validatePost from '../../../utility/validatePost'
import { submitScoreContainer } from '../../SubmitScoreFunctions/classSwitch'

import broNames from '../../../datasets/broNames'

import SubmitScoreCounter from '../SubmitScoreCounter/SubmitScoreCounter'
import SubmitScoreErrorContainer from './SubmitScoreErrorHandling/SubmitScoreErrorContainer'
import SubmitScoreForm from './SubmitScoreForm/SubmitScoreForm'
import SubmitScoreHeader from '../SubmitScoreHeader/SubmitScoreHeader'
import SubmitScorePower from '../SubmitScorePower/SubmitScorePower'
import SubmitScoreRank from '../SubmitScoreRank/SubmitScoreRank'

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
    submitClicked: false,
    fixingRedux: false,
    fixedRedux: false,
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
        },
        submitClicked: false
      })
    }, 250)
  }

  fixRedux = (event) => {
    event.persist()
    this.setState({ fixingRedux: true })
    scoreboardFunctions('get', fetch.get)
    .then(resObj => {
      if(!!resObj){
        this.props.onGetScoreboard(Object.entries(resObj.players))
        let playerObj = {
          ...this.props.scoreboard.score,
          name: this.state.player
        }
        this.setState({ fixedRedux: true, fixingRedux: false })
        scoreboardFunctions('post', fetch.post, playerObj)
        .then(resObj => {
          if(!!resObj){
            this.initDismountModal()
            this.props.onSubmitScore(resObj)
            this.props.onDismount(event)
          }
        })
      }
    })
  }

  onNameChange = (event) => { this.setState({ [event.target.name]: event.target.value }) }

  onSubmit = (event) => {
    event.persist()
    event.preventDefault()
    this.addScore(event)
    this.setState({ submitClicked: true })
  }

  addScore = (event) => {
    let postCheck = validatePost(event.target[0].value.trim(), this.props.scoreboard.score.score)
    if (!(postCheck.valid)) {
      this.setState({
        modal: {
          ...this.state.modal,
          show: true,
          validationErrors: postCheck.errors
        },
        broName: `Try Again, ${broNames.random()}`
      })
    } else {
      if(!this.state.submitClicked){
        if(!this.props.scoreboard.allScores || this.props.scoreboard.allScores.length === 0){
          this.setState({ modal: { validationErrors: [] } })
          this.setState({
            modal: {
              show: true,
              validationErrors: [{code: 69, msg: "Redux couldn't find the scoreboard" }]
            },
            broName: "Click The Button Below To Fix Redux"
          })
        } else {
          let playerObj = {
            ...this.props.scoreboard.score,
            name: this.state.player
          }
          scoreboardFunctions('post', fetch.post, playerObj)
          .then(resObj => {
            if(!!resObj){
              this.props.onSubmitScore(resObj)
              this.props.onDismount(event)
            }
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
              validationErrors={ this.state.modal.validationErrors }
              initDismountModal={ this.initDismountModal }
              fixRedux={ this.fixRedux }
              fixingRedux={ this.state.fixingRedux }
              fixedRedux={ this.state.fixedRedux }
            />
          </Modal>
        :
          null
        }
        <div className={ submitScoreContainer(this.props).pill }>
          <SubmitScoreHeader />
          <div className={ submitScoreContainer(this.props).row }>
            <SubmitScoreCounter />
            <div className={ submitScoreContainer(this.props).subRow }>
              <SubmitScoreRank />
              <SubmitScorePower />
            </div>
          </div>
          <SubmitScoreForm
            onNameChange={ this.onNameChange }
            modal={ this.state.modal.show }
            submitClicked={ this.state.submitClicked }
            onSubmit={ this.onSubmit }
          />
        </div>
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
    onGetScoreboard: (scoreboard) => dispatch(actions.getScoreboard(scoreboard)),
    onSubmitScore: (score) => dispatch(actions.submitScore(score)),
    onStoreScore: (score) => dispatch(actions.storeScore(score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitScoreFormContainer)