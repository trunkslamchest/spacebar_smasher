import React from 'react'

import detectOrientation from '../utility/detectOrientation'

import './GameMobile.css'
import './GameMobileSmashButton.css'

export default class GameMobile extends React.Component {

  state={
    smashed: false,
    isLandscape: detectOrientation
  }

  constructor(props){
    super(props)
    this.detectOrientation = this.detectOrientation.bind(this);
  }

  componentDidMount(){
    window.addEventListener("orientationchange", this.detectOrientation, false)

    // this.detectOrientation()
  }

  componentDidUpdate(){

  }

  onSmash = (event) => {
    this.props.onSmash()
    this.setState({ smashed: true })
    this.timerTimeout = setTimeout(() => { this.setState({ smashed: false })}, 25)
  }

  detectOrientation(event){
    if(!window.orientation) this.setState({isLandscape: false})
    else this.setState({isLandscape: true})
  }

  onRotateLandscape = () => {

  }

  onRotatePortrait = () => {

  }

  render(){

    console.log(this.state.isLandscape)


    const blank = <></>

    const time = <h1>{ this.props.time ? this.props.time : (0.00).toFixed(2) }</h1>
    const counter = <h1>{ this.props.count ? this.props.count : 0 }</h1>
    const rank = <h1>{ this.props.rank }</h1>
    const power = <h1>{ (this.props.power).toFixed(3) }</h1>

    return(
      <>
        <div className={{
              false: "blank",
              true: this.props.initDismount ? "dismount_game_timer" : "game_timer"
            }[this.props.showTimer]}
        >
          <h2>TIME</h2>
          { this.props.showTimer ? time : blank }
        </div>

        <div className={{
              false: "blank",
              true: this.props.initDismount ? "dismount_game_counter" : "game_counter"
            }[this.props.showCounter]}
        >
          <h2>SMASHES</h2>
          { this.props.showCounter ? counter : blank }
        </div>

        <div className={{
              false: "blank",
              true: this.props.initDismount ? "dismount_game_rank" : "game_rank"
            }[this.props.showRank]}
        >
          <h2>RANK</h2>
          { this.props.showRank ? rank : blank }
        </div>

        <div className={{
              false: "blank",
              true: this.props.initDismount ? "dismount_game_power_mobile" : "game_power_mobile"
            }[this.props.showPower]}
        >
          <h2>POWER</h2>
          { this.props.showPower ? power : blank }

          <div className={this.props.showPower ? "game_power_bar": "blank"}>
            <meter value={this.props.power} min="0.0" low="1.0" optimum="2.0" high="4.0" max="6.0">
            </meter>
          </div>

        </div>

          <div
            // className={this.props.showMobileSmashButton ? "game_mobile_smash_button" : "blank"}
            className={{
              false: "blank",
              true: this.props.initDismount ? "dismount_game_mobile_smash_button" : "game_mobile_smash_button"
            }[this.props.showMobileSmashButton]}
          >
            <button
              // className={this.props.showMobileSmashButton ? "smash_button" : "blank"}
              className={{
                false: "blank",
                true: this.state.smashed ? "smash_button_on_smash" : "smash_button"
              }[this.props.showMobileSmashButton]}
              onClick={this.onSmash}
            >
              SMASH!
            </button>
          </div>
      </>
    )

  }
}