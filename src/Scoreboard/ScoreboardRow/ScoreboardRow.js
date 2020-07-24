import React from 'react'
import { connect } from 'react-redux'

import { scoreboardRow } from '../ScoreboardFunctions/classSwitch'

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
    return(
      <div
        className={ this.props.scoreboard.score.name === this.props.score.name ? scoreboardRow(this.props).highlighted : scoreboardRow(this.props).row }
        ref={ this.rowRef }
      >
        <div className={ scoreboardRow(this.props).place }>
          { this.props.place }
        </div>
        <div className={ scoreboardRow(this.props).name }>
          { this.props.score.name }
        </div>
          <div className={ scoreboardRow(this.props).power }>
            <meter value={ this.props.score.power_level } min="0.0" low="1.0" optimum="2.0" high="3.0" max="4.0"></meter>
            <span>{ (this.props.score.power_percent).toFixed(2) }%</span>
          </div>
        <div className={ scoreboardRow(this.props).score } >
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