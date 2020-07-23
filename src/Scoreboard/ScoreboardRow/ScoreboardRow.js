import React from 'react'
import { connect } from 'react-redux'

import './ScoreboardRowDesktop.css'
import './ScoreboardRowMobileLandscape.css'
import './ScoreboardRowMobilePortrait.css'

class ScoreboardRow extends React.Component {

  constructor(props) {
    super(props);
    this.rowRef = React.createRef();
  }

  componentDidMount() {
    if(this.props.scoreboard.score.name === this.props.score.name ) {
      this.scrollToHighlightTimeout = setTimeout(() => {
        this.rowRef.current.scrollIntoView({
          behavior: 'smooth', block: 'center', inline: 'nearest'
        })
      }, 250)}
    }

  componentWillUnmount(){ clearTimeout(this.scrollToHighlightTimeout) }

  render(){

    let highlightedClass, rowClass, placeClass, nameClass, powerClass, scoreClass

    if(this.props.ui.postGame) {
      if(this.props.detect.device === "mobile"){
        if(this.props.detect.orientation === "landscape") {
          highlightedClass = "highlighted_row_mobile_landscape"
          rowClass = "scoreboard_row_mobile_landscape"
          placeClass = "scoreboard_row_place_mobile_landscape"
          nameClass = "scoreboard_row_name_mobile_landscape"
          powerClass = "scoreboard_row_power_mobile_landscape"
          scoreClass = "scoreboard_row_score_mobile_landscape"
        } else {
          highlightedClass = "highlighted_row_mobile_portrait"
          rowClass = "scoreboard_row_mobile_portrait"
          placeClass = "scoreboard_row_place_mobile_portrait"
          nameClass = "scoreboard_row_name_mobile_portrait"
          powerClass = "scoreboard_row_power_mobile_portrait"
          scoreClass = "scoreboard_row_score_mobile_portrait"
        }
      } else {
        highlightedClass = "highlighted_row_desktop"
        rowClass = "scoreboard_row_desktop"
        placeClass = "scoreboard_row_place_desktop"
        nameClass = "scoreboard_row_name_desktop"
        powerClass = "scoreboard_row_power_desktop"
        scoreClass = "scoreboard_row_score_desktop"
      }
    } else {
      if(this.props.detect.device === "mobile"){
        if(this.props.detect.orientation === "landscape") {
          highlightedClass = "highlighted_row_mobile_landscape"
          rowClass = "scoreboard_row_mobile_landscape"
          placeClass = "scoreboard_row_place_mobile_landscape"
          nameClass = "scoreboard_row_name_mobile_landscape"
          powerClass = "scoreboard_row_power_mobile_landscape"
          scoreClass = "scoreboard_row_score_mobile_landscape"
        } else {
          highlightedClass = "highlighted_row_mobile_portrait"
          rowClass = "scoreboard_row_mobile_portrait"
          placeClass = "scoreboard_row_place_mobile_portrait"
          nameClass = "scoreboard_row_name_mobile_portrait"
          powerClass = "scoreboard_row_power_mobile_portrait"
          scoreClass = "scoreboard_row_score_mobile_portrait"
        }
      } else {
        highlightedClass = "highlighted_row_desktop"
        rowClass = "scoreboard_row_desktop"
        placeClass = "scoreboard_row_place_desktop"
        nameClass = "scoreboard_row_name_desktop"
        powerClass = "scoreboard_row_power_desktop"
        scoreClass = "scoreboard_row_score_desktop"
      }
    }

    return(
      <div
        className={ this.props.scoreboard.score.name === this.props.score.name ? highlightedClass : rowClass }
        ref={ this.rowRef }
      >
        <div className={ placeClass }>
          { this.props.place }
        </div>
        <div className={ nameClass }>
          { this.props.score.name }
        </div>
          <div className={ powerClass }>
            <meter value={ this.props.score.power_level } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0"></meter>
            <span>{ (this.props.score.power_percent).toFixed(2) }%</span>
          </div>
        <div className={ scoreClass } >
          { this.props.score.score }
        </div>
      </div>
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

export default connect(mapStateToProps)(ScoreboardRow)